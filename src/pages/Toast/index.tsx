import Card from '@/components/Card';
import Layout from '@/layouts/MainLayout';

export default function ToastDemo() {
  return (
    <Layout>
      <Layout.Header
        title="Toast Demo"
        subTitle="queue 형식의 Toast UI 컴포넌트입니다."
        className="flex justify-between items-start gap-3"
      >
        <Card.Badge
          status="in-progress"
          label="in-progress"
          className="flex-none"
        />
      </Layout.Header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 좌측: 컨트롤 패널 */}

        {/* 우측: Toast 미리보기 영역 */}
      </div>
    </Layout>
  );
}
