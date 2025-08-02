import React from "react";
import { X } from "lucide-react";
import * as Toast from "@radix-ui/react-toast";
import { cn } from "./helper";

interface ToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  message: string;
  type?: "error" | "warning" | "success";
}

const ToastComponent: React.FC<ToastProps> = ({
  open,
  onOpenChange,
  title,
  message,
  type = "error",
}) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className={cn(
          "bg-white rounded-md shadow-lg border p-4 pr-6 relative max-w-sm",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[swipe=end]:animate-out data-[state=closed]:fade-out-80",
          "data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full",
          "data-[state=open]:sm:slide-in-from-bottom-full",
          type === "error" && "border-red-200 bg-red-50",
          type === "warning" && "border-yellow-200 bg-yellow-50",
          type === "success" && "border-green-200 bg-green-50"
        )}
        open={open}
        onOpenChange={onOpenChange}
      >
        <div className="flex gap-3">
          <div className="flex-1 min-w-0">
            <Toast.Title className="text-sm font-medium text-gray-900">
              {title}
            </Toast.Title>
            <Toast.Description className="text-sm text-gray-600 mt-1 break-words overflow-hidden">
              {message}
            </Toast.Description>
          </div>
          <Toast.Close className="rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none flex-shrink-0">
            <X className="h-4 w-4" />
          </Toast.Close>
        </div>
      </Toast.Root>
      <Toast.Viewport className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
    </Toast.Provider>
  );
};

export default ToastComponent;
