import HeroSection from "@/components/sections/homeSections/HeroSection";
import CoursesSection from "@/components/sections/homeSections/CoursesSection";
import UpcomingKeyDates from "@/components/sections/upcomingEventsSections/UpcomingKeyDates";
import EnquirySection from "@/components/sections/homeSections/EnquirySection";
import BlogSection from "@/components/sections/blogSections/BlogSection";
import VideoSection from "@/components/sections/homeSections/VideoSection";
import NewsletterSection from "@/components/sections/commonSections/NewsletterSection";

const Home = () => {
  return (
    <main className="">
      <div className="flex flex-col gap-[32px] lg:gap-[100px]">
        <HeroSection />

        <CoursesSection />

        <UpcomingKeyDates />

        <EnquirySection />

        <BlogSection />

        <VideoSection />

        <NewsletterSection />
      </div>
    </main>
  );
};

export default Home;
