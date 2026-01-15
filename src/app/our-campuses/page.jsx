import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiGlobe, FiPhone, FiMail } from "react-icons/fi";
import CampusGalleryCarousel from "./CampusGalleryCarousel";
import AccordionComponent from "../../components/accordion/AccordionComponent";

const campusDetails = [
  {
    id: "parramatta",
    badge: "New South Wales (NSW)",
    title: "Churchill Institute's Parramatta Campus (Sydney, NSW)",
    summary:
      "Study in Parramatta - Sydney's major Western Sydney CBD and one of the region's fastest-growing business and lifestyle precincts. Our Parramatta campus offers a highly connected location for students who want the benefits of studying in Sydney while enjoying Parramatta's easy access to transport, services, and everyday essentials.",
    atGlance: [
      "Location: Parramatta (Sydney, NSW)",
      "Ideal for: Students seeking strong Sydney connectivity and a major metropolitan center",
      "Nearby: Public transport, retail, cafes, services and community amenities",
    ],
    highlights: [
      "Teaching and learning spaces: modern classrooms and learning areas",
      "Student support: guidance and assistance through student services",
      "Study-friendly environment: spaces that support productive learning",
      "Connectivity: Wi-Fi access and essential learning resources",
      "Accessibility: step-free entry, lift access, and accessible toilets",
      "Recreation and student experience: informal breakout areas and recreation options such as a pool table (availability may change from time to time)",
    ],
    transport: {
      station: "Parramatta Train Station",
      walk: "2-3 minutes",
    },
    address: "Level 1, 16-18 Wentworth St, Parramatta NSW 2150",
    website: "https://churchill.edu.au",
    phoneNumbers: ["(02) 8856 2997"],
    email: "info@churchill.edu.au",
    mapUrl:
      "https://maps.google.com/?q=Level+1,+16-18+Wentworth+St,+Parramatta+NSW+2150",
    visitHours: "Monday to Friday, 8:00am to 5:00pm",
    ctaLabel: "Visit the Parramatta (Sydney) campus",
    image: "/assets/cihe-paramatta-campus.jpg",
  },
  {
    id: "melbourne",
    badge: "Victoria (VIC)",
    title: "Churchill Melbourne Campus (VIC)",
    summary:
      "Our Melbourne campus offers a convenient CBD location with excellent access to public transport and city amenities-ideal for students who want to study close to the action and stay connected to everything Melbourne has to offer.",
    atGlance: [
      "Location: Melbourne CBD (VIC)",
      "Ideal for: Students seeking a central location with strong transport access",
      "Nearby: Public transport, retail precincts, cafes, and essential services",
    ],
    highlights: [
      "Teaching and learning spaces: modern classrooms and learning areas",
      "Student support: guidance and assistance through student services",
      "Study-friendly environment: spaces that support productive learning",
      "Connectivity: Wi-Fi access and essential learning resources",
      "Accessibility: step-free entry, lift access, and accessible toilets",
      "Recreation and student experience: informal breakout areas and recreation options such as table tennis (availability may change from time to time)",
    ],
    transport: {
      station: "Flinders Street Station",
      walk: "3-5 minutes",
    },
    address: "Level 8/85 Queen St, Melbourne VIC 3000",
    website: "https://churchill.edu.au",
    phoneNumbers: ["(03) 7032 6358", "(03) 8652 9393"],
    email: "info@churchill.edu.au",
    mapUrl:
      "https://maps.google.com/?q=Level+8/85+Queen+St,+Melbourne+VIC+3000",
    visitHours: "Monday to Friday, 8:00am to 5:00pm",
    ctaLabel: "Visit the Melbourne campus",
    image: "/assets/cihe-melbourne-campus.jpg",
  },
];

const galleryImages = [
  "/assets/campus-gallery/Image.jpeg",
  "/assets/campus-gallery/image-2.jpeg",
  "/assets/campus-gallery/Image-3.jpeg",
  "/assets/campus-gallery/Image-4.jpeg",
  "/assets/campus-gallery/Image-5.jpeg",
  "/assets/campus-gallery/Image-6.jpeg",
  "/assets/campus-gallery/Image-7.jpeg",
];

const campusFaqs = [
  {
    title: "Do I need an appointment to visit the campus?",
    description:
      "You're welcome to visit during our opening hours (Mon-Fri, 8:00am-5:00pm). To ensure we can assist you efficiently, please call or email before you arrive.",
  },
  {
    title: "What are the campus opening hours?",
    description: "Both campuses are open Monday to Friday, 8:00am to 5:00pm.",
  },
  {
    title: "Are the campuses accessible?",
    description:
      "Yes. Both campuses have step-free entry, lift access, and accessible toilets. If you need any specific assistance, please contact us before your visit.",
  },
];

