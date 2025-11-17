import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

// Import the same mock store (in production, this would be Prisma)
// Note: In a real app, this would be imported from a shared module
const getMockLogos = () => {
  // This is a workaround for development - in production use database
  if (!(global as any).mockLogos) {
    (global as any).mockLogos = [];
  }
  return (global as any).mockLogos;
};

// GET /api/logos/[id] - Get specific logo
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const mockLogos = getMockLogos();
    const logo = mockLogos.find(
      (l: any) => l.id === params.id && l.userId === userId
    );

    if (!logo) {
      return NextResponse.json({ error: 'Logo non trouvé' }, { status: 404 });
    }

    return NextResponse.json({ logo }, { status: 200 });
  } catch (error) {
    console.error('Error fetching logo:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du logo' },
      { status: 500 }
    );
  }
}

// PUT /api/logos/[id] - Update logo
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const data = await req.json();
    const mockLogos = getMockLogos();

    const logoIndex = mockLogos.findIndex(
      (l: any) => l.id === params.id && l.userId === userId
    );

    if (logoIndex === -1) {
      return NextResponse.json({ error: 'Logo non trouvé' }, { status: 404 });
    }

    // Update logo
    mockLogos[logoIndex] = {
      ...mockLogos[logoIndex],
      ...data,
      id: params.id, // Ensure ID doesn't change
      userId, // Ensure userId doesn't change
      updatedAt: new Date().toISOString(),
    };

    // Production code (uncomment when database is ready):
    // const logo = await prisma.logo.update({
    //   where: { id: params.id },
    //   data: {
    //     companyName: data.companyName,
    //     style: data.style,
    //     colors: JSON.stringify(data.colors),
    //     shape: data.shape,
    //     size: data.size,
    //     metadata: JSON.stringify(data.metadata),
    //   },
    // });

    return NextResponse.json(
      { logo: mockLogos[logoIndex], message: 'Logo mis à jour' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating logo:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du logo' },
      { status: 500 }
    );
  }
}

// DELETE /api/logos/[id] - Delete specific logo
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const mockLogos = getMockLogos();

    const logoIndex = mockLogos.findIndex(
      (l: any) => l.id === params.id && l.userId === userId
    );

    if (logoIndex === -1) {
      return NextResponse.json({ error: 'Logo non trouvé' }, { status: 404 });
    }

    mockLogos.splice(logoIndex, 1);

    // Production code (uncomment when database is ready):
    // await prisma.logo.delete({
    //   where: { id: params.id },
    // });

    return NextResponse.json(
      { message: 'Logo supprimé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting logo:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du logo' },
      { status: 500 }
    );
  }
}
