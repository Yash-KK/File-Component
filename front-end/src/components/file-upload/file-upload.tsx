import React, { useReducer, useRef, useCallback } from "react";
import { Upload, Plus, Image } from "lucide-react";
import type {
  FileUploadProps,
  FileUploadConfig,
  FileWithPreview,
  FileUploadState,
} from "@/components/file-upload/types.ts";
import { UploadService } from "@/lib/file-upload/upload-service.ts";
import {
  cn,
  createFilePreview,
  generateFileId,
  validateFile,
} from "@/lib/file-upload/helper.ts";
import FileUploadPreview from "@/components/file-upload/file-upload-preview.tsx";

const addFiles = (files: FileWithPreview[]) => ({
  type: "ADD_FILES" as const,
  payload: files,
});

const removeFile = (fileId: string) => ({
  type: "REMOVE_FILE" as const,
  payload: fileId,
});

const updateFileStatus = (
  fileId: string,
  status: FileWithPreview["status"],
  progress?: number,
  error?: string
) => ({
  type: "UPDATE_FILE_STATUS" as const,
  payload: { fileId, status, progress, error },
});

const setDragActive = (isDragActive: boolean) => ({
  type: "SET_DRAG_ACTIVE" as const,
  payload: isDragActive,
});

const setError = (error: string | null) => ({
  type: "SET_ERROR" as const,
  payload: error,
});

type Action =
  | ReturnType<typeof addFiles>
  | ReturnType<typeof removeFile>
  | ReturnType<typeof updateFileStatus>
  | ReturnType<typeof setDragActive>
  | ReturnType<typeof setError>;

const defaultConfig: FileUploadConfig = {
  variant: "dropzone",
  maxFileSize: 10 * 1024 * 1024, // i,e 10MB
  acceptedFileTypes: [],
  maxFiles: 5,
  theme: {
    size: "md",
    radius: "md",
    borderStyle: "dashed",
  },
  labels: {
    dropzoneText: "Drop files here or click to browse",
    buttonText: "Choose Files",
    maxSizeText: "Max file size: 10MB",
    dragActiveText: "Drop files here...",
    errorText: "Error uploading file",
    removeText: "Remove file",
    tooManyFilesText: "Too many files. Maximum 5 files allowed.",
    invalidFileTypeText: "Invalid file type. Please upload a valid file.",
  },
  multiple: false,
  showPreviews: true,
  disabled: false,
};

