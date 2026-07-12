import Image from "next/image";

interface Partner {
  src: string;
  alt: string;
  height: number;
  width: number;
}

const partners: Partner[] = [
  { src: "/sponsors/platcorp.png", alt: "platcorp", height: 90, width: 150 },
  { src: "/sponsors/vabu.png", alt: "vabu", height: 80, width: 100 },
  { src: "/sponsors/lamu.png", alt: "lamu", height: 80, width: 150 },
  { src: "/sponsors/ihub.png", alt: "ihub", height: 80, width: 150 },
  { src: "/sponsors/kdk.png", alt: "kdk", height: 80, width: 150 },
  {
    src: "/sponsors/tech_event_kenya.png",
    alt: "k_tech_event",
    height: 80,
    width: 100,
  },
  {
    src: "/sponsors/wtn.png",
    alt: "womentechNetwork",
    height: 80,
    width: 150,
  },
  { src: "/sponsors/ttw.png", alt: "ttw", height: 90, width: 100 },
  { src: "/sponsors/awit.png", alt: "awit", height: 80, width: 150 },
];

interface PastSponsors2025Props {
  year?: number | string;
}

const PastSponsors2025: React.FC<PastSponsors2025Props> = ({
  year = 2025,
}) => {
  return (
    <section className="bg-white py-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-800 font-semibold text-sm uppercase tracking-wide">
              Our {year} Partners
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You to Our {year} Sponsors
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            WITSummit {year} wouldn't have been possible without the generous
            support of these organisations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.alt}
              className="flex items-center justify-center "
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                height={partner.height}
                width={partner.width}
                className="object-contain max-h-16 md:max-h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastSponsors2025;