const Page = () => {
  return (
    <main className="bg-[#f7f8fb]">
      <header
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.9), rgba(235,147,32,0.35)), url('/assets/downtown-sydney.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative container mx-auto px-5 py-16 lg:py-24 flex flex-col gap-6 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-900">
            Explore Our Campuses
          </h1>
        </div>
      </header>

      <section className="container mx-auto px-5 pb-20">
        <div className="p-6 md:p-10 lg:p-14 flex flex-col gap-12">
          <div className="max-w-4xl text-zinc-700 text-sm md:text-base leading-relaxed">
            <p>
              Churchill offers centrally located campuses in Parramatta (Sydney,
              NSW) and Melbourne (VIC) - designed for convenience, accessibility,
              and a supportive learning environment. Whether you prefer the
              energy of a major CBD or the connectivity of a growing metro hub,
              our campuses help you stay close to public transport, essential
              services, and the student support you need throughout your
              studies.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {campusDetails.map((campus) => (
              <article
                key={campus.id}
                className="rounded-2xl border border-zinc-100 bg-gradient-to-b from-zinc-50 to-white p-6 md:p-8 flex flex-col gap-5 shadow-[0_25px_60px_rgba(26,31,55,0.08)]"
              >
                <span className="text-md font-semibold tracking-[0.2em] uppercase text-primary-orange">
                  {campus.badge}
                </span>
                {campus.image && (
                  <div className="relative w-full rounded-2xl overflow-hidden">
                    <Image
                      src={campus.image}
                      alt={`${campus.title} exterior`}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover"
                      priority={campus.id === "parramatta"}
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900">
                    {campus.title}
                  </h3>
                </div>

                <ul className="space-y-4 text-sm md:text-base text-zinc-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-primary-orange">
                      <FiMapPin />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Address
                      </p>
                      <p className="font-semibold text-zinc-900">
                        {campus.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-primary-orange">
                      <FiGlobe />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Website
                      </p>
                      <Link
                        href={campus.website}
                        target="_blank"
                        className="font-semibold text-primary-orange hover:underline"
                      >
                        {campus.website.replace("https://www.", "www.")}
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-primary-orange">
                      <FiPhone />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Phone
                      </p>
                      <div className="flex flex-col gap-1">
                        {campus.phoneNumbers.map((phone) => (
                          <Link
                            key={phone}
                            href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                            className="font-semibold hover:text-primary-orange transition-colors"
                          >
                            {phone}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-primary-orange">
                      <FiMail />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        Email
                      </p>
                      <Link
                        href={`mailto:${campus.email}`}
                        className="font-semibold hover:text-primary-orange transition-colors"
                      >
                        {campus.email}
                      </Link>
                    </div>
                  </li>
                </ul>

              </article>
            ))}
          </div>

          <div className="bg-transparent">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Campus Photo Gallery
            </p>
            <h3 className="mt-3 text-xl md:text-2xl font-semibold text-zinc-900">
              Sydney & Melbourne Highlights
            </h3>
            <p className="mt-3 text-sm md:text-base text-zinc-700">
              A rotating look at our learning spaces, reception areas, and
              student facilities across both locations.
            </p>
            <CampusGalleryCarousel images={galleryImages} />
          </div>

          <div className="rounded-2xl border border-zinc-100 bg-white p-6 md:p-10 shadow-[0_25px_60px_rgba(26,31,55,0.08)]">
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
              Facilities
            </h2>
            <p className="mt-3 text-sm md:text-base text-zinc-700">
              Across our campuses, we aim to provide a supportive, study-friendly
              environment with practical services and amenities to help students
              succeed. Facilities and amenities available across our locations
              include:
            </p>
            <ul className="mt-6 grid gap-3 text-sm md:text-base text-zinc-700 list-disc list-inside">
              <li>On-campus student support during business hours</li>
              <li>Library access for study and learning resources</li>
              <li>
                Student technology access: laptops/desktops available for
                student use and short-term borrowing (subject to availability
                and checkout conditions)
              </li>
              <li>Connectivity: Wi-Fi access and essential learning resources</li>
              <li>
                Study and collaboration spaces: student meeting areas, breakout
                spaces, and quiet study areas
              </li>
              <li>Printing/scanning available on campus (where applicable)</li>
              <li>Filtered water stations across campus</li>
              <li>Refreshments: free coffee machines (where available)</li>
              <li>
                Recreation and wellbeing: social spaces with recreation options
                such as a pool table and table tennis (availability may change
                from time to time)
              </li>
              <li>
                Fresh air spaces: balconies or outdoor breakout areas (where
                available)
              </li>
              <li>
                Convenient location surrounded by local cafes and services, with
                easy access to public transport
              </li>
              <li>
                Accessible campus design: step-free entry, lift access, and
                accessible toilets
              </li>
            </ul>
            <p className="mt-4 text-xs text-zinc-500">
              Availability varies by campus. Please contact us to confirm what's
              currently available.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
              FAQ
            </h2>
            <div className="mt-2">
              <AccordionComponent data={campusFaqs} />
            </div>
            </div>
          </div>
      </section>
    </main>
  );
};

export default Page;
