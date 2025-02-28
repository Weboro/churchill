import { PatternBannerCard } from "@/components";
import Image from "next/image";

const GovernanceStructure = ({ slug }) => {
  return (
    <div>
      <PatternBannerCard title="Governance Structure" />
      <div className="container mx-auto px-5">
        <Image
          width={1000}
          height={800}
          alt="governance chart"
          src="/assets/CIHE-Governance-Struct.svg"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default GovernanceStructure;
