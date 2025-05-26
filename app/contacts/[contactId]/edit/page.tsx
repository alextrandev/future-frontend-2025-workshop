import { Suspense } from 'react';
import Skeleton from '@/components/ui/Skeleton';
import { getContact } from '@/data/services/getContact';
import ContactForm from './_components/ContactForm';

type PageProps = {
  params: Promise<{
    contactId: string;
  }>;
};

export default async function EditContactPage({ params }: PageProps) {
  const contactId = (await params).contactId;
  const contact = await getContact(contactId);

  return (
    <Suspense fallback={<Skeleton />}>
      <ContactForm contact={contact} />
    </Suspense>
  );
}
