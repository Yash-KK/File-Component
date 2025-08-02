import React from "react";

export const configProps = [
  {
    property: "variant",
    type: `'button' | 'dropzone' | 'compact' | 'image-preview' | 'multi-file'`,
    default: "'dropzone'",
    description: "Upload component variant",
  },
  {
    property: "maxFileSize",
    type: "number",
    default: "10485760",
    description: "Maximum file size in bytes",
  },
  {
    property: "acceptedFileTypes",
    type: "string[]",
    default: "[]",
    description: "Accepted file extensions or MIME types",
  },
  {
    property: "multiple",
    type: "boolean",
    default: "false",
    description: "Allow multiple file selection",
  },
  {
    property: "showPreviews",
    type: "boolean",
    default: "true",
    description: "Show file previews after selection",
  },
  {
    property: "allowDuplicates",
    type: "boolean",
    default: "false",
    description: "Allow uploading duplicate files (same name, size, and type)",
  },
];

interface PropRow {
  property: string;
  type: string;
  default: string;
  description: string;
}

type PropsTableProps = {
  data: PropRow[];
};

export const PropsTable: React.FC<PropsTableProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Default
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 font-mono">{row.property}</td>
                <td className="px-6 py-4 text-gray-600 whitespace-pre-wrap">
                  {row.type}
                </td>
                <td className="px-6 py-4 text-gray-600">{row.default}</td>
                <td className="px-6 py-4 text-gray-600">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
