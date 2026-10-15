import { getBaseUrl } from "@/lib";

import { LacyLogo } from "~/app/(home)/_components/lacy-logo";
import AnimatedNoise from "~/app/(home)/_components/noise";

type ItemProps = {
  title: string;
  description?: string;
  link: string;
};

const Item = ({ title, description, link }: ItemProps) => {
  return (
    <li className="flex flex-col justify-center">
      <a
        href={link}
        className="flex items-center justify-between gap-2"
        target="_blank"
      >
        {title}
        {description && (
          <span className="text-sm text-muted-foreground">{description}</span>
        )}
      </a>
    </li>
  );
};

const List = ({ items }: { items: ItemProps[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-2">
      {items.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </ul>
  );
};

// Define the type for the API response
type lacyUrlResponse = {
  url: string;
};

const HomePage = async () => {
  // Fetch the social URL
  const baseUrl = getBaseUrl();
  console.log(`Fetching from: ${baseUrl}/api/me`);
  const lacyUrl = await fetch(`${baseUrl}/api/me`)
    .then((res) => res.text())
    .catch((error) => {
      console.error("Error fetching social URL:", error);
      return "https://lacymorrow.com"; // Fallback URL
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "lacy.is",
    url: "https://lacy.is",
    author: {
      "@type": "Person",
      name: "Lacy Morrow",
      url: "https://lacymorrow.com",
      sameAs: ["https://twitter.com/lacybuilds"],
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatedNoise opacity={0.1} />
      <LacyLogo />
      <article className="flex max-w-lg flex-col">
        <List
          items={[
            {
              title: "juno",
              description: "a Mac you can talk to",
              link: "https://junebug.ai",
            },
            {
              title: "shipkit",
              description: "launch a Next.js app this week",
              link: "https://shipkit.io",
            },
            {
              title: "lacy shell",
              description: "plain English in your terminal",
              link: "https://lacy.sh",
            },
            {
              title: "crossover",
              description: "a crosshair for any game",
              link: "https://crossover.lacy.sh",
            },
            {
              title: "fly5",
              description: "aerial cinematography",
              link: "https://fly5.live",
            },
            {
              title: "build and serve",
              description: "websites and AI systems, built for you",
              link: "https://buildandserve.com",
            },
          ]}
        />
      </article>
      <p className="mt-8 text-sm text-muted-foreground">
        by{" "}
        <a
          href="https://lacymorrow.com"
          className="underline underline-offset-4"
        >
          Lacy Morrow
        </a>
      </p>
    </main>
  );
};

export default HomePage;
