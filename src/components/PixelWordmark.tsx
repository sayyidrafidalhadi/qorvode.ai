interface PixelWordmarkProps {
  text: string;
  className?: string;
}

export default function PixelWordmark({ text, className = "" }: PixelWordmarkProps) {
  return (
    <div
      aria-hidden="true"
      className={`pixel-wordmark select-none text-center ${className}`}
      style={{ fontSize: "clamp(2.25rem, 13.5vw, 12rem)" }}
    >
      {text}
    </div>
  );
}
