# Database Setup Guide

This guide explains how to set up the database for LogoMaster AI.

## Current Status

The application currently uses **in-memory mock stores** for development. This allows the app to run immediately without database configuration. All API routes are ready for database integration.

## Production Setup (Recommended)

### Option 1: SQLite (Simplest for Development)

1. **Install Prisma CLI** (if not already installed):
   ```bash
   npm install
   ```

2. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

3. **Initialize Database**:
   ```bash
   npx prisma db push
   ```

4. **Verify** `.env.local` contains:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

### Option 2: PostgreSQL (Recommended for Production)

1. **Create a PostgreSQL database** (local or cloud service like Supabase, Railway, Neon)

2. **Update** `.env.local`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/logomaster"
   ```

3. **Update** `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"  // Change from "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

4. **Generate and migrate**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## Switching from Mock to Database

Once Prisma is set up, uncomment the database code in these files:

### 1. `lib/auth.ts`
- Uncomment Prisma imports
- Uncomment Prisma adapter
- Replace mock user lookups with Prisma queries

### 2. `app/api/register/route.ts`
- Uncomment Prisma import
- Replace `mockUsers` with `prisma.user` operations

### 3. `app/api/logos/route.ts`
- Replace `mockLogos` array with `prisma.logo` operations
- Uncomment production code blocks

### 4. `app/api/logos/[id]/route.ts`
- Replace `getMockLogos()` with Prisma queries

### 5. `app/api/favorites/route.ts`
- Replace `getMockFavorites()` with `prisma.favorite` operations

## Database Schema

The Prisma schema includes:

- **User**: Authentication and tier management
- **Logo**: User-created logos with metadata
- **Favorite**: Logo bookmarks
- **Session/Account**: NextAuth.js session management
- **VerificationToken**: Email verification (future)

## Prisma Studio (Optional)

View and edit your database with Prisma's GUI:

```bash
npx prisma studio
```

This opens a web interface at `http://localhost:5555`

## Troubleshooting

### Prisma Generate Fails

If you encounter "403 Forbidden" errors:
```bash
PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npx prisma generate
```

### Database Locked (SQLite)

Stop all running processes accessing the database, then:
```bash
rm dev.db dev.db-journal
npx prisma db push
```

### Migration Issues

Reset the database (⚠️ This deletes all data):
```bash
npx prisma migrate reset
npx prisma db push
```

## Recommended Services

- **Supabase**: Free PostgreSQL with auth
- **Railway**: Easy deployment with PostgreSQL
- **Neon**: Serverless PostgreSQL
- **PlanetScale**: MySQL-compatible serverless database
