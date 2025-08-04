import IndivisualEventsPage from "@/components/sections/EventsSection/IndivisualEventsPage";

const page = ({ params }) => {
  const { slug } = params;
  return <IndivisualEventsPage slug={slug} />;
};

export default page;
