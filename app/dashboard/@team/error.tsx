'use client';

import { ReactNode } from 'react';

interface TeamErrorProps {
  error: Error;
  reset: () => void;
}

export default function TeamError({ error, reset }: TeamErrorProps) {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
      <h3 className="text-lg font-bold text-red-900 mb-2">
        Team Loading Error
      </h3>
      <p className="text-red-800 text-sm mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
      >
        Try Again
      </button>
    </div>
  );
}
