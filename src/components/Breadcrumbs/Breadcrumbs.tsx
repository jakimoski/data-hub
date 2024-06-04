import { Link } from "react-router-dom";

type Breadcrumb = {
  label: string;
  link?: string;
};

type Props = {
  breadcrumbs?: Breadcrumb[];
};

export default function Breadcrumbs({ breadcrumbs }: Props) {
  return (
    <div className="breadcrumbs">
      <Link to="/">Почетна</Link> <span>/</span>
      {breadcrumbs &&
        breadcrumbs.map((item) => (
          <Link key={item.label} to={item.link as string}>
            {item.label}
          </Link>
        ))}
    </div>
  );
}
