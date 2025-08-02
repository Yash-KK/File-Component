import React, { useState } from "react";
import { X, File, Image, CheckCircle, AlertCircle } from "lucide-react";
import type {
  FileWithPreview,
  FileUploadConfig,
} from "@/components/file-upload/file-upload.types";
import { cn, formatFileSize } from "@/lib/file-upload/helper.ts";
import ToastComponent from "@/components/file-upload/toast.tsx";

interface FileUploadPreviewProps {
  file: FileWithPreview;
  config?: FileUploadConfig;
  onRemove: (fileId: string) => void;
  onClearError?: (fileId: string) => void;
}

const FileUploadPreview: React.FC<FileUploadPreviewProps> = ({
  file,
  config,
  onRemove,
}) => {
  const isImage = file.type && file.type.startsWith("image/");
  const removeLabel = config?.labels?.removeText || "Remove file";

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const statusIcon = {
    pending: null,
    uploading: (
      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
    ),
    success: <CheckCircle className="w-4 h-4 text-green-600" />,
    error: <AlertCircle className="w-4 h-4 text-red-600" />,
  }[file.status];

  const showErrorToast = () => {
    if (file.error) {
      setToastMessage(file.error);
      setToastOpen(true);
    }
  };

  return (
    <>
      <div
        className={cn(
          "relative flex items-center gap-3 p-3 border rounded-lg bg-gray-50"
        )}
      >
        <div className="flex-shrink-0">
          {isImage && file.preview ? (
            <img
              src={file.preview}
              alt={file.name || "File preview"}
              className="w-10 h-10 object-cover rounded"
              onError={(e) => {
                console.error("Failed to load image preview:", file.preview);
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              {isImage ? (
                <Image className="w-5 h-5 text-gray-500" />
              ) : (
                <File className="w-5 h-5 text-gray-500" />
              )}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {file.name || "Unknown file"}
          </p>
          <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
          {file.error && (
            <button
              type="button"
              onClick={showErrorToast}
              className="text-xs text-red-600 mt-1 hover:text-red-800 underline"
            >
              View error details
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {statusIcon}

          {file.status === "uploading" && file.progress !== undefined && (
            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${file.progress}%` }}
              />
            </div>
          )}

          <button
            type="button"
            onClick={() => onRemove(file.id)}
            className={cn(
              "p-1 rounded-full hover:bg-gray-200 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            )}
            aria-label={`${removeLabel}: ${file.name}`}
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      <ToastComponent
        open={toastOpen}
        onOpenChange={setToastOpen}
        title="File Upload Error"
        message={toastMessage}
        type="error"
      />
    </>
  );
};

export default FileUploadPreview;
