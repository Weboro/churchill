import Image from "next/image";
import Link from "next/link";

const campusDetails = [
  {
    id: "parramatta",
    badge: "New South Wales",
    title: "Churchill Parramatta Campus",
    summary:
      "Our Parramatta campus sits in the heart of Western Sydney, moments from Parramatta Station. It features modern classrooms, a quiet library, collaborative lounges and on-campus student services so you are always close to the support you need.",
    address: "Level 1 16-18 Wentworth Street, Parramatta, NSW 2150, Australia",
    website: "https://www.churchill.nsw.edu.au",
    phone: "(02) 8856 2997",
    email: "info@churchill.nsw.edu.au",
    mapUrl: "https://maps.app.goo.gl/8atQGN3b8tx2uPAz6",
    ctaLabel: "Explore Parramatta Campus",
    image: "/assets/cihe-paramatta-campus.jpg",
  },
  {
    id: "melbourne",
    badge: "Victoria",
    title: "Churchill Melbourne Campus",
    summary:
      "Located on Queen Street in Melbourne’s CBD, this campus places you within a thriving business precinct. Bright teaching spaces, breakout zones and access to our academic and wellbeing teams make it ideal for students who prefer a city setting.",
    address: "Level 8, 85 Queen Street, Melbourne, VIC 3000, Australia",
    website: "https://www.churchill.nsw.edu.au",
    phone: "(03) 8652 9393",
    email: "info@churchill.nsw.edu.au",
    mapUrl: "https://maps.google.com/?q=Level+8,+85+Queen+Street,+Melbourne+VIC+3000",
    ctaLabel: "Explore Melbourne Campus",
    image: "/assets/cihe-melbourne-campus.jpg",
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
          <p className="max-w-4xl mx-auto text-base md:text-lg text-zinc-700 leading-relaxed">
            Churchill Institute of Higher Education delivers the same caring,
            career-focused experience in New South Wales and Victoria. Choose
            the campus that suits your lifestyle and know you&apos;ll find
            bright learning environments, helpful staff and a community of
            motivated students wherever you study.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-5 pb-20">
        <div className="p-6 md:p-10 lg:p-14">
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
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                    <Image
                      src={campus.image}
                      alt={`${campus.title} exterior`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={campus.id === "parramatta"}
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900">
                    {campus.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 mt-3 leading-relaxed">
                    {campus.summary}
                  </p>
                </div>

                <dl className="grid grid-cols-1 gap-4 text-sm md:text-base text-zinc-700">
                  <div>
                    <dt className="font-semibold text-zinc-900">Address</dt>
                    <dd className="mt-1 font-semibold text-zinc-900">
                      {campus.address}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-900">Website</dt>
                    <dd className="mt-1">
                      <Link
                        href={campus.website}
                        target="_blank"
                        className="text-primary-orange font-semibold hover:underline"
                      >
                        {campus.website.replace("https://www.", "www.")}
                      </Link>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-900">Phone</dt>
                    <dd className="mt-1">
                      <Link
                        href={`tel:${campus.phone.replace(/[^0-9]/g, "")}`}
                        className="hover:text-primary-orange transition-colors"
                      >
                        {campus.phone}
                      </Link>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-900">Email</dt>
                    <dd className="mt-1">
                      <Link
                        href={`mailto:${campus.email}`}
                        className="hover:text-primary-orange transition-colors"
                      >
                        {campus.email}
                      </Link>
                    </dd>
                  </div>
                </dl>

                {/* <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={campus.mapUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-800 px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors"
                  >
                    {campus.ctaLabel}
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-primary-orange hover:text-zinc-900 transition-colors"
                  >
                    Talk to a team member
                  </Link>
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
