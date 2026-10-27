/**
 * The one origin lacy.is publishes about itself: canonical link, sitemap,
 * robots.txt, share tags. Hardcoded on purpose. It must never resolve to
 * localhost or to a per-deploy alias, so it reads nothing from the
 * environment. See LAC-5904.
 */
export const SITE_URL = "https://lacy.is";
