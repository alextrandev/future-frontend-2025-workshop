'use client';

import { useOptimistic } from 'react';
import { updateFavorite } from '@/data/actions/updateFavourite';
import { cn } from '@/utils/cn';
import { slow } from '@/utils/slow';
import type { Contact } from '@prisma/client';

export default function Favorite({ contact }: { contact: Contact }) {
  const [optimisticFavorite, changeFavorite] = useOptimistic(contact.favorite);

  return (
    <form action={async () => {
      const newFavorite = !optimisticFavorite;
      changeFavorite(newFavorite);
      await slow();
      await updateFavorite(contact.id, newFavorite);
    }}>
      <button
        type="submit"
        className={cn(
          optimisticFavorite ? 'text-yellow-500' : 'text-gray-dark',
          'flex text-2xl font-normal shadow-none hover:text-yellow-400 hover:shadow-none'
        )}
        aria-label={
          optimisticFavorite ? 'Remove from favorites' : 'Add to favorites'
        }
      >
        {optimisticFavorite ? '★' : '☆'}
      </button>
    </form>
  );
}
