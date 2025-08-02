import { useState } from "react";
import type {
  FileUploadConfig,
  FileWithPreview,
} from "@/components/file-upload/types.ts";
import FileUpload from "@/components/file-upload/file-upload.tsx";
import { presetConfigs } from "@/pages/demo/config.ts";
import { configProps, PropsTable } from "@/components/props-table/props-table";

const Demo = () => {
  const [configText, setConfigText] = useState(
    JSON.stringify(presetConfigs.basic, null, 2)
  );
  const [currentConfig, setCurrentConfig] = useState<FileUploadConfig>(
    presetConfigs.basic
  );
  const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([]);

  const handleConfigChange = (newConfigText: string) => {
    setConfigText(newConfigText);
    try {
      const parsedConfig = JSON.parse(newConfigText);
      setCurrentConfig(parsedConfig);
    } catch (error) {
      console.error("Invalid JSON config:", error);
    }
  };

  const loadPreset = (presetName: keyof typeof presetConfigs) => {
    const preset = presetConfigs[presetName];
    setCurrentConfig(preset);
    setConfigText(JSON.stringify(preset, null, 2));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            File Upload Component Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive, accessible, and config-driven file upload component
            library with multiple variants and extensive customization options.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Variant Examples
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Basic Dropzone
              </h3>
              <FileUpload
                config={presetConfigs.basic}
                onFilesChange={(files) => console.log("Basic files:", files)}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Image Preview
              </h3>
              <FileUpload
                config={presetConfigs.imageOnly}
                onFilesChange={(files) => console.log("Image files:", files)}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Button Upload
              </h3>
              <FileUpload
                config={presetConfigs.button}
                onFilesChange={(files) => console.log("Button files:", files)}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Compact Upload
              </h3>
              <FileUpload
                config={presetConfigs.compact}
                onFilesChange={(files) => console.log("Compact files:", files)}
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Duplicate Files Examples
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Duplicates Not Allowed (Default)
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Try uploading the same file twice - it will show an error
                message.
              </p>
              <FileUpload
                config={presetConfigs.basic}
                onFilesChange={(files) => console.log("Basic files:", files)}
                onError={(error) => console.log("Error:", error)}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Duplicates Allowed
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                You can upload the same file multiple times.
              </p>
              <FileUpload
                config={presetConfigs.allowDuplicates}
                onFilesChange={(files) =>
                  console.log("Allow duplicates files:", files)
                }
                onError={(error) => console.log("Error:", error)}
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Toast Notifications
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Toast Notifications Demo
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              The file upload component now uses Radix UI Toast for all error,
              warning, and success messages. Try uploading files to see the
              toast notifications in action.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Error Toasts</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• File validation errors</li>
                  <li>• Duplicate file detection</li>
                  <li>• Upload failures</li>
                  <li>• File size/type restrictions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Success Toasts
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Successful file uploads</li>
                  <li>• File processing completion</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <FileUpload
                config={{
                  ...presetConfigs.basic,
                  labels: {
                    ...presetConfigs.basic.labels,
                    dropzoneText:
                      "Try uploading files to see toast notifications",
                  },
                }}
                onFilesChange={(files) =>
                  console.log("Toast demo files:", files)
                }
                onError={(error) => console.log("Toast demo error:", error)}
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Live Config Editor
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Configuration
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.keys(presetConfigs).map((presetName) => (
                    <button
                      key={presetName}
                      onClick={() =>
                        loadPreset(presetName as keyof typeof presetConfigs)
                      }
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
                    >
                      {presetName}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                value={configText}
                onChange={(e) => handleConfigChange(e.target.value)}
                className="w-full h-96 p-4 border border-gray-300 rounded-md font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter JSON configuration..."
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Live Preview
              </h3>

              <FileUpload
                config={currentConfig}
                onFilesChange={setSelectedFiles}
                onError={(error) => console.error("Upload error:", error)}
              />

              {selectedFiles.length > 0 && (
                <div className="mt-6 p-4 bg-gray-50 rounded-md">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Selected Files:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {selectedFiles.map((file, index) => (
                      <li
                        key={file.id || index}
                        className="flex justify-between"
                      >
                        <span>{file.name}</span>
                        <span>{(file.size / 1024).toFixed(1)} KB</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Configuration Options
          </h2>

          <PropsTable data={configProps} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Usage Examples
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Basic Usage
              </h3>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                {`import { FileUpload } from '@/components/file-upload'

export default function MyComponent() {
  return (
    <FileUpload
      variant="dropzone"
      multiple={true}
      onFilesChange={(files) => console.log(files)}
    />
  )
}`}
              </pre>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Config-Driven Usage
              </h3>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                {`import { FileUpload } from '@/components/file-upload'
import config from './upload-config.json'

export default function ConfiguredUpload() {
  return (
    <FileUpload
      config={config}
      onFilesChange={(files) => handleUpload(files)}
      onError={(error) => showError(error)}
    />
  )
}`}
              </pre>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Allow Duplicates Usage
              </h3>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                {`import { FileUpload } from '@/components/file-upload'

export default function DuplicateUpload() {
  return (
    <FileUpload
      allowDuplicates={true}
      multiple={true}
      onFilesChange={(files) => console.log(files)}
      onError={(error) => console.error(error)}
    />
  )
}`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;
