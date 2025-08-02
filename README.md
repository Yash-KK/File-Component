# bye-file 📁

[![npm version](https://img.shields.io/npm/v/bye-file.svg)](https://www.npmjs.com/package/bye-file)
[![npm downloads](https://img.shields.io/npm/dm/bye-file.svg)](https://www.npmjs.com/package/bye-file)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

> A sleek, config-driven file upload component with zero fuss and full flexibility. Drag it, drop it, done.

A modern, accessible, and highly customizable file upload component library built with React, TypeScript, and Tailwind CSS. Features config-driven customization with full keyboard navigation and screen reader support.

## ✨ Features

- 🎨 **Multiple Variants** - Dropzone, button, and image preview modes
- 🔧 **Config-Driven** - JSON-based configuration for easy customization
- ♿ **Fully Accessible** - Complete keyboard navigation and screen reader support
- 🎯 **TypeScript First** - Built with TypeScript for excellent developer experience
- 🌈 **Tailwind Styled** - Beautiful default styles with easy customization
- 📱 **Mobile Friendly** - Responsive design that works on all devices
- 🔌 **Zero Config** - Works out of the box, no setup required
- 🎭 **Theme Support** - Built-in theming with size, radius, and border options

## 🚀 Quick Start

### Installation

```bash
npm install bye-file
```

### Basic Usage

```jsx

import FileUpload from 'bye-file';
import 'bye-file/styles.css'; // Import styles

export default function MyComponent() {
  return (
    <FileUpload
      variant="dropzone"
      multiple={true}
      onFilesChange={(files) => console.log(files)}
    />
  );
}
```

### With Configuration

```jsx
import FileUpload from 'bye-file';

const config = {
  variant: "image-preview",
  maxFileSize: 5242880, // 5MB
  acceptedFileTypes: [".jpg", ".png", ".gif"],
  multiple: true,
  showPreviews: true,
  labels: {
    dropzoneText: "Drop your images here",
    browseText: "Browse Files",
    maxSizeText: "Max file size: 5MB"
  },
  theme: {
    size: "lg",
    radius: "lg",
    borderStyle: "dashed"
  }
};

export default function ImageUploader() {
  const handleFilesChange = (files) => {
    console.log('Selected files:', files);
    // Handle your files here
  };

  return (
    <FileUpload 
      config={config}
      onFilesChange={handleFilesChange}
    />
  );
}
```

## 📖 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"dropzone" \| "button" \| "image-preview"` | `"dropzone"` | Upload component variant |
| `multiple` | `boolean` | `false` | Allow multiple file selection |
| `config` | `FileUploadConfig` | `{}` | Configuration object |
| `onFilesChange` | `(files: File[]) => void` | - | Callback when files are selected |
| `className` | `string` | - | Additional CSS classes |

### Configuration Options

```typescript
interface FileUploadConfig {
  // File restrictions
  maxFileSize?: number; // in bytes
  acceptedFileTypes?: string[]; // e.g., ['.jpg', '.png']
  multiple?: boolean;
  
  // UI customization
  variant?: 'dropzone' | 'button' | 'image-preview';
  showPreviews?: boolean;
  
  // Labels
  labels?: {
    dropzoneText?: string;
    browseText?: string;
    maxSizeText?: string;
    dragActiveText?: string;
    removeText?: string;
  };
  
  // Theme
  theme?: {
    size?: 'sm' | 'md' | 'lg';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    borderStyle?: 'solid' | 'dashed' | 'dotted';
  };
}
```

## 🎨 Variants

### Dropzone
Perfect for drag-and-drop file uploads with a large drop area.

```jsx
<FileUpload variant="dropzone" multiple={true} />
```

### Button
Simple button-style file picker for minimal interfaces.

```jsx
<FileUpload variant="button" />
```

### Image Preview
Specialized for image uploads with preview functionality.

```jsx
<FileUpload 
  variant="image-preview" 
  config={{ 
    acceptedFileTypes: ['.jpg', '.png', '.gif'],
    showPreviews: true 
  }} 
/>
```

## 🎭 Theming

Customize the appearance with the theme configuration:

```jsx
const config = {
  theme: {
    size: 'lg',          // 'sm' | 'md' | 'lg'
    radius: 'lg',        // 'none' | 'sm' | 'md' | 'lg' | 'full'
    borderStyle: 'dashed' // 'solid' | 'dashed' | 'dotted'
  }
};
```

## 🔧 Advanced Usage

### File Validation

```jsx
const config = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  acceptedFileTypes: ['.pdf', '.doc', '.docx'],
  labels: {
    maxSizeText: 'Max file size: 10MB',
    dropzoneText: 'Drop documents here'
  }
};
```

### Custom Labels

```jsx
const config = {
  labels: {
    dropzoneText: 'Drag & drop your files here',
    browseText: 'Choose Files',
    dragActiveText: 'Drop the files here...',
    removeText: 'Remove file',
    maxSizeText: 'Maximum file size: 5MB'
  }
};
```

## 🌟 Examples

Check out our [live demo](https://your-demo-url.com) to see all variants and configurations in action.

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/Yash-KK/File-Component.git

# Install dependencies
npm install

# Start development
npm run dev

# Build the library
npm run build
```

## 📦 Built With

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible primitives
- **Lucide React** - Icons

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/bye-file)
- [GitHub Repository](https://github.com/Yash-KK/File-Component)
- [Live Demo](https://your-demo-url.com)

## 🙋‍♂️ Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by [Yash-KK](https://github.com/Yash-KK)
