
import * as React from "react";
import { type ToastActionElement, type ToastProps } from "@/components/ui/toast";
import {
  useToast as useHookToast,
  toast as hookToast
} from "@/hooks/use-toast";

// Define a proper interface for our toast parameters
interface ToastParameters {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive";
  action?: ToastActionElement;
  [key: string]: any;
}

// Export the hook directly
export const useToast = useHookToast;

// Export a typed wrapper around the toast function
export const toast = ({
  title,
  description,
  variant,
  action,
  ...props
}: ToastParameters) => {
  return hookToast({
    title,
    description, 
    variant,
    action,
    ...props
  } as ToastProps);
};

// Re-export types for consumers
export type { ToastProps, ToastActionElement };
