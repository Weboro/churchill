import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const contactData = [
  {
    title: "Visit us",
    description: "Level 1, 16-18 Wentworth Street Parramatta NSW 2150",
    iconUrl: "/assets/navigation.svg",
    redirect: "https://maps.app.goo.gl/8atQGN3b8tx2uPAz6",
  },
  {
    title: "Call us",
    description: "02 8856 2997",
    iconUrl: "/assets/mobile-phone.svg",
    redirect: "tel:02-8856-2997",
  },
  {
    title: "Email Us",
    description: "info@churchill.nsw.edu.au",
    iconUrl: "/assets/email.svg",
    redirect: "mailto:info@churchill.nsw.edu.au",
  },
  {
    title: "lodge a complain",
    description: "Fill a quick form",
    iconUrl: "/assets/complaint.svg",
    redirect:
      "https://forms.zohopublic.com.au/CIHE/form/Grievanceform/formperma/5jf5-XC5SXb47VhUMTlxv30fih-aqYAUbQh8V3lncvQ",
  },
  {
    title: "Connect with us",
    iconUrl: "/assets/connect.svg",
    socialLinks: [
      {
        title: "Facebook",
        icon: <FaFacebook />,
        url: "https://www.facebook.com/CIHEAustralia/",
      },
      {
        title: "LinkedIn",
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/company/churchill-institute-of-higher-education/",
      },
      {
        title: "Instagram",
        icon: <FaSquareInstagram />,
        url: "https://www.instagram.com/ciheaustralia/",
      },
    ],
  },
  {
    title: "Meet in Person",
    description: "Make an Appointment",
    iconUrl: "/assets/event.svg",
    redirect: "https://cihe.zohobookings.com.au/",
  },
  {
    title: "Emergency Contacts",
    description: "Get Help",
    iconUrl: "/assets/sos.svg",
    redirect: "/emergency-contact",
  },
];

// export const contactFaqs = [
//   {
//     title: "What programs and courses does Churchill offer?",
//     description: `<p>  Churchill offers a wide range of undergraduate and postgraduate programs across various fields, including:</p><ul>  <li>Major In Accounting</li>  <li>Major In Information Systems</li>  <li>Major In Hospitality</li>  <li>Major In Management</li></ul>`,
//   },
//   {
//     title: "How do I apply to Churchill?",
//     description: `
//       <p>
//         You can apply to Churchill through our online application portal. Ensure you have all necessary documents, such as transcripts, letters of recommendation, a personal statement, and proof of English proficiency if applicable. Deadlines for applications vary by program, so check the specific requirements for your chosen course.
//       </p>
//     `,
//   },
//   {
//     title: "What are the admission requirements?",
//     description: `
//       <p>
//         Admission requirements vary by program, but generally include:
//       </p>
//       <ul>
//         <li>Completed application form</li>
//         <li>Academic transcripts</li>
//         <li>Letters of recommendation</li>
//         <li>Personal statement or essay</li>
//         <li>English language proficiency test scores (e.g., IELTS, TOEFL) for non-native speakers</li>
//         <li>Standardized test scores (e.g., SAT, GRE) if applicable</li>
//       </ul>
//     `,
//   },
//   {
//     title: "What is the tuition fee structure?",
//     description: `
//       <p>
//         Tuition fees at Churchill vary depending on the program and level of study. Detailed information about tuition fees, as well as additional costs such as accommodation, textbooks, and other expenses, can be found on our website under the tuition fees section.
//       </p>
//     `,
//   },
//   {
//     title: "What student support services does Churchill offer?",
//     description: `
//       <p>
//         Churchill is committed to supporting our students through various services, including:
//       </p>
//       <ul>
//         <li>Academic advising and tutoring</li>
//         <li>Career counseling and job placement assistance</li>
//         <li>Mental health and wellness services</li>
//         <li>Disability support services</li>
//         <li>Student clubs and organizations</li>
//         <li>Orientation programs for new students</li>
//       </ul>
//     `,
//   },
//   {
//     title: "How can I get involved in student life at Churchill?",
//     description: `
//       <p>
//         There are numerous ways to get involved in student life at Churchill, including joining student clubs and organizations, participating in sports teams, attending campus events and workshops, and volunteering in community service projects. Our student affairs office can provide more information on current opportunities.
//       </p>
//     `,
//   },
//   {
//     title: "What are the campus facilities like?",
//     description: `
//       <p>
//         Churchill boasts state-of-the-art facilities, including modern classrooms, well-equipped laboratories, extensive libraries, sports and recreation centers, student lounges, and dining halls. We also have dedicated spaces for art, music, and other extracurricular activities.
//       </p>
//     `,
//   },
//   {
//     title: "How can I contact Churchill for more information?",
//     description: `
//       <p>
//         You can contact Churchill through our official website's contact page, where you'll find email addresses, phone numbers, and office locations for various departments. Additionally, you can visit our admissions office in person or attend one of our virtual information sessions to get your questions answered.
//       </p>
//     `,
//   },
// ];
