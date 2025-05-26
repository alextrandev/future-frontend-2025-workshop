'use client';

import Button from '@/components/ui/Button';

type Props = {
  children?: React.ReactNode;
  content?: React.ReactNode;
};

export default function ClientComponent(props: Props) {
  return (
    <div className="rounded border-2 border-blue-500 p-4">
      ClientComponent
      <div>{props.content}</div>
      {props.children}
      <Button onClick={() => { alert('Button clicked!') }}>Click Me</Button>
    </div>
  )
}
