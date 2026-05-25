'use client';

import { use, Suspense } from 'react';
import Link from 'next/link';
import { fetchTaskById } from '@/app/lib/mockData';
import { notFound } from 'next/navigation';

interface TaskDetailPageProps {
  params: Promise<{ id: string }>;
}

async function TaskDetailContent({ id }: { id: string }) {
  const task = await fetchTaskById(id);

  if (!task) {
    notFound();
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{task.title}</h1>
          <p className="text-gray-600 mt-2">Task ID: {task.id}</p>
        </div>
        <Link
          href="/tasks"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Tasks
        </Link>
      </div>

      <p className="text-lg text-gray-700 mb-8">{task.description}</p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <p
            className={`px-4 py-2 rounded-full text-sm font-semibold w-fit ${
              task.status === 'completed'
                ? 'bg-green-100 text-green-800'
                : task.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800'
            }`}
          >
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Priority
          </label>
          <p
            className={`px-4 py-2 rounded-full text-sm font-semibold w-fit ${
              task.priority === 'high'
                ? 'bg-red-100 text-red-800'
                : task.priority === 'medium'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-blue-100 text-blue-800'
            }`}
          >
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Assigned to
          </label>
          <p className="text-gray-900 font-medium">{task.assignee}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Due Date
          </label>
          <p className="text-gray-900 font-medium">{task.dueDate}</p>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Task Details
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Description:</strong> {task.description}
          </li>
          <li>
            <strong>Created:</strong> May 16, 2026
          </li>
          <li>
            <strong>Last Updated:</strong> Today
          </li>
        </ul>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors font-medium">
          Edit Task
        </button>
        <button className="px-6 py-2 bg-red-100 text-red-900 rounded-md hover:bg-red-200 transition-colors font-medium">
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default function TaskDetailPage({ params }: TaskDetailPageProps) {
  const { id } = use(params);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Task Details</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center text-gray-600">Loading task...</div>}>
          <TaskDetailContent id={id} />
        </Suspense>
      </main>
    </div>
  );
}
