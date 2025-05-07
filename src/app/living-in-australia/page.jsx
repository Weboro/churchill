// "use client";

// import React, { useState } from "react";

// const Page = () => {
//     const Header = () => (
//         <header className="bg-cihe-navy text-white py-8 text-center">
//             <h1 className="font-montserrat font-bold text-3xl md:text-4xl">
//                 Pre-Departure Checklist & Life in Australia
//             </h1>
//         </header>
//     );

//     const Sidebar = ({ activeIndex, setActiveIndex }) => {
//         const sections = [
//             "Why Study in Australia?",
//             "Life in Sydney & Parramatta",
//             "What to Pack",
//             "Arriving at Sydney Airport",
//             "Accommodation in Sydney",
//             "Australian Culture & Values",
//             "Cost of Living",
//             "Public Transport",
//             "Working in Australia",
//             "Emergency & Healthcare",
//             "Mobile & Internet",
//             "Banking in Australia",
//         ];

//         return (
//             <nav className="w-[280px] min-w-[280px] bg-cihe-grey p-4 border-r border-gray-200">
//                 <ul className="list-none p-0 m-0">
//                     {sections.map((title, index) => (
//                         <li
//                             key={index}
//                             className={`py-3 px-4 mb-1 cursor-pointer border-l-

// 4 border-transparent transition-all duration-300 font-montserrat font-medium text-cihe-navy hover:bg-cihe-light-blue ${activeIndex === index ? "bg-cihe-light-blue border-l-cihe-navy font-semibold" : ""
//                                 }`}
//                             onClick={() => setActiveIndex(index)}
//                         >
//                             {title}
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         );
//     };

