import Link from "next/link";

type CoverPageProps = {
  title: string;
  description: string;
  buttonText: string;
  offerTitle: string;
  offerDescription: string;
  buttonLink: string;
};

const CoverPage = ({
  title,
  description,
  buttonText,
  offerTitle,
  offerDescription,
  buttonLink,
}: CoverPageProps) => {
  return (
    <section className="gradient-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <div className="bono-highlight inline-block mb-8">BONO 14</div>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">{description}</p>
            <Link href={buttonLink}>
              <button className="btn-accent text-lg px-8 py-3">
                {buttonText}
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="gradient-bono rounded-lg p-8 text-center">
              <div className="text-6xl font-black text-gray-800 mb-4">
                {offerTitle}
              </div>
              <p className="text-gray-700 font-semibold">{offerDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
