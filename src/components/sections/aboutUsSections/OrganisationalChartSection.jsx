import PatternBannerCard from "@/components/cards/PatternBannerCard";
import Image from "next/image";

const OrganisationalChartSection = ({ slug }) => {
  return (
    <div>
      <PatternBannerCard title="Churchill Institute of Higher Education Leadership" />

      <div className="container mx-auto px-5">
        <Image
          width={1000}
          height={800}
          alt="organizational chart"
          src="/assets/Churchill-IHE-Org-Char.svg"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default OrganisationalChartSection;
