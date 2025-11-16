import { NextResponse } from 'next/server';

export async function GET() {
  const status = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
    service: 'LogoMaster AI',
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  };

  return NextResponse.json(status, { status: 200 });
}
