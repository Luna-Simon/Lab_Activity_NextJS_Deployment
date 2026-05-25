'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { fetchTasks } from '@/app/lib/mockData';

async function TasksList() {
  const tasks = await fetchTasks();

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Link
          key={task.id}
          href={`/tasks/${task.id}`}
          className="block border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900 hover:text-blue-600">
                {task.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{task.description}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ml-2 ${
                task.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : task.status === 'in-progress'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
              }`}
            >
              {task.status}
            </span>
          </div>
          <div className="mt-3 flex justify-between text-sm text-gray-500">
            <span>Assigned to: {task.assignee}</span>
            <span>Due: {task.dueDate}</span>
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className={`text-xs px-2 py-1 rounded font-medium ${
                task.priority === 'high'
                  ? 'bg-red-100 text-red-800'
                  : task.priority === 'medium'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-blue-100 text-blue-800'
              }`}
            >
              {task.priority} priority
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">All Tasks</h1>
          <p className="text-gray-600 mt-2">
            Click on any task to view details in a modal. Use hard refresh to
            see full-page view.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-gray-600">Loading tasks...</div>}>
          <TasksList />
        </Suspense>
      </main>
    </div>
  );
}
