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
		<ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
			<div className="flex flex-col gap-lg max-w-lg">
				<h1 className="text-foreground text-xl font-semibold">Lacy <em>is.</em></h1>
				<p className="fade-in-up">
					<span className="text-lg font-serif italic mr-1">
						Building things.
					</span>
					Things are bad. We can fix this.
				</p>
				<a
					className="mt-4 text-xl text-blue-500 hover:underline"
					href={lacyUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					ℒ
				</a>
			</div>
		</main>
	);
};

export default HomePage;
