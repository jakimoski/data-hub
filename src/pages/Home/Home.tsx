import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/ProductsCarousel";
import Hero from "../../components/Hero/Hero";
// import Partners from "../../components/Partners/Partners";
import { products } from "../../data/data";
import SectionBlock from "../../components/Section/SectionBlock";
import ShopsCarousel from "../../components/Carousel/ShopsCarousel";
import { partners } from "../../data/data";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="bg-grey">
        <SectionBlock>
          <Carousel
            title="Популарни производи"
            // slidesToShow={6}
            products={products}
          />
        </SectionBlock>
        <SectionBlock>
          <Carousel title="Распродажба" products={products} />
        </SectionBlock>
      </section>

      <Banner
        title="Новиот Lenovo лаптоп ги руши сите рекорди"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo cupiditate in repellat. Quod, obcaecati?"
        backgroundImage="/backgrounds/62.png"
      />

      <section className="bg-grey">
        <SectionBlock>
          <Carousel title="Последно посетени производи" products={products} />
        </SectionBlock>
        <SectionBlock>
          <Carousel title="Најдобри зделки на денот" products={products} />
        </SectionBlock>
      </section>

      <Banner
        title="Паметни телефони за паметни луѓе"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo cupiditate in repellat. Quod, obcaecati?"
        backgroundImage="/backgrounds/63.png"
      />
      <section className="bg-grey">
        <ShopsCarousel partners={partners} title="Партнери" />
      </section>
    </main>
  );
}
