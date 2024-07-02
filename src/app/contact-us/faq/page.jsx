import React from "react";
import {
  NewsletterSection,
  PatternBannerCard,
  StyledHeroCard,
} from "@/components";
import { contactFaqs } from "@/constDatas/contactData";
import { AccordionComponent } from "@/components";

const ContactUsFAQ = () => {
  return (
    <>
      {/* <StyledHeroCard title="" breadcrumbs="Home > Contact > Faqs" /> */}
      <PatternBannerCard title="Frequently Asked Questions" />

      <div className="flex flex-col gap-[32px] lg:gap-[64px]">
        <div className="container mx-auto px-5">
          <AccordionComponent data={contactFaqs} />
        </div>

        <NewsletterSection />
      </div>
    </>
  );
};
export default ContactUsFAQ;
