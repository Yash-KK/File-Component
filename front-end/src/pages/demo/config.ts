export const presetConfigs = {
  basic: {
    variant: "dropzone" as const,
    maxFileSize: 5242880,
    acceptedFileTypes: [".jpg", ".png", ".pdf"],
    theme: {
      size: "md" as const,
      radius: "md" as const,
      borderStyle: "dashed" as const,
    },
    labels: { dropzoneText: "Drop your files here" },
    multiple: false,
    showPreviews: true,
    allowDuplicates: false,
  },
  imageOnly: {
    variant: "image-preview" as const,
    maxFileSize: 2097152,
    acceptedFileTypes: [".jpg", ".jpeg", ".png", ".gif", ".webp"],
    theme: {
      size: "lg" as const,
      radius: "lg" as const,
      borderStyle: "solid" as const,
    },
    labels: {
      dropzoneText: "Drop images here or click to browse",
      maxSizeText: "Max image size: 2MB",
    },
    multiple: true,
    showPreviews: true,
    allowDuplicates: false,
  },
  compact: {
    variant: "compact" as const,
    maxFileSize: 1048576,
    acceptedFileTypes: [".txt", ".csv", ".json"],
    theme: {
      size: "sm" as const,
      radius: "sm" as const,
      borderStyle: "solid" as const,
    },
    multiple: false,
    showPreviews: false,
    allowDuplicates: false,
  },
  button: {
    variant: "button" as const,
    maxFileSize: 10485760,
    acceptedFileTypes: [],
    theme: {
      size: "md" as const,
      radius: "md" as const,
      borderStyle: "solid" as const,
    },
    labels: { buttonText: "Upload Documents" },
    multiple: true,
    showPreviews: true,
    allowDuplicates: false,
  },
  allowDuplicates: {
    variant: "dropzone" as const,
    maxFileSize: 5242880,
    acceptedFileTypes: [".jpg", ".png", ".pdf"],
    theme: {
      size: "md" as const,
      radius: "md" as const,
      borderStyle: "dashed" as const,
    },
    labels: {
      dropzoneText: "Drop your files here (duplicates allowed)",
      duplicateFileText:
        "File already exists. Duplicate files are not allowed.",
    },
    multiple: true,
    showPreviews: true,
    allowDuplicates: true,
  },
};
