import React from "react";
import { StyledHeroCard } from "@/components";
import { contactFaqs } from "@/constDatas/contactData";
import { AccordionComponent } from "@/components";

const ContactUsFAQ = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgb(255 255 255 / 64%), rgb(255 255 255 / 64%) 100%), url(/assets/about-us-watermark.png)`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <StyledHeroCard
        title="Frequently Asked Questions"
        breadcrumbs="Home > Contact > Faqs"
      />

      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <span></span>
          <AccordionComponent data={contactFaqs} />
        </div>
      </div>
    </div>
  );
};
export default ContactUsFAQ;
