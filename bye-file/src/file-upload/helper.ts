import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export const validateFile = (
  file: File,
  maxSize?: number,
  acceptedTypes?: string[]
): string | null => {
  if (maxSize && file.size > maxSize) {
    return `File size must be less than ${formatFileSize(maxSize)}`;
  }

  if (acceptedTypes && acceptedTypes.length > 0) {
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
    const mimeType = file.type?.toLowerCase() || "";

    const isValidType = acceptedTypes.some((type) => {
      if (type.startsWith(".")) {
        return fileExtension === type.toLowerCase();
      }
      return mimeType.includes(type.toLowerCase());
    });

    if (!isValidType) {
      return `File type not supported. Accepted types: ${acceptedTypes.join(
        ", "
      )}`;
    }
  }

  return null;
};

export const generateFileId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const createFilePreview = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    if (!file.type || !file.type.startsWith("image/")) {
      resolve("");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = () => {
      reader.abort();
      resolve("");
    };

    reader.readAsDataURL(file);
  });
};
