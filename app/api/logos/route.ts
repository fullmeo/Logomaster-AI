import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

// Mock logo store (replace with Prisma in production)
const mockLogos: any[] = [];

// GET /api/logos - List all logos for authenticated user
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const userLogos = mockLogos.filter((logo) => logo.userId === userId);

    return NextResponse.json({ logos: userLogos }, { status: 200 });
  } catch (error) {
    console.error('Error fetching logos:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des logos' },
      { status: 500 }
    );
  }
}

// POST /api/logos - Create new logo
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const data = await req.json();

    // Validate required fields
    if (!data.companyName || !data.style) {
      return NextResponse.json(
        { error: 'Nom et style requis' },
        { status: 400 }
      );
    }

    const logo = {
      id: `logo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      companyName: data.companyName,
      style: data.style,
      colors: data.colors || [],
      shape: data.shape || 'circle',
      size: data.size || 'md',
      font: data.font || 'Inter',
      effects: data.effects || {},
      imageUrl: data.imageUrl || null,
      metadata: data.metadata || {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    mockLogos.push(logo);

    // Production code (uncomment when database is ready):
    // const logo = await prisma.logo.create({
    //   data: {
    //     userId,
    //     companyName: data.companyName,
    //     style: data.style,
    //     colors: JSON.stringify(data.colors || []),
    //     shape: data.shape || 'circle',
    //     size: data.size || 'md',
    //     metadata: JSON.stringify({
    //       font: data.font,
    //       effects: data.effects,
    //       ...data.metadata,
    //     }),
    //   },
    // });

    return NextResponse.json({ logo, message: 'Logo créé avec succès' }, { status: 201 });
  } catch (error) {
    console.error('Error creating logo:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du logo' },
      { status: 500 }
    );
  }
}

// DELETE /api/logos - Delete multiple logos
export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const { ids } = await req.json();

    if (!ids || !Array.isArray(ids)) {
      return NextResponse.json({ error: 'IDs invalides' }, { status: 400 });
    }

    // Remove logos that belong to the user
    const initialLength = mockLogos.length;
    for (let i = mockLogos.length - 1; i >= 0; i--) {
      if (ids.includes(mockLogos[i].id) && mockLogos[i].userId === userId) {
        mockLogos.splice(i, 1);
      }
    }

    const deletedCount = initialLength - mockLogos.length;

    // Production code (uncomment when database is ready):
    // const result = await prisma.logo.deleteMany({
    //   where: {
    //     id: { in: ids },
    //     userId,
    //   },
    // });

    return NextResponse.json(
      { message: `${deletedCount} logo(s) supprimé(s)`, count: deletedCount },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting logos:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression des logos' },
      { status: 500 }
    );
  }
}
