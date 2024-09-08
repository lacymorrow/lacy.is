export const getBaseUrl = () => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') return ''; // Empty string for relative URLs in the browser
  // For server-side rendering, use the VERCEL_URL environment variable or fallback to localhost
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT ?? 3000}`;
};