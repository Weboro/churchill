import IndivisualMemberDetailsPage from "@/components/sections/aboutUsSections/IndivisualMemberDetailsPage";

const page = ({ params }) => {
  const { slug } = params;

  return (
    <div className="mt-[120px] md:mt-0">
      <IndivisualMemberDetailsPage slug={slug} />
    </div>
  );
};

export default page;
