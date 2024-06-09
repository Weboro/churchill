"use client";
import { PoliciesSection, StyledHeroCard } from "@/components";
import React, { useState } from "react";

const Page = ({ params }) => {
  const { slug } = params;

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
        <PoliciesSection searchQuery={query} />
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

export default Page;
