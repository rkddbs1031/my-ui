import Card from '@/components/Card';
import Layout from '@/layouts/MainLayout';

const status = 'in-progress';

export default function InputDemo() {
  return (
    <Layout.Header
      title="Input Demo"
      subTitle="Input UI 컴포넌트입니다."
      className="flex justify-between items-start gap-3"
    >
      <Card.Badge status={status} label={status} className="flex-none" />
    </Layout.Header>
  );
}
