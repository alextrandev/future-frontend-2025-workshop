'use client';

import { useTransition } from 'react';
import SubmitButton from '@/components/ui/SubmitButton';
import deleteContact from '@/data/actions/deleteContact';

type Props = {
  contactId: string;
};

export default function DeleteContactButton({ contactId }: Props) {
  const [pending, startTransition] = useTransition();


  return (
    <form action={() => {
      const response = confirm('Are you sure you want to delete this contact?');
      if (response) {
        startTransition(async () => {
          await deleteContact(contactId);
        });
      }
    }}>
      <SubmitButton loading={pending} type="submit" theme="destroy">
        Delete
      </SubmitButton>
    </form>
  );
}
