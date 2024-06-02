import { ShopPartner } from "../../data/data";
import { Link } from "react-router-dom";

type PartnerCardProps = {
  partner: ShopPartner;
};

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="partner-card">
      <Link to={partner.url}>
        <img src={partner.image} alt={partner.title} />
      </Link>
      <h4 className="partner-card__title">{partner.title}</h4>
    </div>
  );
}
