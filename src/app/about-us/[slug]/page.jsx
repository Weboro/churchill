import UnderConstruction from "@/app/under-construction/page";
import {
  AboutInfoSection,
  AccreditationSection,
  GovernancePageSection,
  PoliciesSection,
} from "@/components";
import React from "react";

const page = ({ params }) => {
  const { slug } = params;
  return (
    <main
      className="min-h-[80vh]"
      style={{
        backgroundImage: `linear-gradient(rgb(255 255 255 / 64%), rgb(255 255 255 / 64%) 100%), url(/assets/about-us-watermark.png)`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {slug === "governance-and-leadership" ? (
        <GovernancePageSection slug={slug} />
      ) : slug === "policies-and-procedures" ? (
        <PoliciesSection />
      ) : (
        <UnderConstruction />
      )}

      {/* {slug === "about" && <AboutInfoSection />}
      {slug === "governance-and-leadership" && (
        <GovernancePageSection slug={slug} />
      )}
      {slug === "policies-and-procedures" && <PoliciesSection />}
      {slug === "accreditation" && <AccreditationSection />}
      {slug === "CIHE-governance-structure" && <AccreditationSection />}
      {slug === "CIHE-organisational-chart" && <AccreditationSection />}
      {slug === "governance-and-leadership" && <AccreditationSection />}
      {slug === "company-and-financial-documents" && <AccreditationSection />} */}
    </main>
  );
};

export default page;