//     const Content = ({ activeIndex }) => {
//         const sections = [
//             {
//                 title: "Why Study in Australia?",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Why Study in Australia?
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Australia continues to be one of the world’s most popular destinations for international students—and for good reason. With over 1 million international students expected in 2025, Australia offers the perfect mix of world-class education, a vibrant multicultural environment, and an unbeatable quality of life.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             A Global Leader in Education
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Australia’s education system is recognised globally for its high standards, innovative teaching methods, and strong graduate outcomes. Whether you're pursuing business, technology, healthcare, or the arts, you'll find programs that are internationally respected and aligned with future career demands.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Safe, Stable, and Student-Friendly
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Australia ranks among the safest countries in the world, supported by strong legislation like the Education Services for Overseas Students (ESOS) Act that protects international student rights. Students also benefit from Australia’s political stability, low crime rates, and welcoming communities.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             High Quality of Life
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Ranked 5th on the United Nations Human Development Index, Australia is known for its relaxed lifestyle, clean cities, and stunning natural beauty. From white-sand beaches to lush national parks, students enjoy a lifestyle that balances study and wellbeing.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Culturally Diverse and Inclusive
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             One in three Australians was born overseas, making the country one of the most culturally diverse in the world. As a student, you’ll find it easy to connect with others, build friendships across cultures, and feel at home—whether in the city, by the coast, or on campus.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Strong Career Prospects
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Australia has a prosperous economy (13th largest globally by GDP) and is home to global companies across sectors like finance, technology, mining, and health. Many students choose to stay and work in Australia after graduation, thanks to post-study work opportunities and a strong demand for skilled professionals.
//                         </p>
//                     </>
//                 ),
//             },
//             {
//                 title: "Life in Sydney & Parramatta",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Life in Sydney: Your New Home Away from Home
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Moving to a new city can feel overwhelming—but in Sydney, it won’t take long for you to feel right at home. As Australia’s largest and most iconic city, Sydney offers an exciting mix of culture, career opportunities, and natural beauty—all in one place.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Welcome to Parramatta: The Heart of Western Sydney
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Churchill Institute of Higher Education (CIHE) is located in Parramatta—Sydney’s “second city.” Just 30 minutes by train from the CBD, Parramatta is a vibrant hub of culture, business, and community life. From diverse dining options and lively festivals to riverside parks and retail precincts, there’s always something to explore.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Our campus is conveniently located just a 5-minute walk from Parramatta Station, making your daily commute simple and stress-free.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             A City of Beaches, Business, and Balance
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Home to over 5.2 million people, Sydney is famous for its world-class beaches, including the iconic Bondi Beach just 5km from the city centre. But it’s not just about surf and sun—Sydney is also a global centre for commerce, particularly in banking, technology, and professional services.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             With its balance of work and lifestyle, Sydney attracts people from all walks of life, and as a student, you’ll enjoy both career-building opportunities and unforgettable leisure experiences.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             A Climate You’ll Love
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Sydney enjoys a mild, sub-tropical climate—perfect for year-round outdoor living. Summers (December to February) average 19–27°C, while winters (June to August) remain mild with temperatures between 8–17°C. Whether you're studying, working, or relaxing, Sydney’s weather makes it easy to stay active and enjoy the outdoors.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Culture That Reflects the World
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             With more than 200 languages spoken and over a third of residents born overseas, Sydney is a true multicultural city. You’ll find communities and places of worship representing all major faiths, festivals from around the globe, and international cuisines on every street corner.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             In Sydney, diversity isn’t just welcomed—it’s celebrated.
//                         </p>
//                     </>
//                 ),
//             },
//             {
//                 title: "What to Pack",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             What to Pack for Studying in Australia
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Packing for a long-term move to Australia is exciting—but it can also be a bit daunting. What should you bring? What can you leave behind? Here’s a simple guide to help you pack smart and arrive prepared for your new life in Sydney.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Must-Haves Before You Fly
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Passport and Student Visa</strong><br />Keep your original passport and ensure you can access your visa details online via VEVO.</li>
//                             <li><strong>Overseas Student Health Cover (OSHC)</strong><br />Print your policy or have it ready on your phone—it’s mandatory and ensures you have access to healthcare in Australia.</li>
//                             <li><strong>Plane Ticket and Emergency Contacts</strong><br />Always have a return ticket and a printed list of emergency contact numbers.</li>
//                             <li><strong>Money</strong><br />Bring enough funds to cover initial expenses until you open an Australian bank account. A mix of debit/credit cards and some Australian dollars is ideal.</li>
//                             <li><strong>Any prescription medication</strong> you require, along with a copy of your prescription or doctor's note (in English).</li>
//                             <li><strong>Confirmed Accommodation</strong><br />Make sure you’ve arranged a place to stay before you land. (Check our Accommodation blog for tips.)</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             What to Pack in Your Luggage
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Keep in mind airline weight limits and pack only what you truly need. Prioritise essentials for your studies and daily life:
//                         </p>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             Electronics:
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Mobile phone</li>
//                             <li>Headphones</li>
//                             <li>Laptop or tablet</li>
//                             <li>Power adaptor (Australia uses <strong>Type I</strong> plugs, 230V, 50Hz)</li>
//                         </ul>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             Clothing:
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Everyday outfits suited to Sydney’s climate</li>
//                             <li>A few warm layers for winter (especially if arriving in July)</li>
//                             <li>Interview-ready clothes if you plan to work part-time</li>
//                             <li>Swimwear, gym clothes, and comfortable walking shoes</li>
//                             <li>Bed linen, bath towels, and a blanket (if not provided by your accommodation)</li>
//                         </ul>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             Personal Items:
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Basic toiletries (you can buy more here)</li>
//                             <li>Backpack for class and personal use</li>
//                             <li>A small set of kitchen essentials (plate, bowl, cup, cutlery)</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <strong>Pro Tip:</strong> Keep valuables, documents, and a change of clothes in your cabin baggage—just in case your checked luggage is delayed.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Final Tips
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Label all your luggage clearly with your name and Australian address (if known).</li>
//                             <li>Don’t pack prohibited or restricted items—Australia has very strict customs and biosecurity laws. Check the <a href="https://www.abf.gov.au/" target="_blank" className="text-cihe-secondary hover:underline">Australian Border Force website</a> before you fly.</li>
//                             <li>Keep your passport, visa, and essential items with you at all times during travel.</li>
//                         </ul>
//                     </>
//                 ),
//             },
//             {
//                 title: "Arriving at Sydney Airport",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Arriving in Australia: What to Expect at the Airport
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Your plane has landed, and you’ve finally made it to Sydney—welcome! But before you step into your new life, there are a few important steps to follow at the airport. Here’s what to expect and how to prepare for a smooth arrival.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Welcome to Sydney Airport
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             All international flights land at <strong>Sydney Kingsford Smith International Airport</strong>, located about 8 kilometres from the city centre. It’s one of Australia’s busiest and most efficient airports, and navigating it is fairly straightforward—especially with this checklist in hand.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Step-by-Step: What Happens After You Land
//                         </h4>
//                         <ol className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-decimal pl-6">
//                             <li><strong>Complete the Incoming Passenger Declaration Card</strong><br />This form is handed out on your flight. Be honest and accurate—Australia has strict biosecurity laws, and undeclared items can result in fines.</li>
//                             <li><strong>Clear Customs and Border Protection</strong><br />Present your passport, student visa, and declaration card to immigration officers.</li>
//                             <li><strong>Go Through Quarantine and Biosecurity Screening</strong><br />Australia is serious about protecting its environment. You must declare food, plant materials, wooden items, or animal products. Even snacks or herbs from home can be an issue—if in doubt, declare it!</li>
//                             <li><strong>Collect Your Luggage</strong><br />Head to the baggage claim area after clearing customs.</li>
//                         </ol>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Getting from the Airport to the City
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Once you're through customs, it’s time to head to your accommodation or campus. Here are your main transport options:
//                         </p>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             1. Train (Recommended)
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Catch the <strong>Airport Link train</strong> from the “International Airport” station located directly under the terminal.</li>
//                             <li>Buy an <strong>Opal Card</strong> from the station or use contactless payment.</li>
//                             <li>Ride to <strong>Central Station</strong> (approx. 15 minutes, fare ~AUD $18).</li>
//                             <li>From Central Station, you can access most parts of Sydney, including a short walk to CIHE’s Ultimo campus or a transfer to Parramatta.</li>
//                         </ul>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             2. Taxi or Rideshare
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Available at the designated taxi rank just outside the terminal.</li>
//                             <li>Most drivers do not accept cash—you’ll need to pay by card.</li>
//                             <li>Fares vary depending on your destination.</li>
//                         </ul>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             3. Bus Services
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Several buses serve the airport, but may not be the most convenient option if you’re carrying a lot of luggage.</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             For train schedules and route planning, visit the <a href="https://transportnsw.info/trip" target="_blank" className="text-cihe-secondary hover:underline">NSW Trip Planner</a> website.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Final Tips for a Smooth Arrival
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Keep all essential documents (passport, visa, OSHC, accommodation address) in your cabin bag.</li>
//                             <li>Have a working mobile phone or international SIM ready if you need to call your accommodation provider.</li>
//                             <li>If you're feeling unsure, airport staff are friendly and happy to help.</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Sydney is ready to welcome you—but before you explore, let’s make sure you’ve got a place to stay.
//                         </p>
//                     </>
//                 ),
//             },
//             {
//                 title: "Accommodation in Sydney",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Finding Accommodation in Sydney: A Student’s Guide
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             One of the most important steps in your journey to Australia is finding a place to live. Sydney offers a wide range of accommodation options, but demand can be high—especially after COVID-19 reduced rental availability across the city. Here’s what you need to know to find the right home away from home.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Types of Student Accommodation
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Whether you want privacy, independence, or a local experience, Sydney has something for everyone. These are the most common options for international students:
//                         </p>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             1. Managed Student Accommodation
//                         </h5>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Purpose-built student housing with furnished rooms, shared amenities, and support services. Often located near transport and universities.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Examples: <a href="https://npas.org.au/accredited-properties/" target="_blank" className="text-cihe-secondary hover:underline">NPAS Accredited Properties</a>
//                         </p>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             2. Homestay
//                         </h5>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Live with an Australian host family. Great for improving your English and experiencing local culture.
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Global Experience</li>
//                             <li>Homestay Australia</li>
//                             <li>Homestay Network</li>
//                         </ul>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             3. Share Houses or Apartments
//                         </h5>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Rent a room in a shared house or flat with other students or young professionals. This is often the most budget-friendly option.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Try: <a href="https://flatmates.com.au" target="_blank" className="text-cihe-secondary hover:underline">Flatmates.com.au</a> or <a href="https://flatmatefinders.com.au" target="_blank" className="text-cihe-secondary hover:underline">Flatmate Finders</a>
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Location, Location, Location
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Proximity to CIHE:</strong> Ensure easy access to public transport so you can commute to our Parramatta campus without stress.</li>
//                             <li><strong>Suburb Vibes:</strong> City centre and beachside suburbs (like Bondi or Newtown) can be expensive, while outer suburbs are more affordable but might require longer travel.</li>
//                             <li><strong>Safety & Amenities:</strong> Check for nearby supermarkets, health centres, and public facilities.</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Tips for Renting in Sydney
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Start Early:</strong> Begin your search before arriving in Australia to secure a place for at least your first few weeks.</li>
//                             <li><strong>Inspect Before Committing:</strong> If possible, view properties in person or ask for a virtual tour.</li>
//                             <li><strong>Understand the Lease:</strong> Read rental agreements carefully—know your rights and responsibilities.</li>
//                             <li><strong>Budget Wisely:</strong> Rent varies by area, and utilities or internet may not be included.</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <strong>Important Note:</strong><br />CIHE does not formally endorse or partner with any specific accommodation providers. Always do your own research, and be cautious with any payments or contracts.
//                         </p>
//                     </>
//                 ),
//             },
//             {
//                 title: "Australian Culture & Values",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Understanding Australian Culture: Fitting In and Making Friends
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Moving to a new country can be a cultural adventure—and Australia is no exception. From casual conversations to social norms, getting familiar with Aussie culture will make your experience richer, smoother, and a lot more enjoyable.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             🇦🇺 What Defines Australian Culture?
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Australians value a relaxed, friendly way of life. The culture is casual but respectful, and built on values like:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Mateship</strong> – Loyalty and looking out for your friends</li>
//                             <li><strong>Egalitarianism</strong> – Everyone is equal, no matter their job, background or income</li>
//                             <li><strong>Authenticity & Humility</strong> – Be yourself; show off, and you’ll likely be ignored</li>
//                             <li><strong>Informality</strong> – First names are used everywhere, even with lecturers or your boss</li>
//                             <li><strong>Humour</strong> – Australians love to joke, even about serious things</li>
//                             <li><strong>Good manners</strong> – A simple “please” and “thank you” goes a long way</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Making Friends with Australians
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Many international students want to connect with locals—and it’s worth the effort. Aussies are generally open and curious about other cultures, especially if you show genuine interest in theirs.
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Say hello first</strong> – Don’t be shy! A simple “Hi, how’s it going?” is a typical greeting.</li>
//                             <li><strong>Join clubs or social groups</strong> – From sports to student societies, shared interests help spark conversations.</li>
//                             <li><strong>Ask questions</strong> – Australians love when you’re curious about their slang, traditions, or food.</li>
//                             <li><strong>Be open to trying new things</strong> – A footy game, a BBQ, or a surf lesson? Why not!</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Having Australian friends will not only make your stay more enjoyable—it’s also the fastest way to improve your English and understand life here better.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Quick Cultural Tips
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Don’t call lecturers or teachers “Sir” or “Ma’am”—use their first name.</li>
//                             <li>Tipping is not expected, but appreciated in restaurants or cafés.</li>
//                             <li>Australians appreciate personal space and may seem more independent—but they’re friendly when approached.</li>
//                             <li>Always walk or stand to your <strong>left</strong> in public spaces like escalators or hallways.</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Celebrate Diversity
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Australia is one of the most multicultural countries in the world. People from all religions, ethnicities, and backgrounds live here, and freedom of religion is protected by the Constitution. You'll find communities and places of worship for Christianity, Islam, Hinduism, Buddhism, Judaism, Taoism, and more throughout Sydney.
//                         </p>
//                     </>
//                 ),
//             },
//             {
//                 title: "Cost of Living",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Money & Cost of Living in Australia: What Students Need to Know
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Living in Australia is exciting—but it’s also important to plan your finances carefully. As a highly developed country, Australia offers great quality of life, but living costs can vary depending on your lifestyle and location. Here's what international students need to know to manage their money wisely.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Understanding Australian Currency
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Australia uses the <strong>Australian Dollar (AUD)</strong>. It’s the only accepted currency for everyday transactions, so you’ll need to exchange your home currency or open a local bank account soon after arrival.
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Banknotes:</strong> $5, $10, $20, $50, $100 (all are polymer/plastic)</li>
//                             <li><strong>Coins:</strong> $2, $1, 50c, 20c, 10c, 5c — prices are rounded to the nearest five cents when paying.</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Australia is Mostly Cashless
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Australia has become a <strong>cashless society</strong>. Most Australians pay for everything using:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>EFTPOS</strong> (card swiping) with a PIN</li>
//                             <li><strong>Tap and Go</strong> using a debit or credit card</li>
//                             <li><strong>Online transfers</strong> for rent, bills, and tuition via BPay or direct deposit</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             While you can find ATMs in airports and shopping centres, their use is declining, and cash is rarely used for large or even everyday purchases.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             What’s the Cost of Living?
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Living expenses vary depending on your lifestyle, accommodation type, and location. Sydney is one of the more expensive cities in Australia, but with careful planning, it’s possible to budget effectively.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Use tools like the <a href="https://www.studyaustralia.gov.au/english/live/living-costs" target="_blank" className="text-cihe-secondary hover:underline">Study Australia Cost of Living Calculator</a> or <a href="https://www.numbeo.com/cost-of-living/" target="_blank" className="text-cihe-secondary hover:underline">Numbeo</a> to estimate your weekly expenses.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <strong>Typical Weekly Costs for Students (estimates):</strong>
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Rent (shared): AUD $250–$400</li>
//                             <li>Food & groceries: AUD $80–$150</li>
//                             <li>Transport: AUD $30–$60</li>
//                             <li>Mobile & internet: AUD $20–$40</li>
//                             <li>Personal & entertainment: AUD $50–$100</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <strong>Note:</strong> These figures do <strong>not</strong> include tuition fees. Refer to CIHE’s Fees Schedule for course costs.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Setting Up a Bank Account
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             You’ll need an <strong>Australian bank account</strong> to get paid if you work, or to pay bills easily. Major banks include:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Commonwealth Bank of Australia (CBA)</li>
//                             <li>Westpac</li>
//                             <li>National Australia Bank (NAB)</li>
//                             <li>ANZ</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Opening an account is simple and often possible online. You’ll need your passport, visa, and a local address.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Smart Money Tips
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Budget weekly and track your expenses.</li>
//                             <li>Compare mobile and internet plans to find the best deal.</li>
//                             <li>Look out for student discounts on transport, food, and entertainment.</li>
//                             <li>Avoid relying on cash—most payments are digital.</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             With a bit of planning, you can enjoy all that Sydney has to offer while keeping your spending under control.
//                         </p>
//                     </>
//                 ),
//             },
//             {
//                 title: "Public Transport",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Getting Around: Public Transport in Sydney
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Sydney’s public transport system is safe, reliable, and easy to use—perfect for students commuting to campus, exploring the city, or heading to the beach. Here’s how it works and what you’ll need to get started.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             What’s Included in the Network?
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Sydney’s public transport system includes:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Trains</strong> – Fastest way to travel long distances across the city and suburbs.</li>
//                             <li><strong>Buses</strong> – Cover areas not serviced by trains, including late-night routes.</li>
//                             <li><strong>Ferries</strong> – A scenic way to cross the harbour and explore the coastline.</li>
//                             <li><strong>Light Rail (Trams)</strong> – Great for short city trips and areas like the Inner West.</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             All modes of transport are connected and managed by <strong>Transport for NSW</strong>.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Get Your Opal Card
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             The easiest way to pay for transport in Sydney is with an <strong>Opal Card</strong>—a reusable smartcard that you “tap on and tap off” at every station, stop, or ferry wharf.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <strong>Where to get one:</strong>
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Airport train station (right after arrival)</li>
//                             <li>Convenience stores, newsagents, or major train stations</li>
//                             <li>Online at <a href="https://www.opal.com.au" target="_blank" className="text-cihe-secondary hover:underline">opal.com.au</a></li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <strong>How it works:</strong>
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Load your card with credit (minimum $20 recommended)</li>
//                             <li>Tap on when boarding and tap off when leaving</li>
//                             <li>The fare is automatically deducted</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <strong>Tip:</strong> You can also use a contactless debit or credit card (with tap & go) instead of an Opal Card, but student discounts only apply with an Opal Card.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Planning Your Trip
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Use the <a href="https://transportnsw.info/trip" target="_blank" className="text-cihe-secondary hover:underline">NSW Trip Planner</a> to:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Check timetables</li>
//                             <li>See the best routes and connections</li>
//                             <li>Estimate your fare</li>
//                             <li>Get real-time service updates</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Travel Tips for Students
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Travel off-peak</strong> to save money and avoid crowds (after 9am and before 3pm).</li>
//                             <li><strong>Keep your Opal Card topped up</strong>—some train stations and buses don’t accept cash.</li>
//                             <li><strong>Track your balance</strong> on the Opal website or app.</li>
//                             <li><strong>Fines apply</strong> if you forget to tap on or off.</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Public transport makes it easy to explore Sydney—from CIHE’s Parramatta campus to Bondi Beach, the Opera House, and beyond. Once you’re comfortable with the system, the whole city is at your fingertips.
//                         </p>
//                     </>
//                 ),
//             },
//             {
//                 title: "Working in Australia",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Working in Australia: Your Guide to Student Jobs
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Many international students in Australia choose to work part-time while studying. It’s a great way to earn extra money, gain experience, and connect with people. But it’s important to understand your rights and responsibilities before you start.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             🧾 Your Work Rights on a Student Visa
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             If you’re on a <strong>Student Visa (subclass 500)</strong>, you can legally:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Work <strong>up to 48 hours per fortnight</strong> (every two weeks) during study periods</li>
//                             <li>Work <strong>unlimited hours during course breaks or holidays</strong></li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <strong>Reminder:</strong> Your primary focus must be study—your work schedule should never interfere with your classes or academic progress.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Types of Jobs for Students
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Most international students start with <strong>casual or part-time</strong> jobs. These roles are flexible and often pay by the hour.
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Hospitality (cafés, restaurants, bars)</li>
//                             <li>Retail (shops, supermarkets)</li>
//                             <li>Admin or customer service</li>
//                             <li>Tutoring or peer mentoring</li>
//                             <li>Delivery services</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             How to Find a Job
//                         </h4>
//                         <ol className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-decimal pl-6">
//                             <li><strong>Prepare Your Resume (CV)</strong> – Tailor it to Australian standards—short, clear, and focused on your skills.</li>
//                             <li><strong>Search Online</strong> – Try:
//                                 <ul className="list-disc pl-6">
//                                     <li><a href="https://www.seek.com.au" target="_blank" className="text-cihe-secondary hover:underline">seek.com.au</a></li>
//                                     <li><a href="https://www.studentjobboard.com.au" target="_blank" className="text-cihe-secondary hover:underline">studentjobboard.com.au</a></li>
//                                 </ul>
//                             </li>
//                             <li><strong>Walk-in Applications</strong> – Many cafés and shops still hire via printed resumes—especially in hospitality.</li>
//                             <li><strong>Network</strong> – Your classmates, teachers, and community connections can lead to unexpected opportunities.</li>
//                         </ol>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Before You Start Working
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>A <strong>Tax File Number (TFN)</strong> – Apply online via the <a href="https://www.ato.gov.au" target="_blank" className="text-cihe-secondary hover:underline">Australian Taxation Office</a></li>
//                             <li>An <strong>Australian bank account</strong> – Your employer will pay your wages by direct deposit.</li>
//                             <li>Your <strong>passport and visa details</strong> – Employers need proof of your work rights via VEVO.</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Know Your Rights
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             All workers in Australia—regardless of visa—are protected by law. You’re entitled to:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>A written <strong>Offer of Employment</strong> (with hourly rate, conditions, and hours)</li>
//                             <li>The <strong>minimum hourly wage</strong>: <strong>AUD $23.33 (as of 2024)</strong></li>
//                             <li>Superannuation contributions (for eligible workers)</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Your employer must not:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb景色4 list-disc pl-6">
//                             <li>Underpay you</li>
//                             <li>Force you to work over your visa limit</li>
//                             <li>Ask for unpaid trial shifts</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             If anything feels wrong, you can contact the <a href="https://www.fairwork.gov.au" target="_blank" className="text-cihe-secondary hover:underline">Fair Work Ombudsman</a> for free advice and support.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Working while studying can be a rewarding experience—just make sure you stay within your visa conditions and know your rights as a worker in Australia.
//                         </p>
//                     </>
//                 ),
//             },
//             {
//                 title: "Emergency & Healthcare",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Healthcare & Emergencies in Australia: What You Need to Know
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Your health and safety are important, especially when you’re living far from home. Australia offers a high standard of healthcare and emergency services—but knowing how it all works will help you access support quickly when you need it.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Overseas Student Health Cover (OSHC)
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             All international students are <strong>required by law</strong> to have <strong>Overseas Student Health Cover (OSHC)</strong> for the entire duration of their stay in Australia.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             OSHC helps cover the cost of:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Doctor (GP) visits</li>
//                             <li>Hospital treatment</li>
//                             <li>Ambulance services</li>
//                             <li>Prescription medicines</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <a href="https://oshcaustralia.com.au" target="_blank" className="text-cihe-secondary hover:underline">Compare OSHC providers here</a>.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             What to Do in an Emergency
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             In a life-threatening emergency, <strong>dial 000</strong> (free call) for:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Police</li>
//                             <li>Ambulance</li>
//                             <li>Fire services</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             This number is available 24/7 and free from all phones, including mobiles.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Seeing a Doctor in Australia
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Most suburbs in Sydney have <strong>Medical Centres</strong> where you can book an appointment with a <strong>GP (General Practitioner)</strong>. GPs can:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Treat general illnesses</li>
//                             <li>Write prescriptions</li>
//                             <li>Refer you to specialists or hospitals if needed</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             You can search online for local medical centres in your area. Some bulk-bill (which means no out-of-pocket fee if you have OSHC).
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Emergency Care
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             If you need urgent medical help:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Go directly to the <strong>Emergency Department (ED)</strong> at any hospital</li>
//                             <li>Bring your OSHC card or details</li>
//                             <li>Let the staff know you're an international student</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Public hospitals in Sydney are well-equipped and provide high-quality care.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Staying Safe and Supported
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             CIHE cares about your wellbeing. For extra support:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Visit the <strong>Student Support & Safety</strong> page on our website</li>
//                             <li>Speak to our Student Services team for help with health, counselling, or safety concerns</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Smoking & Your Health
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Australia has strict anti-smoking laws:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Smoking is banned in enclosed public spaces (including campuses, transport stops, and many outdoor areas)</li>
//                             <li>Breaking these rules can lead to <strong>fines</strong></li>
//                             <li>Cigarettes cost around <strong>AUD $35–$60 per packet</strong></li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <strong>Thinking of quitting?</strong><br />Call the <strong>NSW Quitline</strong> for free counselling and support.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             By staying informed and prepared, you’ll feel safer and more confident navigating life in Australia—both on and off campus.
//                         </p>
//                     </>
//                 ),
//             },
//             {
//                 title: "Mobile & Internet",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Getting Connected: Mobile & Internet in Australia
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             One of the first things you’ll want to sort out when you arrive in Australia is your mobile phone and internet connection. Whether you're keeping in touch with family, navigating the city, or studying online—being connected is essential. Here's how to get started with mobile and internet services in Australia.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Mobile Phones: SIM Cards & Plans
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Australia has a reliable mobile network with plenty of options to suit short- and long-term stays. Most international students go for <strong>prepaid SIM cards</strong>, which are affordable, flexible, and easy to set up.
//                         </p>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             Major Mobile Providers:
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Telstra</strong> – Largest network coverage</li>
//                             <li><strong>Optus</strong> – Good coverage, student-friendly pricing</li>
//                             <li><strong>Vodafone</strong> – Budget-friendly with international add-ons</li>
//                             <li><strong>Australia Post Mobile</strong> – No lock-in contracts, powered by Optus</li>
//                         </ul>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             Where to Buy a SIM Card:
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>At the airport when you arrive</li>
//                             <li>Convenience stores and petrol stations</li>
//                             <li>Mobile stores in shopping centres</li>
//                         </ul>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             Typical Costs:
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>$10–$20 AUD</strong> for a starter SIM pack</li>
//                             <li><strong>$10–$30 AUD per month</strong> for data/calls/text top-ups</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Plans often include unlimited calls/texts and a set amount of mobile data.
//                         </p>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             <strong>Pro Tip:</strong> Bring an unlocked phone from home so it works with any Australian SIM.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Internet Access in Australia
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             You’ll need internet access for study, streaming, and staying in touch—especially if you live off-campus. Here’s how to get it sorted.
//                         </p>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             Options for Internet at Home:
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Wi-Fi in Managed Student Accommodation or Homestays</strong> – Often included in rent</li>
//                             <li><strong>Private Internet Plans</strong> – Choose from providers like TPG, Telstra, Optus, Aussie Broadband, or iiNet</li>
//                         </ul>
//                         <h5 className="font-montserrat font-medium text-lg text-cihe-navy mt-4 mb-2">
//                             What You’ll Need:
//                         </h5>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>A modem/router (buy or lease from provider)</li>
//                             <li>Connection type: NBN, cable, DSL, or wireless broadband</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Compare internet providers and prices at <a href="https://www.finder.com.au/internet-plans" target="_blank" className="text-cihe-secondary hover:underline">finder.com.au</a>
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Internet on Campus
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Churchill Institute of Higher Education provides <strong>free Wi-Fi on campus</strong> to all enrolled students. You’ll also need internet access at home for:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Logging into Moodle (our online learning platform)</li>
//                             <li>Accessing study materials and assessments</li>
//                             <li>Completing administrative tasks</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Staying Safe Online
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Be cautious of public Wi-Fi—use a VPN when accessing sensitive information</li>
//                             <li>Use strong passwords and update them regularly</li>
//                             <li>Avoid clicking on suspicious links or ads</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             With the right mobile and internet setup, you’ll be ready to navigate, study, and stay in touch with ease. Need help choosing a plan or setting up your SIM when you arrive? Our Student Services team is happy to guide you!
//                         </p>
//                     </>
//                 ),
//             },
//             {
//                 title: "Banking in Australia",
//                 content: (
//                     <>
//                         <h3 className="font-montserrat font-semibold text-2xl text-cihe-navy mb-4">
//                             Banking in Australia: A Quick Guide for International Students
//                         </h3>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Opening a bank account is one of the first things you should do after arriving in Australia. Whether you’re getting paid from a part-time job, paying rent, or shopping online, having an Australian bank account will make managing your money easier, faster, and more secure.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Why You Need an Australian Bank Account
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Employers pay wages <strong>by bank transfer</strong>—cash payments are rare and discouraged</li>
//                             <li>Many services (like rent, phone plans, or bills) require <strong>local payment methods</strong></li>
//                             <li>Avoid high <strong>foreign transaction fees</strong> on your home bank card</li>
//                             <li>It’s safer than carrying cash or relying on currency exchange outlets</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Major Banks in Australia
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Commonwealth Bank of Australia (CBA)</strong></li>
//                             <li><strong>Westpac</strong></li>
//                             <li><strong>National Australia Bank (NAB)</strong></li>
//                             <li><strong>ANZ (Australia and New Zealand Banking Group)</strong></li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Each of these banks offers <strong>student-friendly accounts</strong> with no monthly fees and easy online banking apps. There are also smaller banks and digital-only options if you prefer low-cost alternatives.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             📄 What You Need to Open an Account
//                         </h4>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             You can often open your account <strong>online before arriving</strong> or <strong>in-branch after you arrive</strong>. Here’s what you’ll need:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>Passport</strong></li>
//                             <li><strong>Australian address</strong> (temporary or permanent)</li>
//                             <li><strong>Student visa details</strong></li>
//                             <li><strong>Proof of enrolment</strong> (e.g. CIHE confirmation letter)</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Once your account is open, you’ll receive a <strong>debit card</strong> by mail (or in-branch) that you can use for shopping, online payments, and “tap and go” purchases.
//                         </p>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Everyday Banking in Australia
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>EFTPOS and Tap & Go</strong> are the most common ways to pay—just swipe or tap your card</li>
//                             <li><strong>BPAY and bank transfers</strong> are used for bills, rent, and tuition payments</li>
//                             <li><strong>ATMs</strong> are available but used less often now that Australia is mostly cashless</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Most student accounts include:
//                         </p>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Online and mobile banking</li>
//                             <li>No minimum balance</li>
//                             <li>No account-keeping fees</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Transferring Money from Overseas
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li><strong>International bank transfers</strong> from your home bank</li>
//                             <li><strong>Online money transfer services</strong> like Wise, OFX, or Western Union for better exchange rates and lower fees</li>
//                         </ul>
//                         <h4 className="font-montserrat font-semibold text-xl text-cihe-navy mt-6 mb-2">
//                             Safety First
//                         </h4>
//                         <ul className="font-opensans text-cihe-dark-grey leading-relaxed mb-4 list-disc pl-6">
//                             <li>Set up <strong>two-factor authentication (2FA)</strong> on your mobile banking app</li>
//                             <li>Never share your PIN or banking login</li>
//                             <li>Be cautious of scam calls, texts, or emails pretending to be your bank</li>
//                         </ul>
//                         <p className="font-opensans text-cihe-dark-grey leading-relaxed mb-4">
//                             Opening an Australian bank account is simple and essential for settling into life as a student. If you need help choosing a bank or getting started, our Student Support team is here to help.
//                         </p>
//                     </>
//                 ),
//             },
//         ];

//         return (
//             <div className={`p-8 bg-white`}>
//                 {sections[activeIndex].content}
//             </div>
//         );
//     };

//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Header />
//             <div className="flex flex-1">
//                 <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
//                 <Content activeIndex={activeIndex} />
//             </div>
//         </div>
//     );
// };

// export default Page;