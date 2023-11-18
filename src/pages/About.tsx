import { Center } from '@/components/lib/Center';
import { Flow } from '@/components/lib/Flow';
import { FancyText } from '@/components/lib/FancyText';
import { Quote } from '@/components/lib/Quote';
import { DemoTable } from '@/components/widgets/demo-table/DemoTable';

export const About = () => {
  return (
    <Center>
      <Flow direction="column">
        <FancyText style={{ fontSize: 32 }}>О цистерцианских цифрах</FancyText>
        <Quote cite="https://ru.wikipedia.org/wiki/Цистерцианские_цифры">
          <p>
            Система счисления, которой пользовались европейские
            монахи-цистерцианцы в средние века и которая позволяет записывать
            числа от 1 до 9999 одним символом-глифом.
          </p>
        </Quote>
        <Flow justify="center">
          <DemoTable />
        </Flow>
      </Flow>
    </Center>
  );
};
