// Mock data for tasks and analytics
export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  assignee: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface AnalyticsData {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  inProgressTasks: number;
  teamSize: number;
  completionRate: number;
}

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Implement Dashboard UI',
    description: 'Create the main dashboard layout with parallel slots',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-05-30',
    assignee: 'Alice Johnson',
  },
  {
    id: '2',
    title: 'Setup Database Schema',
    description: 'Design and implement the database schema for tasks',
    status: 'completed',
    priority: 'high',
    dueDate: '2026-05-25',
    assignee: 'Bob Smith',
  },
  {
    id: '3',
    title: 'Write API Documentation',
    description: 'Document all API endpoints and parameters',
    status: 'pending',
    priority: 'medium',
    dueDate: '2026-06-05',
    assignee: 'Charlie Brown',
  },
  {
    id: '4',
    title: 'Testing & QA',
    description: 'Perform comprehensive testing of the dashboard',
    status: 'pending',
    priority: 'medium',
    dueDate: '2026-06-10',
    assignee: 'Diana Prince',
  },
  {
    id: '5',
    title: 'Performance Optimization',
    description: 'Optimize dashboard rendering and API calls',
    status: 'pending',
    priority: 'low',
    dueDate: '2026-06-15',
    assignee: 'Eve Wilson',
  },
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    role: 'Frontend Lead',
    avatar: '👩‍💻',
  },
  {
    id: '2',
    name: 'Bob Smith',
    role: 'Backend Engineer',
    avatar: '👨‍💻',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    role: 'Full Stack Developer',
    avatar: '👨‍🚀',
  },
  {
    id: '4',
    name: 'Diana Prince',
    role: 'QA Engineer',
    avatar: '👩‍🔬',
  },
  {
    id: '5',
    name: 'Eve Wilson',
    role: 'DevOps Engineer',
    avatar: '👩‍🔧',
  },
];

export const mockAnalytics: AnalyticsData = {
  totalTasks: 5,
  completedTasks: 1,
  pendingTasks: 3,
  inProgressTasks: 1,
  teamSize: 5,
  completionRate: 20,
};

// Simulate server-side data fetching with delays
export async function fetchTasks(): Promise<Task[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockTasks;
}

export async function fetchTaskById(id: string): Promise<Task | null> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockTasks.find((task) => task.id === id) || null;
}

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockTeamMembers;
}

export async function fetchAnalytics(): Promise<AnalyticsData> {
  // Simulate 3-second delay as per requirements
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return mockAnalytics;
}
