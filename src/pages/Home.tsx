import { Link } from 'react-router-dom';

import { sortedComponents } from '@/constants/components';

import Layout from '@/layouts/MainLayout';
import Card from '@/components/Card';

export default function Home() {
  return (
    <>
      <Layout.Header
        title="My UI Library"
        subTitle="재사용 가능한 React 컴포넌트 라이브러리"
      />

      <Layout.Content className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedComponents.map((component) => (
            <Link key={component.path} to={component.path} className="">
              <Card>
                <div className="flex items-start justify-end mb-4">
                  <Card.Badge
                    status={component.status}
                    label={component.status}
                  />
                </div>
                <Card.Title title={component.name} />
                <Card.Description description={component.description} />
              </Card>
            </Link>
          ))}
        </div>
      </Layout.Content>
    </>
  );
}
