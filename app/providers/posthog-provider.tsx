"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hardcoded for frictionless Production Deployments (Safe for public client-side tracking keys)
    const POSTHOG_KEY = "phc_kXdCXY6iZZoSZWuVTMo2rXGXNicGzmuNhrcPrQ2AkEzG";
    const POSTHOG_HOST = "https://eu.i.posthog.com";

    if (typeof window !== "undefined") {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        capture_pageview: true, 
        capture_pageleave: true,
        autocapture: true,
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
