import { cn } from "@/lib/utils";

export function SkeletonLoader({ className = "" }) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200 dark:bg-gray-700 rounded",
        className 
      )}
    />
  );
}
