import React from "react";
import { NewsSection, StyledHeroCard } from "@/components";
import { contactFaqs } from "@/constDatas/contactData";
import { AccordionComponent } from "@/components";

const ContactUsFAQ = () => {
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px]">
      <StyledHeroCard
        title="Frequently Asked Questions"
        breadcrumbs="Home > Contact > Faqs"
      />

      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <AccordionComponent data={contactFaqs} />
        </div>
      </div>

      <NewsSection />
    </div>
  );
};
export default ContactUsFAQ;
