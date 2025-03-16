
import * as React from "react";
import { type ToastActionElement, type ToastProps } from "@/components/ui/toast";
import {
  useToast as useHookToast,
  toast as hookToast
} from "@/hooks/use-toast";

// Get the exact type from the hook implementation
import { type Toast as HookToastType } from "@/hooks/use-toast"; 

// Export the hook directly
export const useToast = useHookToast;

// Export a typed wrapper around the toast function
export const toast = ({
  title,
  description,
  variant,
  action,
  ...props
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive";
  action?: ToastActionElement;
  [key: string]: any;
}) => {
  return hookToast({
    title,
    description, 
    variant,
    action,
    ...props
  });
};

// Re-export types for consumers
export type { ToastProps, ToastActionElement };
