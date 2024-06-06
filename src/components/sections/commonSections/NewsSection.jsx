import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const images = [
  { id: 1, src: "/assets/circle-component/circ1.webp" },
  { id: 2, src: "/assets/circle-component/circ2.webp" },
  { id: 3, src: "/assets/circle-component/circ3.webp" },
  { id: 4, src: "/assets/circle-component/circ4.webp" },
  { id: 5, src: "/assets/circle-component/circ5.webp" },
  { id: 6, src: "/assets/circle-component/circ6.webp" },
  { id: 7, src: "/assets/circle-component/circ7.webp" },
  { id: 8, src: "/assets/circle-component/circ8.webp" },
  { id: 9, src: "/assets/circle-component/circ9.webp" },
  { id: 10, src: "/assets/circle-component/circ10.webp" },
];

const NewsSection = () => {
  return (
    <div className="container relative mx-auto px-5 ">
      <div className="flex bg-[#F3E4E4] rounded-[24px]">
        <div className="flex flex-1 flex-col gap-6 py-16 pl-10">
          <h3 className="relative z-50 leading-10 font-bold text-[36px]  text-[#2C2B4B]">
            Join our <br /> Newsletter
          </h3>
          <p>Get updated about our latest news, events, updates and more.</p>
          <Link
            href={`https://zfrmz.com.au/DtG2T10jdX7f8egPhVzt`}
            target="_blank"
            className="w-max"
          >
            <Button
              btnName={"Subscribe to our Newsletter"}
              icon={<FaArrowRight />}
              styleA={"flex items-center gap-1"}
              style={
                "border border-2 border-[#606060] rounded-full px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
              }
            />
          </Link>
        </div>
        <div className="flex-1  relative">
          <div class="circle-sml">
            <div class="circle-sml_item rounded-full overflow-hidden">
              <Image
                width={300}
                height={300}
                src={"/assets/circle-component/circ1.webp"}
                alt="image"
              />
            </div>
            <div class="circle-sml_item rounded-full overflow-hidden">
              <Image
                width={300}
                height={300}
                src={"/assets/circle-component/circ1.webp"}
                alt="image"
              />
            </div>
            <div class="circle-sml_item rounded-full overflow-hidden">
              <Image
                width={300}
                height={300}
                src={"/assets/circle-component/circ1.webp"}
                alt="image"
              />
            </div>
            <div class="circle-sml_item rounded-full overflow-hidden">
              <Image
                width={300}
                height={300}
                src={"/assets/circle-component/circ1.webp"}
                alt="image"
              />
            </div>
            <div class="circle-sml_item rounded-full overflow-hidden">
              <Image
                width={300}
                height={300}
                src={"/assets/circle-component/circ1.webp"}
                alt="image"
              />
            </div>
            <div class="circle-sml_item rounded-full overflow-hidden">
              <Image
                width={300}
                height={300}
                src={"/assets/circle-component/circ1.webp"}
                alt="image"
              />
            </div>
          </div>

          {/* <div class="circle-md ">
            <div class="circle-md_item">1</div>
            <div class="circle-md_item">2</div>
            <div class="circle-md_item">3</div>
            <div class="circle-md_item">4</div>
            <div class="circle-md_item">5</div>
            <div class="circle-md_item">6</div>
          </div> */}
        </div>
      </div>
    </div>
    //
    // <div className="container relative mx-auto px-5 ">
    //   <div className="overflow-hidden flex flex-col gap-[44px] bg-[#F3E4E4] rounded-[24px]">
    //     <div className="flex flex-col-reverse px-16 pt-6 lg:grid lg:grid-cols-2 gap-[32px]">
    //       <div className="flex items-center">
    //         <div className="flex flex-col gap-6 relative z-50 py-16">
    //           <h3 className="relative z-50 leading-10 font-bold text-[36px]  text-[#2C2B4B]">
    //             Join our <br /> Newsletter
    //           </h3>
    //           <p>
    //             Get updated about our latest news, events, updates and more.
    //           </p>
    //           <Link
    //             href={`https://zfrmz.com.au/DtG2T10jdX7f8egPhVzt`}
    //             target="_blank"
    //             className="w-max"
    //           >
    //             <Button
    //               btnName={"Subscribe to our Newsletter"}
    //               icon={<FaArrowRight />}
    //               styleA={"flex items-center gap-1"}
    //               style={
    //                 "border border-2 border-[#606060] rounded-full px-4 py-3 bg-[#E59623] hover:text-black hover:bg-[#ff9700] transition duration-200  ease-in-out hover:scale-105"
    //               }
    //             />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

// <div className="relative w-10 h-10 bg-re">
// <div class="circle-sml absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
//   <div class="circle-sml_item">1</div>
//   <div class="circle-sml_item">2</div>
//   <div class="circle-sml_item">3</div>
//   <div class="circle-sml_item">4</div>
//   <div class="circle-sml_item">5</div>
//   <div class="circle-sml_item">6</div>
// </div>

// {/*  */}

{
  /* <div class="circle-md absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
  <div class="circle-md_item">1</div>
  <div class="circle-md_item">2</div>
  <div class="circle-md_item">3</div>
  <div class="circle-md_item">4</div>
  <div class="circle-md_item">5</div>
  <div class="circle-md_item">6</div>
</div> */
}

// {/*  */}

// <div class="circle-lg absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
//   <div class="circle-lg_item">1</div>
//   <div class="circle-lg_item">2</div>
//   <div class="circle-lg_item">3</div>
//   <div class="circle-lg_item">4</div>
//   <div class="circle-lg_item">5</div>
//   <div class="circle-lg_item">6</div>
// </div>
// </div>

export default NewsSection;
