import { NextResponse } from 'next/server';

const SOCIAL_URL = 'https://twitter.com/lacybuilds';

export async function GET() {
  return NextResponse.json({ url: SOCIAL_URL });
}