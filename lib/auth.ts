import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';

// Note: Prisma integration is configured but requires database setup
// For development without database, we use JWT-only sessions
// Uncomment the following lines after running: prisma generate && prisma db push
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import { prisma } from './prisma';

// Mock user store for development (replace with Prisma in production)
const mockUsers: any[] = [];

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma), // Uncomment when database is ready
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    newUser: '/dashboard',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email et mot de passe requis');
        }

        // Mock implementation - replace with Prisma in production
        const user = mockUsers.find((u) => u.email === credentials.email);

        if (!user || !user.password) {
          throw new Error('Email ou mot de passe incorrect');
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error('Email ou mot de passe incorrect');
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          tier: user.tier,
        };

        // Production code (uncomment when database is ready):
        // const user = await prisma.user.findUnique({
        //   where: { email: credentials.email },
        // });
        // if (!user || !user.password) {
        //   throw new Error('Email ou mot de passe incorrect');
        // }
        // const isPasswordValid = await compare(credentials.password, user.password);
        // if (!isPasswordValid) {
        //   throw new Error('Email ou mot de passe incorrect');
        // }
        // return {
        //   id: user.id,
        //   email: user.email,
        //   name: user.name,
        //   image: user.image,
        //   tier: user.tier,
        // };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.tier = (user as any).tier || 'free';
      }

      // Handle session updates
      if (trigger === 'update' && session) {
        token.name = session.name;
        token.tier = session.tier;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).tier = token.tier;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};
