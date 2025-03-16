
import { type ToastProps } from "@/components/ui/toast";
import {
  useToast as useHookToast,
  toast as hookToast
} from "@/hooks/use-toast";

// Create a typed interface for the toast function parameters
interface ToastParameters {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  action?: React.ReactNode;
  [key: string]: any; // For any other props
}

// Export the hook directly
export const useToast = useHookToast;

// Export a typed wrapper around the toast function
export const toast = (props: ToastParameters) => hookToast(props);
