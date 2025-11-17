import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';

// Note: Prisma integration is configured but requires database setup
// For development without database, we use an in-memory store
// Uncomment the following line after running: prisma generate && prisma db push
// import { prisma } from '@/lib/prisma';

// Mock user store for development (replace with Prisma in production)
const mockUsers: any[] = [];

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Le mot de passe doit contenir au moins 8 caractères' },
        { status: 400 }
      );
    }

    // Mock implementation - replace with Prisma in production
    const existingUser = mockUsers.find((u) => u.email === email.toLowerCase());

    if (existingUser) {
      return NextResponse.json(
        { error: 'Un compte avec cet email existe déjà' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user
    const user = {
      id: Date.now().toString(),
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      tier: 'free',
      createdAt: new Date(),
    };

    mockUsers.push(user);

    // Production code (uncomment when database is ready):
    // const existingUser = await prisma.user.findUnique({
    //   where: { email: email.toLowerCase() },
    // });
    // if (existingUser) {
    //   return NextResponse.json(
    //     { error: 'Un compte avec cet email existe déjà' },
    //     { status: 400 }
    //   );
    // }
    // const hashedPassword = await hash(password, 12);
    // const user = await prisma.user.create({
    //   data: {
    //     name,
    //     email: email.toLowerCase(),
    //     password: hashedPassword,
    //     tier: 'free',
    //   },
    //   select: {
    //     id: true,
    //     name: true,
    //     email: true,
    //     tier: true,
    //     createdAt: true,
    //   },
    // });

    return NextResponse.json(
      {
        user,
        message: 'Compte créé avec succès',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la création du compte' },
      { status: 500 }
    );
  }
}
