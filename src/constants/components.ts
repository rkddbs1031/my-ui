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
];
