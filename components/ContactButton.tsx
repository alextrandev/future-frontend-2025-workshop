'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { cn } from '@/utils/cn';
import type { Contact } from '@prisma/client';

export default function ContactButton({ contact }: { contact: Contact }) {
  const pathName = usePathname();
  const isActive = pathName.includes(`/contacts/${contact.id}`);
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Link
      className={cn(
        isPending && 'pending',
        isActive ? 'bg-primary text-white' : 'hover:bg-gray',
        'flex w-full items-center justify-between gap-4 overflow-hidden whitespace-pre rounded-lg p-2 hover:no-underline',
      )}
      onClick={() => {
        startTransition(() => {
          router.push(`/contacts/${contact.id}${q ? `?q=${q}` : ''}`);
        })
      }}
      href={`/contacts/${contact.id}${q ? `?q=${q}` : ''}`}
    >
      {contact.first || contact.last ? (
        <>
          {contact.first} {contact.last}
        </>
      ) : (
        <i className={cn(isActive ? 'text-white' : 'text-gray-500')}>No Name</i>
      )}
      {contact.favorite ? (
        <span className={cn('float-right', isActive ? 'text-white' : 'text-yellow-500')}>★</span>
      ) : null}
    </Link>
  );
}
