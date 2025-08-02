export interface FileWithPreview {
  id: string;
  name: string;
  size: number;
  type: string;
  preview?: string;
  status: "pending" | "uploading" | "success" | "error";
  progress?: number;
  error?: string;
  url?: string;
}

export interface FileUploadConfig {
  variant?: "dropzone" | "button" | "compact" | "image-preview" | "multi-file";
  maxFileSize?: number;
  acceptedFileTypes?: string[];
  maxFiles?: number;
  multiple?: boolean;
  showPreviews?: boolean;
  disabled?: boolean;
  allowDuplicates?: boolean;
  theme?: {
    size?: "sm" | "md" | "lg" | "xl";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    borderStyle?: "solid" | "dashed" | "dotted";
  };
  labels?: {
    dropzoneText?: string;
    buttonText?: string;
    maxSizeText?: string;
    dragActiveText?: string;
    errorText?: string;
    removeText?: string;
    tooManyFilesText?: string;
    invalidFileTypeText?: string;
    duplicateFileText?: string;
  };
}

export interface FileUploadState {
  files: FileWithPreview[];
  isDragActive: boolean;
  isUploading: boolean;
  error: string | null;
}

export interface FileUploadProps {
  variant?: FileUploadConfig["variant"];
  config?: FileUploadConfig;
  onFilesChange?: (files: FileWithPreview[]) => void;
  onError?: (error: string) => void;
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  disabled?: boolean;
  allowDuplicates?: boolean;
  className?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
}
