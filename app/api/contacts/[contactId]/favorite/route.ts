import { NextResponse } from 'next/server';
import { prisma } from '@/db';

interface Params {
  params: {
    contactId: string;
  };
}

export async function PATCH(request: Request, { params }: Params) {
  const { contactId } = params;
  try {
    const { favorite } = await request.json();
    const updated = await prisma.contact.update({
      where: { id: contactId },
      data: { favorite },
    });
    return NextResponse.json({ favorite: updated.favorite });
  } catch (error) {
    return NextResponse.error();
  }
}
