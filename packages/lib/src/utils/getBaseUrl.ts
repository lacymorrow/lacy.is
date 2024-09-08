export const getBaseUrl = () => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') return ''; // Empty string for relative URLs in the browser
  // For server-side rendering, use the VERCEL_URL environment variable or fallback to localhost
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  const port = process.env.PORT ?? 3000;
  console.log(`Using localhost:${port} as base URL`);
  return `http://localhost:${port}`;
};