import IndivisualBlogPage from "@/components/sections/blogSections/IndivisualBlogPage";

const page = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <IndivisualBlogPage slug={slug} />
    </div>
  );
};

export default page;
