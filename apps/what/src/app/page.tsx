import { List } from "@/components/primitives/list";

const items = [
	{
		title: "Building",
		link: "/building",
	},
];

const HomePage = async () => {

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<article className="prose flex flex-col max-w-lg">
				<h1 className="text-foreground text-xl font-semibold">
					what lacy is
				</h1>
				<List items={items} />
			</article>
		</main>
	);
};

export default HomePage;
