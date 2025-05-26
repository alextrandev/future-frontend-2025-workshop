'use server'

import { prisma } from "@/db";

// server component can be async
export default async function ServerComponent() {
  // data from db can be access because this is a server component
  const data = await prisma.contact.findMany();

  return (
    <div className="rounded border-2 border-red-500 p-4">
      ServerComponent
      {data[0].first}
    </div>
  )
}
