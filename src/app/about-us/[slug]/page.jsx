"use client";

import UnderConstruction from "@/app/under-construction/page";
import {
  AboutInfoSection,
  AccreditationSection,
  GovernancePageSection,
  PoliciesSection,
  StyledHeroCard,
  Search,
} from "@/components";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { slug } = params;
  const [isLoading, setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState("");
  const query = searchText.trim().toLowerCase();

  return (
    <>
      <StyledHeroCard
        title="Policy And Procedures"
        breadcrumbs="Home > About us > Policy And Procedures"
        searchText={searchText}
        onSearchText={setSearchText}
        showSearch={true}
      />

      {slug === "policies-and-procedures" ? (
        <PoliciesSection isLoading={isLoading} searchQuery={query} />
      ) : (
        <>not found</>
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

export default page;
