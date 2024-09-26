import { List } from "@/components/primitives/list";

const items = [
	{
		title: "AI",
		link: "https://lacy.is",
	},
];

export default async function BuildingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <article className="prose flex flex-col max-w-lg">
        <h1 className="text-foreground text-xl font-semibold">
          What Lacy is Building
        </h1>
        <List items={items} />
      </article>
    </main>
  );
}
