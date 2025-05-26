import { notFound } from 'next/navigation';
import { prisma } from '@/db';

// add some fake loading time
export async function getContact(contactId: string) {
  // Simulate a delay to mimic real-world data fetching
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const contact = await prisma.contact.findUnique({
    where: { id: contactId },
  });

  if (!contact) {
    notFound();
  }

  return contact;
}