import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Edges - "Weights" */}
          <path d="M8 9 L24 16" stroke="#3b82f6" strokeWidth="2" />
          <path d="M8 23 L24 16" stroke="#3b82f6" strokeWidth="2" />

          {/* Input Nodes */}
          <circle cx="8" cy="9" r="3" fill="#3b82f6" />
          <circle cx="8" cy="23" r="3" fill="#3b82f6" />

          {/* Output Node - "Bias" (Emphasized) */}
          {/* Using a ring effect to hint at complexity/bias */}
          <circle cx="24" cy="16" r="5" fill="#3b82f6" />
          <circle cx="24" cy="16" r="2" fill="white" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
