"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "./providers/query-provider";
import { PostHogProvider } from "./providers/posthog-provider";

interface ClientProvidersProps {
  children: React.ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <QueryProvider>
      <TooltipProvider>
        <PostHogProvider>
          {children}
        </PostHogProvider>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryProvider>
  );
}
