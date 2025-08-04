import CourseDetails from "@/components/sections/courseSections/CourseDetails";

const page = ({ params }) => {
  const { slug } = params;

  return <CourseDetails slug={slug} />;
};

export default page;
