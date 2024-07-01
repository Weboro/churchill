import React from "react";
import { Button } from "@/components";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const AgentInfoCard = ({
  title,
  designation,
  agentName,
  addressLine1,
  addressLine2,
  phone,
  imageUrl,
  email,
}) => {
  return (
    <>
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
            Phone : <a href={`tel:${phone}`}>{phone}</a>
          </p>
          <p className="font-[600]">
            Email : <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AgentInfoCard;
