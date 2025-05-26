import { prisma } from "@/db";

export default async function getContact(contactId: string) {
  return prisma.contact.findUnique({
    where: { id: contactId },
  })
}