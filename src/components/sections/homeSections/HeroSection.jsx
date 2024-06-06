// import TopBannerCard from "@/components/cards/TopBannerCard";
// import React from "react";

// const HeroSection = () => {
//   // const [animate, setAnimate] = useState(false);

//   // useEffect(() => {
//   //   setAnimate(true);
//   // }, []);
//   return (
//     <div>
//       <TopBannerCard
//         image={`/assets/banner.jpg`}
//         imageA={"/assets/hero-image-b.png"}
//         titleSpan={
//           <span>
//             Take the first step to <span className={`highlight`}>Study</span>{" "}
//             with us.
//           </span>
//         }
//         // titleSpan={<span>Take the first step to <span className={`highlight ${animate ? 'animate' : ''}`}>study</span> with us.</span>}
//         title={""}
//         subTitle={"Explore our innovative programs and transform your career."}
//         link={`/courses`}
//         linkA={`/under-construction`}
//         BtnAText={"Explore Our Courses"}
//         BtnBText={"Apply Now"}
//       />
//     </div>
//   );
// };

// export default HeroSection;

import TopBannerCard from "@/components/cards/TopBannerCard";
import React from "react";

const HeroSection = () => {
  // const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   setAnimate(true);
  // }, []);
  return (
    <div>
      <TopBannerCard
        image={`/assets/banner-peroson.jpg`}
        // imageA={'/assets/hero-image-b.png'}
        titleSpan={
          <span>
            Transforming <span className={`highlight`}>Dreams</span> into
            Degrees.
          </span>
        }
        // titleSpan={<span>Take the first step to <span className={highlight ${animate ? 'animate' : ''}}>study</span> with us.</span>}
        title={""}
        subTitle={"Explore our innovative programs and transform your career."}
        link={`/courses`}
        linkA={`/apply-now`}
        BtnAText={"Explore Our Courses"}
        BtnBText={"Apply Now"}
      />
    </div>
  );
};

export default HeroSection;
