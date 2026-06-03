import React from 'react';

type VerificationCheckProps = {
  className?: string;
  type?: 'blue' | 'gold';
};

export default function VerificationCheck({ className = 'w-5 h-5', type = 'blue' }: VerificationCheckProps) {
  // X.com (Twitter) official SVG paths
  const rosettePath = "M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.792-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.74 2.746 1.84 3.42-.057.26-.09.524-.09.79 0 2.21 1.71 3.998 3.918 3.998.47 0 .92-.084 1.336-.25C8.982 21.585 10.29 22.5 12 22.5s2.818-.915 3.337-2.25c.416.165.866.25 1.336.25 2.21 0 3.918-1.792 3.918-4 0-.266-.032-.53-.09-.79 1.1-.674 1.84-1.96 1.84-3.42z";
  const checkPath = "M9.64 16.29l-3.21-3.21 1.42-1.42 1.79 1.8 4.36-5.46 1.56 1.25-5.92 7.04z";

  // Define colors based on type
  const isGold = type === 'gold';
  const fillColor = isGold ? '#ce9e2a' : '#1d9bf0'; // Official X Blue and Gold

  return (
    <svg 
      viewBox="0 0 24 24" 
      aria-label="Verified account" 
      role="img" 
      className={`inline-block flex-shrink-0 ${className}`}
    >
      <g>
        <path d={rosettePath} fill={fillColor} />
        <path d={checkPath} fill="#ffffff" />
      </g>
    </svg>
  );
}
