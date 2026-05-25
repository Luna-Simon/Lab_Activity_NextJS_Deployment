'use client';

import { Suspense } from 'react';
import { fetchTasks } from '@/app/lib/mockData';

async function TasksList() {
  const tasks = await fetchTasks();

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Active Tasks</h2>
      <div className="space-y-4">
        {tasks.slice(0, 3).map((task) => (
          <div
            key={task.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{task.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="text-gray-600">Loading tasks...</div>}>
      <TasksList />
    </Suspense>
  );
}
