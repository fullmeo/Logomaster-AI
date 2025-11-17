import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

// Mock favorites store
const getMockFavorites = () => {
  if (!(global as any).mockFavorites) {
    (global as any).mockFavorites = [];
  }
  return (global as any).mockFavorites;
};

// GET /api/favorites - List all favorites for authenticated user
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const mockFavorites = getMockFavorites();
    const userFavorites = mockFavorites.filter((fav: any) => fav.userId === userId);

    return NextResponse.json({ favorites: userFavorites }, { status: 200 });
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des favoris' },
      { status: 500 }
    );
  }
}

// POST /api/favorites - Add logo to favorites
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const { logoId } = await req.json();

    if (!logoId) {
      return NextResponse.json({ error: 'Logo ID requis' }, { status: 400 });
    }

    const mockFavorites = getMockFavorites();

    // Check if already favorited
    const exists = mockFavorites.some(
      (fav: any) => fav.userId === userId && fav.logoId === logoId
    );

    if (exists) {
      return NextResponse.json(
        { error: 'Logo déjà dans les favoris' },
        { status: 400 }
      );
    }

    const favorite = {
      id: `fav_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      logoId,
      createdAt: new Date().toISOString(),
    };

    mockFavorites.push(favorite);

    // Production code (uncomment when database is ready):
    // const favorite = await prisma.favorite.create({
    //   data: { userId, logoId },
    // });

    return NextResponse.json(
      { favorite, message: 'Ajouté aux favoris' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding favorite:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'ajout aux favoris' },
      { status: 500 }
    );
  }
}

// DELETE /api/favorites - Remove from favorites
export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const { logoId } = await req.json();

    if (!logoId) {
      return NextResponse.json({ error: 'Logo ID requis' }, { status: 400 });
    }

    const mockFavorites = getMockFavorites();
    const initialLength = mockFavorites.length;

    // Remove favorite
    for (let i = mockFavorites.length - 1; i >= 0; i--) {
      if (
        mockFavorites[i].userId === userId &&
        mockFavorites[i].logoId === logoId
      ) {
        mockFavorites.splice(i, 1);
        break;
      }
    }

    if (mockFavorites.length === initialLength) {
      return NextResponse.json(
        { error: 'Favori non trouvé' },
        { status: 404 }
      );
    }

    // Production code (uncomment when database is ready):
    // await prisma.favorite.delete({
    //   where: {
    //     userId_logoId: {
    //       userId,
    //       logoId,
    //     },
    //   },
    // });

    return NextResponse.json(
      { message: 'Retiré des favoris' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error removing favorite:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du favori' },
      { status: 500 }
    );
  }
}
