import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const prompt = await prisma.prompt.findUnique({
      where: { id: params.id },
      include: {
        author: true,
        category: true,
        subcategory: true,
        aiTool: true
      }
    });

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt not found' }, { status: 404 });
    }

    return NextResponse.json(prompt);
  } catch (error) {
    console.error('Error fetching prompt:', error);
    return NextResponse.json({ error: 'Failed to fetch prompt' }, { status: 500 });
  }
}