const fileUploadReducer = (
  state: FileUploadState,
  action: Action
): FileUploadState => {
  switch (action.type) {
    case "ADD_FILES": {
      const newFiles = [...state.files, ...action.payload];
      return { ...state, files: newFiles, error: null };
    }
    case "REMOVE_FILE": {
      const updatedFiles = state.files.filter((f) => f.id !== action.payload);
      return { ...state, files: updatedFiles };
    }
    case "UPDATE_FILE_STATUS": {
      const { fileId, status, progress, error } = action.payload;
      const updatedFiles = state.files.map((file) =>
        file.id === fileId ? { ...file, status, progress, error } : file
      );
      return { ...state, files: updatedFiles };
    }
    case "SET_DRAG_ACTIVE": {
      return { ...state, isDragActive: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

const FileUpload: React.FC<FileUploadProps> = ({
  config: userConfig,
  variant,
  onFilesChange,
  onError,
  multiple,
  accept,

  maxSize,
  maxFiles,
  className,
  disabled,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,
  ...props
}) => {
  const config = { ...defaultConfig, ...userConfig };
  const finalVariant = variant || config.variant || "dropzone";
  const finalMultiple = multiple ?? config.multiple ?? false;
  const finalMaxSize = maxSize ?? config.maxFileSize;
  const finalMaxFiles = maxFiles ?? config.maxFiles ?? 5;
  const finalAccept = accept || config.acceptedFileTypes?.join(",");
  const finalDisabled = disabled ?? config.disabled ?? false;

  const [state, dispatch] = useReducer(fileUploadReducer, {
    files: [],
    isDragActive: false,
    isUploading: false,
    error: null,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const processFiles = useCallback(
    async (files: File[]): Promise<FileWithPreview[]> => {
      const validFiles: FileWithPreview[] = [];

      for (const file of files) {
        if (state.files.length + validFiles.length >= finalMaxFiles) {
          dispatch(
            setError(config.labels?.tooManyFilesText || "Too many files")
          );
          onError?.(config.labels?.tooManyFilesText || "Too many files");
          break;
        }

        const error = validateFile(
          file,
          finalMaxSize,
          config.acceptedFileTypes
        );
        if (error) {
          dispatch(setError(error));
          onError?.(error);
          continue;
        }

        const fileId = generateFileId();
        const preview = await createFilePreview(file);

        const fileWithPreview: FileWithPreview = {
          id: fileId,
          name: file.name,
          size: file.size,
          type: file.type,
          preview,
          status: "pending",
        };

        validFiles.push(fileWithPreview);
      }

      return validFiles;
    },
    [
      state.files.length,
      finalMaxFiles,
      finalMaxSize,
      config.acceptedFileTypes,
      config.labels,
      onError,
    ]
  );

  const uploadFiles = useCallback(async (filesToUpload: FileWithPreview[]) => {
    for (const file of filesToUpload) {
      try {
        dispatch(updateFileStatus(file.id, "uploading", 0));

        await UploadService.uploadFile(file, (progress) => {
          dispatch(updateFileStatus(file.id, "uploading", progress));
        });

        dispatch(updateFileStatus(file.id, "success", 100));
      } catch (error) {
        dispatch(
          updateFileStatus(file.id, "error", undefined, "Upload failed")
        );
      }
    }
  }, []);

  const handleFiles = useCallback(
    async (newFiles: File[]) => {
      dispatch(setError(null));

      const validFiles = await processFiles(newFiles);
      if (validFiles.length === 0) return;

      dispatch(addFiles(validFiles));

      const updatedFiles = finalMultiple
        ? [...state.files, ...validFiles]
        : validFiles;

      onFilesChange?.(updatedFiles);
      await uploadFiles(validFiles);
    },
    [processFiles, finalMultiple, state.files, onFilesChange, uploadFiles]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length > 0) {
        handleFiles(files);
      }
    },
    [handleFiles]
  );

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      dragCounter.current++;
      dispatch(setDragActive(true));
    } else if (e.type === "dragleave") {
      dragCounter.current--;
      if (dragCounter.current === 0) {
        dispatch(setDragActive(false));
      }
    }
  }, []);

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current = 0;
      dispatch(setDragActive(false));

      if (finalDisabled) return;

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        await handleFiles(files);
      }
    },
    [handleFiles, finalDisabled]
  );

  const handleRemoveFile = useCallback(
    (fileId: string) => {
      dispatch(removeFile(fileId));
      const updatedFiles = state.files.filter((f) => f.id !== fileId);
      onFilesChange?.(updatedFiles);
    },
    [state.files, onFilesChange]
  );

  const handleClick = useCallback(() => {
    if (!finalDisabled) {
      inputRef.current?.click();
    }
  }, [finalDisabled]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  const renderDropzone = () => (
    <div
      className={cn(
        "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer transition-colors",
        state.isDragActive && "border-blue-500 bg-blue-50",
        finalDisabled && "opacity-50 cursor-not-allowed",
        config.theme?.borderStyle === "solid" && "border-solid",
        config.theme?.borderStyle === "dotted" && "border-dotted"
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      tabIndex={finalDisabled ? -1 : 0}
      role="button"
      aria-label={ariaLabel || config.labels?.dropzoneText}
    >
      <input
        ref={inputRef}
        type="file"
        multiple={finalMultiple}
        accept={finalAccept}
        onChange={handleInputChange}
        className="sr-only"
        disabled={finalDisabled}
        aria-describedby={ariaDescribedBy}
      />

      <div className="flex flex-col items-center gap-4">
        {finalVariant === "image-preview" ? (
          <Image className="w-12 h-12 text-gray-400" />
        ) : (
          <Upload className="w-12 h-12 text-gray-400" />
        )}

        <div>
          <p className="text-lg font-medium text-gray-900">
            {state.isDragActive
              ? config.labels?.dragActiveText
              : config.labels?.dropzoneText}
          </p>
          {config.labels?.maxSizeText && (
            <p className="text-sm text-gray-500 mt-1">
              {config.labels.maxSizeText}
            </p>
          )}
          {config.acceptedFileTypes && config.acceptedFileTypes.length > 0 && (
            <p className="text-xs text-gray-400 mt-1">
              Accepted types: {config.acceptedFileTypes.join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderButton = () => (
    <div className="inline-flex">
      <input
        ref={inputRef}
        type="file"
        multiple={finalMultiple}
        accept={finalAccept}
        onChange={handleInputChange}
        className="sr-only"
        disabled={finalDisabled}
        aria-describedby={ariaDescribedBy}
      />
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={finalDisabled}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
          config.theme?.size === "sm" && "px-3 py-1.5 text-sm",
          config.theme?.size === "lg" && "px-6 py-3 text-lg",
          config.theme?.size === "xl" && "px-8 py-4 text-xl"
        )}
        aria-label={ariaLabel || config.labels?.buttonText}
      >
        <Plus className="w-4 h-4" />
        {config.labels?.buttonText}
      </button>
    </div>
  );

  const renderCompact = () => (
    <div className="inline-flex items-center gap-2">
      <input
        ref={inputRef}
        type="file"
        multiple={finalMultiple}
        accept={finalAccept}
        onChange={handleInputChange}
        className="sr-only"
        disabled={finalDisabled}
        aria-describedby={ariaDescribedBy}
      />
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={finalDisabled}
        className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors"
        aria-label={ariaLabel || "Upload file"}
      >
        <Upload className="w-4 h-4" />
      </button>
      {state.files.length > 0 && (
        <span className="text-sm text-gray-600">
          {state.files.length} file{state.files.length !== 1 ? "s" : ""}
        </span>
      )}
    </div>
  );

  const renderVariant = () => {
    switch (finalVariant) {
      case "button":
        return renderButton();
      case "compact":
        return renderCompact();
      default:
        return renderDropzone();
    }
  };

  return (
    <div className={cn("relative", className)} {...props}>
      {renderVariant()}

      {state.error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{state.error}</p>
        </div>
      )}

      {config.showPreviews && state.files.length > 0 && (
        <div className="mt-4 space-y-2">
          {state.files.map((file) => (
            <FileUploadPreview
              key={file.id}
              file={file}
              config={config}
              onRemove={handleRemoveFile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
