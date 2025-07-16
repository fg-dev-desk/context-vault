import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET() {
  try {
    const aiTools = await prisma.aITool.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json(aiTools);
  } catch (error) {
    console.error('Error fetching AI tools:', error);
    return NextResponse.json({ error: 'Failed to fetch AI tools' }, { status: 500 });
  }
}