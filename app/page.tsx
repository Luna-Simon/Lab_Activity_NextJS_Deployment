import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Task Management Dashboard
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Dashboard
          </h2>
          <p className="text-xl text-gray-600">
            A modern task management application built with Next.js 15+,
            featuring parallel routing, streaming, and intercepting routes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Dashboard Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Dashboard</h3>
            <p className="text-gray-600 mb-6">
              View parallel-loaded analytics and team information with streaming
              support.
            </p>
            <Link
              href="/dashboard"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Go to Dashboard
            </Link>
          </div>

          {/* Tasks Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">All Tasks</h3>
            <p className="text-gray-600 mb-6">
              Browse all tasks with soft navigation modals. Click to open in
              modal, hard refresh for full page.
            </p>
            <Link
              href="/tasks"
              className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              View Tasks
            </Link>
          </div>

          {/* Features Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Features</h3>
            <p className="text-gray-600 mb-6">
              Explore advanced Next.js 15 features like parallel slots and
              intercepting routes.
            </p>
            <Link
              href="/about"
              className="inline-block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🔄</div>
              <div>
                <h4 className="font-semibold text-gray-900">Parallel Routing</h4>
                <p className="text-gray-600 text-sm">
                  Dashboard with @team and @analytics slots loading independently
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4">🎯</div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Intercepting Routes
                </h4>
                <p className="text-gray-600 text-sm">
                  Modal overlays for tasks with soft navigation support
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4">⏳</div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Streaming & Suspense
                </h4>
                <p className="text-gray-600 text-sm">
                  3-second delay simulation with skeleton loading states
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4">⚠️</div>
              <div>
                <h4 className="font-semibold text-gray-900">Error Handling</h4>
                <p className="text-gray-600 text-sm">
                  Error boundaries with reset buttons and not-found pages
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4">🚀</div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Dynamic Params as Promises
                </h4>
                <p className="text-gray-600 text-sm">
                  React.use() for client components, await for server components
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4">🛡️</div>
              <div>
                <h4 className="font-semibold text-gray-900">Route Resilience</h4>
                <p className="text-gray-600 text-sm">
                  notFound() handling for invalid task IDs with fallback UI
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
