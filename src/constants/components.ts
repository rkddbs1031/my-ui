export type Status = 'completed' | 'in-progress' | 'planned';

export interface ComponentInfo {
  name: string;
  path: string;
  description: string;
  status: Status;
}

export const components: ComponentInfo[] = [
  {
    name: 'Toast',
    path: '/toast',
    description: '알림 메시지 컴포넌트',
    status: 'completed',
  },
  {
    name: 'Modal',
    path: '/modal',
    description: 'Modal 컴포넌트',
    status: 'planned',
  },
  {
    name: 'Input',
    path: '/input',
    description: 'Input 컴포넌트',
    status: 'in-progress',
  },
];

const statusPriority: Record<Status, number> = {
  completed: 1,
  'in-progress': 2,
  planned: 3,
};

export const sortedComponents = [...components].sort((a, b) => {
  return statusPriority[a.status] - statusPriority[b.status];
});
