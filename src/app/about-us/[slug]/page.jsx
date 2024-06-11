"use client";
import {
  PoliciesSection,
  GovernancePageSection,
  StyledHeroCard,
  UnderConstruction,
} from "@/components";
import React, { useState } from "react";

const Page = ({ params }) => {
  const { slug } = params;

  return (
    <>
      {slug === "policies-and-procedures" ? (
        <PoliciesSection slug={slug} />
      ) : slug === "governance-and-leadership" ? (
        <GovernancePageSection slug={slug} />
      ) : (
        <></>
      )}
    </>
  );
};

//       {slug === "governance-and-leadership" ? (
//         <GovernancePageSection slug={slug} />
//       ) : slug === "policies-and-procedures" ? (
//         <PoliciesSection />
//       ) : (
//         <UnderConstruction />
//       )}

//       {/* {slug === "about" && <AboutInfoSection />}
//       {slug === "governance-and-leadership" && (
//         <GovernancePageSection slug={slug} />
//       )}
//       {slug === "policies-and-procedures" && <PoliciesSection />}

export default Page;
