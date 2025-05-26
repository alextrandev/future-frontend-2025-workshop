'use client';

import deleteContact from '@/data/actions/deleteContact';
import Button from '../../../../../components/ui/Button';

type Props = {
  contactId: string;
};

export default function DeleteContactButton({ contactId }: Props) {
  return (
    <form action={async () => {
      const response = confirm('Are you sure you want to delete this contact?');
      if (response) {
        await deleteContact(contactId);
      }
    }}>
      <Button type="submit" theme="destroy">
        Delete
      </Button>
    </form>
  );
}
