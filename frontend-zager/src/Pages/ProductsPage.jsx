import { Helmet } from "@dr.pogodin/react-helmet";
import OurPlatforms from "../Components/Homepage_Sections/OurPlatforms_Homepage_Section";
import { zagerProductsOverview } from "../data/products";

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Products | Zager Digital Services</title>
        <meta
          name="description"
          content={zagerProductsOverview.paragraphs[0]}
        />
        <link rel="canonical" href="https://www.zager.in/products" />
      </Helmet>

      <div className="bg-white">
        <section className="max-w-4xl mx-auto px-5 pt-14 pb-4 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ffbe00] bg-[#051224] px-4 py-1.5 rounded-full mb-4">
            {zagerProductsOverview.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#051224] tracking-tight mb-5">
            {zagerProductsOverview.heading}
          </h1>
          <div className="space-y-3 text-base md:text-lg text-gray-600 leading-relaxed">
            {zagerProductsOverview.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        <OurPlatforms />
      </div>
    </>
  );
};

export default ProductsPage;
