import { Link } from '@/components/shared/Link';
import { Center } from '@/components/lib/Center';
import { Space } from '@/components/lib/Space';
import { FancyText } from '@/components/lib/FancyText';

export const NotFound = () => {
  return (
    <Center>
      <Space direction="vertical" align="start">
        <FancyText style={{ fontSize: 32 }}>Страница не найдена</FancyText>
        <Link to="/">На главную</Link>
      </Space>
    </Center>
  );
};
