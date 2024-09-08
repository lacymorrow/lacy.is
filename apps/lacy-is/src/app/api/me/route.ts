// Return the most up to date URL
import { NextResponse } from 'next/server';

// Define the social URL
const SOCIAL_URL = 'https://twitter.com/lacybuilds';

export const GET = async () => {
  // Return the social URL as JSON
  return NextResponse.json({ url: SOCIAL_URL });
};