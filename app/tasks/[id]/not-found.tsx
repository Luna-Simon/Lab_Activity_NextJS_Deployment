import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-4">
          <div className="text-6xl font-bold text-gray-900">404</div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Task Not Found</h1>
        <p className="text-gray-600 mb-6">
          The task you're looking for doesn't exist or has been deleted.
        </p>
        <Link
          href="/tasks"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Back to All Tasks
        </Link>
      </div>
    </div>
  );
}
