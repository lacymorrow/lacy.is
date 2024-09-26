export type ItemProps = {
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

export const List = ({ items }: { items: ItemProps[] }) => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {items.map((item) => (
                <Item key={item.title} {...item} />
            ))}
        </ul>
    );
};