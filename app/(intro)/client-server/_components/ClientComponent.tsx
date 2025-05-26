'use client';

import Button from '@/components/ui/Button';

type Props = {
  children?: React.ReactNode;
  content?: React.ReactNode;
  mutateData: () => Promise<string>;
};

export default function ClientComponent(props: Props) {
  return (
    <div className="rounded border-2 border-blue-500 p-4">
      ClientComponent
      <div>{props.content}</div>
      {props.children}
      <Button onClick={async () => {
        const result = await props.mutateData();
        return alert(result)
      }}>Click Me</Button>
    </div>
  )
}
