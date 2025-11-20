"use client";

import { useState, useEffect } from "react";

interface LinkedInEmbedProps {
  url: string;
  className?: string;
}

const LinkedInEmbed = ({ url, className = "" }: LinkedInEmbedProps) => {
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");
  const [iframeWidth, setIframeWidth] = useState(504);
  const [iframeHeight, setIframeHeight] = useState(872);

  useEffect(() => {
    setIsClient(true);

    // Parse the iframe HTML to extract src, width, and height
    if (url) {
      // Check if url is an iframe HTML string (contains "<iframe")
      if (url.includes('<iframe')) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = url;
        const iframe = tempDiv.querySelector('iframe');

        if (iframe) {
          setIframeSrc(iframe.getAttribute('src') || "");
          setIframeWidth(parseInt(iframe.getAttribute('width') || "504", 10));
          setIframeHeight(parseInt(iframe.getAttribute('height') || "872", 10));
        }
      } else {
        // If it's a regular URL, use it directly
        setIframeSrc(url);
        // For linkedin embed urls, these are typical dimensions
        setIframeWidth(504);
        setIframeHeight(872);
      }
    }
  }, [url]);

  if (!isClient || hasError || !iframeSrc) {
    // Extract the LinkedIn post URL from the iframe src if possible
    const match = url.match(/src="([^"]*)"/);
    let linkedInUrl = '';
    if (match) {
      const iframeSrcFromMatch = match[1];
      // Try to convert embed URL to regular LinkedIn post URL
      if (iframeSrcFromMatch.includes('linkedin.com/embed')) {
        try {
          const urlObj = new URL(iframeSrcFromMatch);
          const pathParts = urlObj.pathname.split('/');
          if (pathParts[2] === 'feed' && pathParts[3] === 'update' && pathParts[4]) {
            // Construct a potential public URL, though LinkedIn's URL structure is complex
            linkedInUrl = iframeSrcFromMatch.replace('/embed/', '/');
          }
        } catch (e) {
          console.error('Error parsing LinkedIn URL:', e);
        }
      }
    }

    return (
      <div className={`w-full flex justify-center ${className}`}>
        <div className="w-full max-w-[504px] h-auto bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
          <p className="text-gray-600 text-center mb-3">
            {hasError
              ? "Unable to load LinkedIn post. Content may be restricted."
              : "Loading content..."}
          </p>
       
        </div>
      </div>
    );
  }

  return (
    <div className={`flex justify-center items-center w-full ${className}`}>
      <iframe
        src={iframeSrc}
        width={iframeWidth}
        height={iframeHeight}
        frameBorder="0"
        allowFullScreen
        title="Embedded LinkedIn post"
        onError={() => setHasError(true)}
        style={{ maxWidth: "100%", border: "none", display: "block" }}
      />
    </div>
  );
};

export default LinkedInEmbed;
