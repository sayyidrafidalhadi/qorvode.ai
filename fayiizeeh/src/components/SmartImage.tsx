"use client";

import { useState } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  /** Wrapper element — carries the frame, aspect ratio and overflow. */
  className?: string;
  /** Applied to the <img> itself. */
  imgClassName?: string;
  /** Rendered in place of the image when the file is missing or fails to load. */
  fallback?: React.ReactNode;
  width?: number;
  height?: number;
  /** Load eagerly and with high priority (above-the-fold imagery). */
  priority?: boolean;
}

/**
 * Image that degrades to a designed placeholder instead of a broken-image
 * glyph — used for artwork that lives in fayiizeeh/public/ and may not have
 * been added to the repo yet.
 */
export default function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  fallback,
  width,
  height,
  priority = false,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onError={() => setFailed(true)}
        className={imgClassName}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}
