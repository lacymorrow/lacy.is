import { NextResponse } from 'next/server';

const SOCIAL_URL = 'https://twitter.com/lacybuilds';

export const GET = () => {
  // Return the URL directly as plain text
  return new NextResponse(SOCIAL_URL, {
    headers: { 'Content-Type': 'text/plain' },
  });
};