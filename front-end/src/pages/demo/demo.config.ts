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

export const uploadVariants = {
  title: "Variant Examples",
  list: [
    {
      title: "Basic Dropzone",
      config: presetConfigs.basic,
      logLabel: "Basic files",
    },
    {
      title: "Image Preview",
      config: presetConfigs.imageOnly,
      logLabel: "Image files",
    },
    {
      title: "Button Upload",
      config: presetConfigs.button,
      logLabel: "Button files",
    },
    {
      title: "Compact Upload",
      config: presetConfigs.compact,
      logLabel: "Compact files",
    },
  ],
};

export const duplicateFileVariants = {
  title: "Duplicate Files Examples",
  list: [
    {
      title: "Duplicates Not Allowed (Default)",
      description:
        "Try uploading the same file twice - it will show an error message.",
      config: presetConfigs.basic,
      logLabel: "Basic files",
    },
    {
      title: "Duplicates Allowed",
      description: "You can upload the same file multiple times.",
      config: presetConfigs.allowDuplicates,
      logLabel: "Allow duplicates files",
    },
  ],
};

export const toastNotificationDemo = {
  sectionTitle: "Toast Notifications",
  card: {
    title: "Toast Notifications Demo",
    description:
      "The file upload component now uses Radix UI Toast for all error, warning, and success messages. Try uploading files to see the toast notifications in action.",
    config: {
      ...presetConfigs.basic,
      labels: {
        ...presetConfigs.basic.labels,
        dropzoneText: "Try uploading files to see toast notifications",
      },
    },
    logLabel: "Toast demo files",
    errorLabel: "Toast demo error",
    errorToasts: [
      "File validation errors",
      "Duplicate file detection",
      "Upload failures",
      "File size/type restrictions",
    ],
    successToasts: ["Successful file uploads", "File processing completion"],
  },
};

export const usageExamples = {
  sectionTitle: "Usage Examples",
  id: "usage-examples",
  items: [
    {
      title: "Basic Usage",
      code: `import { FileUpload } from '@/components/file-upload'

export default function MyComponent() {
  return (
    <FileUpload
      variant="dropzone"
      multiple={true}
      onFilesChange={(files) => console.log(files)}
    />
  )
}`,
    },
    {
      title: "Config-Driven Usage",
      code: `import { FileUpload } from '@/components/file-upload'
import config from './upload-config.json'

export default function ConfiguredUpload() {
  return (
    <FileUpload
      config={config}
      onFilesChange={(files) => handleUpload(files)}
      onError={(error) => showError(error)}
    />
  )
}`,
    },
    {
      title: "Allow Duplicates Usage",
      code: `import { FileUpload } from '@/components/file-upload'

export default function DuplicateUpload() {
  return (
    <FileUpload
      allowDuplicates={true}
      multiple={true}
      onFilesChange={(files) => console.log(files)}
      onError={(error) => console.error(error)}
    />
  )
}`,
    },
  ],
};
