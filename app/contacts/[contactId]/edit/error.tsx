'use client';

import ErrorMessage from '@/components/ui/ErrorMessage';

type Props = {
  reset: () => void;
  error: Error;
};

export default function Error({ reset }: Props) {
  return <ErrorMessage onReset={reset}>⚠️ Something went wrong</ErrorMessage>;
}