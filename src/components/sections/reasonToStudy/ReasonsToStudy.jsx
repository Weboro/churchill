"use client";
import FadeUpAnimation from "@/animations/FadeUp";

function ReasonsToStudy() {
  const satisfactionData = [
    {
      title: "Overall, I was satisfied with the way this subject was taught (with the Lectures / my Lecturer).",
      rating: "4.2",
    },
    {
      title: "Overall, I was satisfied with my subjects (content, assessments, learning activities /materials).",
      rating: "4.1",
    },
    {
      title: "Overall, I was satisfied with my Tutor (was enthusiastic, used effective teaching techniques, created a positive learning environment)",
      rating: "4.3",
    },
    {
      title: "Overall, I was satisfied with my educational experience based on the subjects I studied this semester*",
      rating: "4.2",
    },
  ];

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col gap-[32px] lg:gap-[44px]">
        <div className="text-center mx-auto max-w-4xl">
          <h2 className="font-bold text-[36px] text-[#2C2B4B] mb-4">
            Student Satisfaction
          </h2>
          <p className="text-[#2C2B4B] mb-2">
            Another reason to study at Churchill is our high level of student satisfaction, as rated by our students. In semester 2/2025 our students agreed and strongly agreed that*:
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {satisfactionData.map((item, index) => (
            <FadeUpAnimation key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <p className="text-[#2C2B4B] mb-4 min-h-[80px]">
                  {item.title}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-[48px] text-[#FF6B35]">
                    {item.rating}
                  </span>
                  <span className="text-[24px] text-gray-600">/5.0</span>
                </div>
              </div>
            </FadeUpAnimation>
          ))}
        </section>

        <div className="text-center text-sm text-gray-600 italic">
          *1= Strongly Disagree; 2= Disagree; 3= Unsure; 4 = Agree; 5 = Strongly Agree
        </div>
      </div>
    </div>
  );
}

export default ReasonsToStudy;