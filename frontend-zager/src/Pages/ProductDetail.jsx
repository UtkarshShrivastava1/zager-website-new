import { Link, useParams } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Layers,
  Stethoscope,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import Heading from "../Components/Heading";
import {
  getProductBySlug,
  products,
  zagerProductsOverview,
} from "../data/products";

const iconMap = {
  Store,
  UtensilsCrossed,
  GraduationCap,
  Stethoscope,
  Briefcase,
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 bg-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#051224] mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 max-w-md mb-8">
          The product you are looking for does not exist or may have moved.
          Explore our suite of digital products below.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {products.map((item) => (
            <Link
              key={item.slug}
              to={item.link}
              className="px-4 py-2 rounded-lg border border-[#ffbe00] text-[#051224] font-medium hover:bg-[#ffbe00] transition"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#051224] text-white font-semibold rounded-lg hover:bg-[#0b1f3b] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          View All Products
        </Link>
      </section>
    );
  }

  const IconComponent = iconMap[product.iconName] || Store;
  const otherProducts = products.filter((item) => item.slug !== product.slug);

  const [firstParagraph = "", ...remainingWelcomeParagraphs] =
    product.welcomeParagraphs;
  const firstPeriodIdx = firstParagraph.indexOf(".");
  const welcomeLead =
    firstPeriodIdx !== -1
      ? firstParagraph.slice(0, firstPeriodIdx + 1)
      : firstParagraph;
  const welcomeBody =
    firstPeriodIdx !== -1
      ? firstParagraph.slice(firstPeriodIdx + 1).trim()
      : "";

  return (
    <>
      <Helmet>
        <title>{`${product.title} — ${product.category} | Zager Digital Services`}</title>
        <meta name="description" content={product.description} />
        <meta
          property="og:title"
          content={`${product.title} — ${product.category} | Zager Digital Services`}
        />
        <meta property="og:description" content={product.description} />
        <link
          rel="canonical"
          href={`https://www.zager.in/products/${product.slug}`}
        />
      </Helmet>

      <div className="relative overflow-x-hidden bg-gray-50 min-h-screen">
        {/* Decorative Background Glows */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#ffbe00] rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-1/3 -left-24 w-72 h-72 bg-[#ffbe00] rounded-full opacity-10 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-[#ffbe00] rounded-full opacity-15 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 py-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-between flex-wrap gap-3 mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#051224]/80 hover:text-[#ffbe00] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#051224]/80 hover:text-[#ffbe00] transition"
            >
              <Layers className="w-4 h-4" />
              All Products
            </Link>
          </nav>

          {/* Product Heading & Welcome Section (Split A: Title Left / Copy Right) */}
          <motion.header
            key={product.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center mb-16"
          >
            {/* Left Column: Identity + CTAs */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffbe00]/20 text-[#051224] text-sm font-semibold">
                <IconComponent className="w-4 h-4 text-[#ffbe00]" />
                <span>{product.category}</span>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#ffbe00]">
                  {product.title}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#051224] tracking-tight leading-tight mt-1">
                  {product.welcomeHeading}
                </h1>
              </div>

              <p className="text-base md:text-lg font-semibold text-[#051224]/80 leading-snug">
                {welcomeLead}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to={`/Contact?product=${encodeURIComponent(product.title)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffbe00] text-[#051224] font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#what-we-do"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#051224] text-[#051224] font-semibold rounded-lg hover:bg-[#051224] hover:text-white transition"
                >
                  What We Do
                </a>
              </div>
            </div>

            {/* Right Column: Welcome Paragraphs Card */}
            <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-200/80 border-l-4 border-l-[#ffbe00] space-y-5 text-left">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#051224]">{welcomeLead}</strong>
                {welcomeBody ? ` ${welcomeBody}` : ""}
              </p>

              {remainingWelcomeParagraphs.map((paragraph, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#ffbe00]/10 px-5 py-4 text-base text-[#051224] font-medium leading-relaxed"
                >
                  {paragraph}
                </div>
              ))}
            </div>
          </motion.header>

          {/* Our Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-12 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="text-left space-y-4">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#051224]/70">
                  {product.title}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffbe00] tracking-tight">
                  Our Mission
                </h2>
                <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                  {product.missionParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div
                  className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-[#ffbe00] opacity-15 rounded-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 p-4">
                  <img
                    src={product.imageUrl}
                    alt={`${product.title} - ${product.category}`}
                    className="w-full h-64 sm:h-72 md:h-80 object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* What We Do? Section */}
          <section id="what-we-do" className="mb-16 scroll-mt-24">
            <div className="mb-10">
              <Heading value="What We Do?" />
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {product.whatWeDo.map((item, idx) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min((idx % 3) * 0.08, 0.24),
                  }}
                  className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333333%-1rem)] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-t-4 border-t-[#ffbe00] hover:shadow-lg transition flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#ffbe00]/15 text-[#051224] font-bold text-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <CheckCircle2
                      className="w-5 h-5 text-[#ffbe00]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#051224] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Product Closing CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-[#051224] text-white rounded-2xl shadow-xl p-8 md:p-12 text-center mb-16 relative overflow-hidden"
          >
            <div
              className="absolute -top-16 -right-16 w-56 h-56 bg-[#ffbe00] opacity-15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffbe00] mb-5">
                {product.closingHeading}
              </h2>
              <div className="space-y-3 text-gray-200 text-base md:text-lg leading-relaxed mb-8">
                {product.closingParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <Link
                to={`/Contact?product=${encodeURIComponent(product.title)}`}
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#ffbe00] text-[#051224] font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
              >
                <span>Connect with Us for {product.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>

          {/* Zager Digital Services Overview + Other Products */}
          <section className="pb-10">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 text-center max-w-4xl mx-auto mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ffbe00] bg-[#051224] px-3.5 py-1 rounded-full mb-4">
                {zagerProductsOverview.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051224] mb-4">
                {zagerProductsOverview.heading}
              </h2>
              <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed">
                {zagerProductsOverview.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#051224] text-center mb-6">
              Explore Our Other Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProducts.map((item) => {
                const OtherIcon = iconMap[item.iconName] || Store;
                return (
                  <Link
                    key={item.slug}
                    to={item.link}
                    className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#ffbe00] transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#ffbe00]/15 flex items-center justify-center mb-4">
                        <OtherIcon className="w-5 h-5 text-[#ffbe00]" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {item.category}
                      </span>
                      <h4 className="text-lg font-bold text-[#051224] mt-1 mb-2 group-hover:text-[#ffbe00] transition">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#051224] group-hover:text-[#ffbe00] transition">
                      {item.buttonText} <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
