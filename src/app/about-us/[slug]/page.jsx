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

  const [searchText, setSearchText] = useState("");
  const query = searchText.trim().toLowerCase();

  return (
    <>
      <StyledHeroCard
        title={`${slug?.split("-").join(" ")}`}
        breadcrumbs={`Home > About us > ${slug?.split("-").join(" ")}`}
        searchText={searchText}
        showSearch={true}
        onSearchText={setSearchText}
      />

      {slug === "policies-and-procedures" ? (
        <PoliciesSection searchQuery={query} />
      ) : slug === "governance-and-leadership" ? (
        <GovernancePageSection searchQuery={query} slug={slug} />
      ) : (
        <>
          <h2 className="text-2xl my-32 text-center mx-auto w-fit">
            Error: Page not found
            <br />
            This Page is under Construction
          </h2>
        </>
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
