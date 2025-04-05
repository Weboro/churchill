import { PatternBannerCard } from "@/components";
import Image from "next/image";

const GovernanceStructure = ({ slug }) => {
  return (
    <div>
      <PatternBannerCard title="CIHE Governance" />
      <div className="container mx-auto px-5">
        {/* <Image
          width={1000}
          height={800}
          alt="governance chart"
          src="/assets/CIHE-Governance-Structi.svg"
          className="w-full"
        /> */}
        <h6 className="py-5 mx-auto my-5 text-center">This page is under construction.</h6>
      </div>
    </div>
  );
};

export default GovernanceStructure;
