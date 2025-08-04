"use client";
import { useEffect, useState } from "react";
import { FetchUpcomingKeyDate } from "@/components/utils/apiQueries";
import Spiner from "@/components/spiner";
import DataNotFound from "@/components/globals/DataNotFound/DataNotFound";
import KeyDatesCard from "@/components/cards/KeyDatesCard";

const monthsList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const UpcomingKeyDates = () => {
  const [data, setData] = useState(Array.from({ length: 12 }, () => [])); // 12 months
  const [isLoading, setIsLoading] = useState(true);
  const [expandedMonth, setExpandedMonth] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    FetchUpcomingKeyDate()
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setNoDataFound(true);
          setIsLoading(false);
          return;
        }

        const organizedData = Array.from({ length: 12 }, () => []);

        res.data.forEach((item) => {
          const eventDate = new Date(item.start_date);
          const year = eventDate.getFullYear();
          const month = eventDate.getMonth();

          if (year === currentYear) {
            organizedData[month].push(item);
          }
        });

        setData(organizedData);

        if (organizedData[currentMonth].length > 0) {
          setExpandedMonth(`${currentYear}-${currentMonth}`);
        }

        const hasAnyData = organizedData.some(
          (monthData) => monthData.length > 0
        );
        setNoDataFound(!hasAnyData);

        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setNoDataFound(true);
        setIsLoading(false);
      });
  }, []);

  const toggleMonth = (year, month) => {
    const key = `${year}-${month}`;
    setExpandedMonth((prev) => (prev === key ? null : key));
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          {noDataFound ? (
            <div className="md:w-2/3 md:mx-auto">
              <DataNotFound />
            </div>
          ) : (
            <div className="container mx-auto px-5">
              <h2 className="font-bold text-[36px] text-center mx-auto text-[#2C2B4B]">
                Key Dates
              </h2>

              <div className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold pb-1 w-fit relative before:absolute before:bg-primary-orange before:h-1 before:w-full before:bottom-0 before:left-0">
                  {currentYear}
                </h2>

                <div className="flex flex-col gap-4 w-full">
                  {[...Array(12).keys()].map((month) => {
                    const isActive =
                      expandedMonth === `${currentYear}-${month}`;
                    const events = data[month];

                    return (
                      <div key={month} className="flex flex-col gap-4">
                        <div
                          className={`w-full cursor-pointer px-4 py-2 rounded-md font-bold flex items-center justify-between border transition-all ${
                            isActive
                              ? "bg-primary-orange text-white"
                              : "border-primary-orange"
                          }`}
                          onClick={() => toggleMonth(currentYear, month)}
                        >
                          {monthsList[month]}
                          <i
                            className={`flex fi fi-br-${
                              isActive ? "minus" : "plus"
                            } ml-2`}
                          ></i>
                        </div>

                        {isActive && (
                          <div className="flex flex-col gap-4">
                            {events.length > 0 ? (
                              events.map((item) => (
                                <KeyDatesCard
                                  key={item.id}
                                  title={item?.title}
                                  description={item?.description}
                                  start_date={item?.start_date}
                                  end_date={item?.end_date}
                                  category={item?.category}
                                  audience={item?.audience}
                                  isFullwidth={true}
                                />
                              ))
                            ) : (
                              <p className="text-sm italic text-gray-500 pl-2">
                                No events in this month.
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UpcomingKeyDates;
