import { useState } from "react";
import type {
  FileUploadConfig,
  FileWithPreview,
} from "@/components/file-upload/file-upload.types.ts";
import FileUpload from "@/components/file-upload/file-upload.tsx";
import {
  duplicateFileVariants,
  presetConfigs,
  toastNotificationDemo,
  uploadVariants,
  usageExamples,
} from "@/pages/demo/demo.config.ts";
import {
  configProps,
  PropsTable,
} from "@/components/props-table/props-table.tsx";
import { Heading } from "@/components/heading";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const navigate = useNavigate();

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
        <span
          onClick={() => navigate(-1)}
          className="font-mono  hover:underline cursor-pointer"
        >
          {`> cd..`}
        </span>

        <div className="text-center mb-8">
          <Heading level={1}>File Upload Component Demo</Heading>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive, accessible, and config-driven file upload component
            library with multiple variants and extensive customization options.
          </p>
        </div>
        <section className="mb-12" id="variant-examples">
          <Heading>{uploadVariants.title}</Heading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {uploadVariants.list.map(({ title, config, logLabel }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-lg shadow-sm border"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {title}
                </h3>
                <FileUpload
                  config={config}
                  onFilesChange={(files) => console.log(`${logLabel}:`, files)}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12" id="duplicate-file-examples">
          <Heading>{duplicateFileVariants.title}</Heading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {duplicateFileVariants.list.map(
              ({ title, description, config, logLabel }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-lg shadow-sm border"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{description}</p>
                  <FileUpload
                    config={config}
                    onFilesChange={(files) =>
                      console.log(`${logLabel}:`, files)
                    }
                    onError={(error) => console.log("Error:", error)}
                  />
                </div>
              )
            )}
          </div>
        </section>

        <section className="mb-12" id="toast-notification-examples">
          <Heading>{toastNotificationDemo.sectionTitle}</Heading>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Heading level={3}> {toastNotificationDemo.card.title}</Heading>

            <p className="text-sm text-gray-600 mb-4">
              {toastNotificationDemo.card.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Heading level={4}>Error Toasts</Heading>
                <ul className="text-sm text-gray-600 space-y-1">
                  {toastNotificationDemo.card.errorToasts.map((item, idx) => (
                    <li key={`err-${idx}`}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <Heading level={4}>Success Toasts</Heading>
                <ul className="text-sm text-gray-600 space-y-1">
                  {toastNotificationDemo.card.successToasts.map((item, idx) => (
                    <li key={`success-${idx}`}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <FileUpload
                config={toastNotificationDemo.card.config}
                onFilesChange={(files) =>
                  console.log(`${toastNotificationDemo.card.logLabel}:`, files)
                }
                onError={(error) =>
                  console.log(
                    `${toastNotificationDemo.card.errorLabel}:`,
                    error
                  )
                }
              />
            </div>
          </div>
        </section>
        <section className="mb-12" id="live-config-editor">
          <Heading>Live Config Editor</Heading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="mb-4">
                <Heading level={3}>Configuration</Heading>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.keys(presetConfigs).map((presetName) => (
                    <button
                      key={presetName}
                      onClick={() =>
                        loadPreset(presetName as keyof typeof presetConfigs)
                      }
                      className="px-3 py-1 text-sm bg-black text-white rounded-md hover:bg-black/80 cursor-pointer transition-colors"
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
              <Heading level={3}>Live Preview</Heading>
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

        <section className="mb-12" id="props-table">
          <Heading>Configuration Options</Heading>
          <PropsTable data={configProps} />
        </section>
        <section id={usageExamples.id} className="mb-12">
          <Heading>{usageExamples.sectionTitle}</Heading>
          <div className="space-y-6">
            {usageExamples.items.map(({ title, code }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-lg shadow-sm border"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {title}
                </h3>
                <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                  {code}
                </pre>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;
