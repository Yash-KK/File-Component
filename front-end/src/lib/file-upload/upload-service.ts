import type { FileWithPreview } from "@/components/file-upload/file-upload.types";

export class UploadService {
  static async uploadFile(
    file: FileWithPreview,
    onProgress?: (progress: number) => void
  ): Promise<{ success: boolean; url?: string; error?: string }> {
    return new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;

        onProgress?.(progress);

        if (progress >= 100) {
          clearInterval(interval);

          if (Math.random() > 0.9) {
            resolve({
              success: false,
              error: "Upload failed. Please try again.",
            });
          } else {
            resolve({
              success: true,
              url: `https://example.com/files/${file.name}`,
            });
          }
        }
      }, 100);
    });
  }

  static async uploadFiles(
    files: FileWithPreview[],
    onProgress?: (fileId: string, progress: number) => void
  ): Promise<Array<{ success: boolean; url?: string; error?: string }>> {
    const uploadPromises = files.map((file) =>
      this.uploadFile(file, (progress) => {
        if (onProgress) {
          onProgress(file.id, progress);
        }
      })
    );

    return Promise.all(uploadPromises);
  }
}
