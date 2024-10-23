import { getBaseUrl } from "@/lib";

type ItemProps = {
  title: string;
  link: string;
};

const Item = ({ title, link }: ItemProps) => {
  return (
    <li className="flex flex-col justify-center">
      <a href={link}>{title}</a>
    </li>
  );
};

const List = ({ items }: { items: ItemProps[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <article className="prose flex max-w-lg flex-col">
        <h1 className="text-xl font-semibold text-foreground">
          Lacy <em>is.</em>
        </h1>
        <p className="fade-in-up">
          <span className="mr-1 font-serif text-lg italic">Building</span>
        </p>
        {/* <ul>

          <li>
            <a href="https://fly5.live">fly5.live</a>: aerial cinematography in
            Charlotte, NC
          </li>
        </ul> */}

        <a
          className="mt-4 text-xl hover:underline"
          href={lacyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          ℒ
        </a>
      </article>
    </main>
  );
};

export default HomePage;
