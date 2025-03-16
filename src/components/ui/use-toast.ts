
import * as React from "react";
import { type ToastActionElement, type ToastProps } from "@/components/ui/toast";
import {
  useToast as useHookToast,
  toast as hookToast
} from "@/hooks/use-toast";

// Export the hook directly
export const useToast = useHookToast;

// Export a typed wrapper around the toast function
export const toast = (props: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive";
  action?: ToastActionElement;
  [key: string]: any;
}) => hookToast(props);
