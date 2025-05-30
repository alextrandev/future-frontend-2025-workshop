"use server"

import { prisma } from "@/db";

export async function updateFavorite(contactId: string, favorite: boolean) {
  await prisma.contact.update({
    data: { favorite: !favorite },
    where: { id: contactId },
  });
}