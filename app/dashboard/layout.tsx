'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
  team: ReactNode;
  analytics: ReactNode;
}

export default function DashboardLayout({
  children,
  team,
  analytics,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Task Management Dashboard
          </h1>
          <nav className="mt-4 flex gap-4">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/tasks"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Tasks
            </Link>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2">{children}</div>

          {/* Sidebar with parallel slots */}
          <div className="space-y-8">
            {/* Team Slot */}
            <div className="bg-white rounded-lg shadow p-6">{team}</div>

            {/* Analytics Slot */}
            <div className="bg-white rounded-lg shadow p-6">{analytics}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
