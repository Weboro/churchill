import React from "react";
import { Button } from "@/components";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const AgentInfoCard = ({
  title,
  phone,
  website,
  address,
  country,
  email,
  agentName,
  imageUrl,
}) => {
  return (
    <div className="bg-light-grey p-4 rounded-md">
      <Image
        src={imageUrl}
        width={250}
        height={250}
        alt={`logo of ${title}`}
        className="w-28 mx-auto aspect-square object-contain mix-blend-multiply"
      />
      <a
        target="_blank"
        href={website?.includes("https://") ? website : `https://${website}`}
      >
        <h2 className="text-xl leading-[22px] font-bold mt-4 mb-2">{title}</h2>
      </a>

      <p className="font-[500] capitalize break-words">
        Agent Name: {agentName}
      </p>
      <p className="font-[500] capitalize break-words">
        Address: {address} {country}
      </p>

      <p className="font-[500] capitalize break-words">
        email:
        <a className="font-[600]" href={`mailto:${email}`}>
          {email}
        </a>
      </p>
      <p className="font-[500] capitalize break-words">
        phone:
        <a className="font-[600]" href={`tel:${phone}`}>
          {phone}
        </a>
      </p>
    </div>
  );
};

export default AgentInfoCard;

{
  /* <>
      <div className="bg-light-grey flex flex-col items-center justify-between gap-4 p-6">
        <div className="flex flex-col">
          <Image
            src={imageUrl}
            width={250}
            height={250}
            alt={`logo of ${title}`}
            className="w-28 mx-auto aspect-square object-contain mix-blend-multiply"
          />
          <h2 className="text-xl font-bold my-6">{title}</h2>
          {agentName && <p className="font-[600]">Contact: {agentName}</p>}
          {designation && <p className="font-[600]">{designation}</p>}

          {(addressLine1 || addressLine2) && (
            <p className="font-[600]">
              Address: <span>{addressLine1}</span>,<span>{addressLine2}</span>
            </p>
          )}
          <p className="font-[600]">
            Phone :{" "}
            <a href={`tel:${phone}`}>
              <p className="text-wrap w-8">{phone}</p>
            </a>
          </p>
          <p className="font-[600]">
            Email :{" "}
            <a href={`mailto:${email}`}>
              <p className="text-wrap w-8">{email}</p>
            </a>
          </p>
        </div>
      </div>
    </> */
}
