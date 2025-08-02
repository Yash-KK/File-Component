import FileUpload from "@/components/file-upload/file-upload.tsx";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              File Upload
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Component Library
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A modern, accessible, and highly customizable file upload
              component library built with React, TypeScript, and Tailwind CSS.
              Config-driven with full keyboard navigation and screen reader
              support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to={"/demo"}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View Demo
              </Link>
              <a
                href="#installation"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border">
              <FileUpload
                variant="dropzone"
                config={{
                  labels: {
                    dropzoneText:
                      "Try it out! Drop files here or click to browse",
                    maxSizeText: "Demo mode - files won't actually upload",
                  },
                  multiple: true,
                  showPreviews: true,
                  theme: {
                    size: "lg",
                    radius: "lg",
                    borderStyle: "dashed",
                  },
                }}
                onFilesChange={(files) => console.log("Demo files:", files)}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need for file uploads
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern web standards and best practices for
              accessibility and developer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Config-Driven
              </h3>
              <p className="text-gray-600">
                Customize behavior, styling, and labels through simple JSON
                configuration. Perfect for LLM-assisted development and dynamic
                UIs.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fully Accessible
              </h3>
              <p className="text-gray-600">
                Complete keyboard navigation, screen reader support, and WCAG
                2.1 AA compliance. Built with ARIA labels and focus management.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multiple Variants
              </h3>
              <p className="text-gray-600">
                Choose from button, dropzone, compact, image preview, and
                multi-file variants. Each optimized for different use cases and
                layouts.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                TypeScript Ready
              </h3>
              <p className="text-gray-600">
                Built with TypeScript for excellent developer experience. Full
                type safety, IntelliSense support, and comprehensive prop
                validation.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Drag & Drop
              </h3>
              <p className="text-gray-600">
                Intuitive drag and drop functionality with visual feedback.
                Includes keyboard fallbacks and proper ARIA announcements.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Developer Friendly
              </h3>
              <p className="text-gray-600">
                Clean API inspired by shadcn/ui with sensible defaults. Easy to
                integrate, customize, and extend for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="installation" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Installation
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes with our npm package
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Install the package
                </h3>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`npm install @yourorg/file-upload-library
# or
pnpm add @yourorg/file-upload-library`}</code>
              </pre>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Import and use
                </h3>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`import { FileUpload } from '@yourorg/file-upload-library'

export default function MyComponent() {
return (
  <FileUpload
    variant="dropzone"
    multiple={true}
    onFilesChange={(files) => console.log(files)}
  />
)
}`}</code>
              </pre>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Configure with JSON (optional)
                </h3>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// config.json
{
"variant": "image-preview",
"maxFileSize": 5242880,
"acceptedFileTypes": [".jpg", ".png"],
"multiple": true,
"labels": {
  "dropzoneText": "Drop images here"
}
}

// Component
<FileUpload config={config} />`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore all variants, configurations, and examples in our
            comprehensive demo page.
          </p>
          <Link
            to={"/demo"}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Demo & Examples
          </Link>
        </div>
      </section>

      <footer className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              File Upload Component Library
            </h3>
            <p className="text-gray-400 mb-6">
              Built with React, TypeScript, Tailwind CSS, and Radix UI
              primitives
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                npm Package
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
