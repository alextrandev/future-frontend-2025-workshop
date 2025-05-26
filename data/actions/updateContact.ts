"use server"

import { redirect } from "next/navigation";
import { prisma } from "@/db";
import { slow } from "@/utils/slow";
import { contactSchema } from "@/validations/contactSchema";
import type { ContactSchemaType } from '@/validations/contactSchema';

export async function updateContact(contactId: string, formData: FormData) {
  const data = Object.fromEntries(formData);
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return {
      data: data as ContactSchemaType,
      errors: result.error.formErrors,
    };
  }

  await slow();
  await prisma.contact.update({
    data: result.data,
    where: {
      id: contactId,
    },
  })

  redirect(`/contacts/${contactId}`);
}