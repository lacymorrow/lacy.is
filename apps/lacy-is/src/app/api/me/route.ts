import { NextResponse } from 'next/server';

const ME_URL = 'https://twitter.com/lacybuilds';

export const GET = () => {
  // Return the URL directly as plain text
  return new NextResponse(ME_URL, {
    headers: { 'Content-Type': 'text/plain' },
  });
};