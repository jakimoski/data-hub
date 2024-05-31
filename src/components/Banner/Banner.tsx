import Search from "../Search/Search";

interface BannerProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function Banner({
  title,
  description,
  backgroundImage,
}: BannerProps) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner__content">
        <h2>{title}</h2>
        <p>{description}</p>

        <Search />
      </div>
    </div>
  );
}
