import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <Link className="btn btn--cuisine" to={"/data-hub"}>
            Go to Homepage
          </Link>
        </Section>
      </main>
      <Footer />
    </>
  );
}
