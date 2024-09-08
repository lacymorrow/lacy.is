import { getBaseUrl } from "@/lib/utils/getBaseUrl";

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
type SocialUrlResponse = {
	url: string;
};

const Home = async ({ params }: { params: { code: string } }) => {
	// Fetch the social URL from the API using an absolute URL
	const response = await fetch(`${getBaseUrl()}/api/me`);
	const { url: socialUrl }: SocialUrlResponse = await response.json();

	return (
		<main className="flex justify-center p-xl">
			<div className="flex flex-col gap-lg max-w-lg">
					<h1 className="text-foreground text-xl font-semibold">Lacy <em>is.</em></h1>
					<p className="fade-in-up">
						<span className="text-lg font-serif italic mr-1">
							Building things.
						</span>
						Things are bad. We can fix this.
					</p>
					{/* Display the social URL */}
					<a href={socialUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
						ℒ𝒶𝒸𝓎
					</a>
			</div>
		</main>
	);
};

export default Home;
