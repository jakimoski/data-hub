import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/ProductsCarousel";
import Hero from "../../components/Hero/Hero";
import Partners from "../../components/Partners/Partners";

import { products } from "../../data/data";
import SectionBlock from "../../components/Section/SectionBlock";

export default function Home() {
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/6654aba1ad19ca34f8700283"
      );
      const data = await response.json();

      console.log(data.record.products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />

      <div className="bg-grey">
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
      </div>

      <Banner
        title="Новиот Lenovo лаптоп ги руши сите рекорди"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo cupiditate in repellat. Quod, obcaecati?"
        backgroundImage="/backgrounds/62.png"
      />

      <div className="bg-grey">
        <SectionBlock>
          <Carousel title="Последно посетени производи" products={products} />
        </SectionBlock>
        <SectionBlock>
          <Carousel title="Најдобри зделки на денот" products={products} />
        </SectionBlock>
      </div>

      <Banner
        title="Паметни телефони за паметни луѓе"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo cupiditate in repellat. Quod, obcaecati?"
        backgroundImage="/backgrounds/63.png"
      />
      <Partners />
    </>
  );
}
