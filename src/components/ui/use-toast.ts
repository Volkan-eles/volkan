
import * as React from "react";
import { type ToastActionElement, type ToastProps } from "@/components/ui/toast";
import {
  useToast as useHookToast,
  toast as hookToast
} from "@/hooks/use-toast";

// Create a type that matches what the toast function expects in hooks/use-toast.ts
type Toast = {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: "default" | "destructive";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

// Export the hook directly
export const useToast = useHookToast;

// Export a typed wrapper around the toast function
export const toast = (props: {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  action?: ToastActionElement;
  [key: string]: any;
}) => hookToast(props as Toast);
