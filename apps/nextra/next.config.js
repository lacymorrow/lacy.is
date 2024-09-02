import createJiti from "jiti";
// @ts-expect-error nextra is not typed
import nextra from 'nextra';
import { fileURLToPath } from "url";

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url))("./src/env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@/components", // We explicitly use `@/components/ui` for easy copy-pasting between shadcn projects
    // "@/components/ui",
    "@/lib",
    "@acme/api",
    "@acme/auth",
    "@acme/db",
    "@acme/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
	i18n: {
    locales: ['en-US', 'en-CA'],
    defaultLocale: 'en-US'
  }
};

// @see https://nextra.site/docs/docs-theme/theme-configuration
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true
})

export default withNextra(config);
