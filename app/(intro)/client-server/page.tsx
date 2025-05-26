import { prisma } from '@/db';
import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function ClientServerPage() {
  // this function will have a hidden api route created for it and will be callable from the client component
  async function mutateData() {
    'use server';

    const result = await prisma.contact.findMany();
    return result[0].first as string;
  }

  return (
    <div>
      ClientServerPage
      <ClientComponent content={ServerComponent()} mutateData={mutateData}>
        <ServerComponent />
      </ClientComponent>
    </div>
  )
}
