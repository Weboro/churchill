const AgentInfoCard = ({
  RecruitmentAgentOwner,
  RecruitmentAgentName,
  Phone,
  Website,
  BillingStreet,
  Billingcity,
  BillingState,
  BillingCode,
  Description,
  RecruitmentAgencyEmail,
  RepresentativeContactName,
}) => {
  return (
    <div className="bg-light-grey p-4 rounded-md">
      <a
        target="_blank"
        href={Website?.includes("https://") ? Website : `https://${Website}`}
      >
        <h2 className="text-xl leading-[22px] font-bold mt-4 mb-2">
          {RecruitmentAgentName}
        </h2>
      </a>

      <p className="font-[500] capitalize break-words">
        Agent Name: {RepresentativeContactName}
      </p>

      <p className="font-[500] capitalize break-words">
        Address:{" "}
        {`${BillingStreet}, ${Billingcity}, ${BillingState}, ${BillingCode}`}
      </p>

      {RecruitmentAgencyEmail && (
        <p className="font-[500] break-words">
          Email:{" "}
          <a className="font-[600]" href={`mailto:${RecruitmentAgencyEmail}`}>
            {RecruitmentAgencyEmail}
          </a>
        </p>
      )}

      {Phone && (
        <p className="font-[500] capitalize break-words">
          phone:{" "}
          <a className="font-[600]" href={`tel:${Phone}`}>
            {Phone}
          </a>
        </p>
      )}
    </div>
  );
};

export default AgentInfoCard;
