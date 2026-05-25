'use client';

import { use, Suspense } from 'react';
import { fetchTaskById, mockTasks } from '@/app/lib/mockData';

interface TaskModalPageProps {
  params: Promise<{ id: string }>;
}

async function TaskModalContent({ id }: { id: string }) {
  const task = await fetchTaskById(id);

  if (!task) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Task not found</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{task.title}</h3>
      <p className="text-gray-700 mb-6">{task.description}</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <p
            className={`mt-1 px-3 py-1 rounded-full text-sm font-medium w-fit ${
              task.status === 'completed'
                ? 'bg-green-100 text-green-800'
                : task.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800'
            }`}
          >
            {task.status}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Priority
          </label>
          <p
            className={`mt-1 px-3 py-1 rounded-full text-sm font-medium w-fit ${
              task.priority === 'high'
                ? 'bg-red-100 text-red-800'
                : task.priority === 'medium'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-blue-100 text-blue-800'
            }`}
          >
            {task.priority}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Assigned to
          </label>
          <p className="mt-1 text-gray-900">{task.assignee}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <p className="mt-1 text-gray-900">{task.dueDate}</p>
        </div>
      </div>
    </div>
  );
}

export default function TaskModalPage({ params }: TaskModalPageProps) {
  const { id } = use(params);

  return (
    <Suspense
      fallback={<div className="text-center py-8">Loading task details...</div>}
    >
      <TaskModalContent id={id} />
    </Suspense>
  );
}
