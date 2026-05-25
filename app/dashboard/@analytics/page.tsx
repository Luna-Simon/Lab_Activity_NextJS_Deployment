'use client';

import { Suspense } from 'react';
import { fetchAnalytics } from '@/app/lib/mockData';

async function AnalyticsContent() {
  const data = await fetchAnalytics();

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Total Tasks</p>
          <p className="text-2xl font-bold text-blue-900">{data.totalTasks}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Completed</p>
          <p className="text-2xl font-bold text-green-900">
            {data.completedTasks}
          </p>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">In Progress</p>
          <p className="text-2xl font-bold text-yellow-900">
            {data.inProgressTasks}
          </p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-purple-900">
            {data.pendingTasks}
          </p>
        </div>
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">Completion Rate</p>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-600 h-2 rounded-full transition-all"
            style={{ width: `${data.completionRate}%` }}
          />
        </div>
        <p className="mt-2 text-lg font-bold text-gray-900">
          {data.completionRate}%
        </p>
      </div>
    </div>
  );
}

export default function AnalyticsSlot() {
  return (
    <Suspense
      fallback={
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics</h3>
          <div className="space-y-3">
            <div className="h-12 bg-gray-200 rounded animate-pulse" />
            <div className="h-12 bg-gray-200 rounded animate-pulse" />
            <div className="h-12 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      }
    >
      <AnalyticsContent />
    </Suspense>
  );
}
