import FileUpload from "@/components/file-upload/file-upload.tsx";
import { Heading } from "@/components/heading";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <Heading level={1}> File Upload</Heading>
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

      <section id="installation" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={1}>Quick Installation</Heading>
            <p className="text-xl text-gray-600">
              Get started in minutes with our npm package
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  1
                </div>
                <Heading level={3}>Install the package</Heading>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`npm install @yashkharche/file-upload-library
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
                <code>{`import { FileUpload } from '@yashkharche/file-upload-library'

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
          <Heading level={1} className="text-white">
            Ready to get started?
          </Heading>
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
            <Heading level={2} className="text-white">
              File Upload Component Library
            </Heading>
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
