/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "./hris_app";

const imagesWebsitePrefix =
  "./sub_company_site";

const imagesBookingPrefix =
  "./booking-site";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";

export default [
  {
    heading: "Thamrin HRIS",
    languages:[
      "Flutter",
      "Golang",
      "Nodejs",
      "OracleDb",
    ],
    videos:[
      {
        video:`${imagesPrefix}/Demo-Hris.mp4`,
        title:'Demo Video',
        subtitle:'Preview App Usage'
      },
      {
        video:`${imagesPrefix}/Demo Blink.mp4`,
        title:'Blinking Detection and Face Recognition Clock-in',
        subtitle:'Preview Blinking Detection for clocking in'
      }
    ],
    urls:[
      {link:'/somethings',label:'PlayStore'},
      {link:'/somethings',label:'AppStore'},
    ],
    description:
      "Mobile Application for the Employees of PT. Thamrin Brothers that handle <b class='text-dark'>payslip, leave request and approval, Clocking in/out with face recognition</b> and many more",
    items: [
      {
        image: `${imagesPrefix}/1.png`,
        title: "HomePage",
        subtitle: "Screen after login",
        route: "page-headers",
        pro: false
      },
      {
        image: `${imagesPrefix}/2.png`,
        title: "Login Screen",
        subtitle: "Login screen",
        route: "page-features",
        pro: false
      },
      {
        image:  `${imagesPrefix}/3.png`,
        title: "Google Map Office Radius",
        subtitle: "Showing and calculating distances of nearest office via gps",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/4.png`,
        title: "Attendances Calendar",
        subtitle: "Showing working shift, clock-in/out",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/5.png`,
        title: "Leaves History",
        subtitle: "List of all the leave taken at that period",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/6.png`,
        title: "Employees Profile",
        subtitle: "List of recorded employee data",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/7.png`,
        title: "News Details",
        subtitle: "After tapping the news showed in homepage",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/8.png`,
        title: "In-App Notif",
        subtitle: "Application messages and notification list",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/9.png`,
        title: "Absences List",
        subtitle: "List of all the problematic attendaces data",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/10.png`,
        title: "Travel Permits",
        subtitle: "Page to request business trip",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/11.png`,
        title: "Mail Server Inbox",
        subtitle: "Mailing server, sending and recieving emails",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/12.png`,
        title: "Mail details",
        subtitle: "Show the contents of a mail",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesPrefix}/13.png`,
        title: "Mailboxes",
        subtitle: "List of Mail server basic functions",
        route: "presentation",
        pro: false
      }
    ]
  },
  {
    heading: "Thamrin Main & sub-sites",
    description: "A main website that connect many PT Thamrin Brothers sub-companies and also some small product e-commmerce sites (Suzuki,Honda,Yamaha)",
    languages:[
      "Mysql",
      "Strapi",
      "Nextjs/React",
    ],
    videos:[
    ],
    urls:[
      {link:'https://thamrin.co.id',label:'Visit here'},
    ],
    items: [
      {
        image: `${imagesWebsitePrefix}/1.png`,
        title: "HomePage",
        subtitle: "Main Site that show list of companies under PT Thamrin Brothers",
        route: "page-headers",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/2.png`,
        title: "Sub-website E-commerce Yamaha",
        subtitle: "Sub-website HomePage",
        route: "page-features",
        pro: false
      },
      {
        image:  `${imagesWebsitePrefix}/3.png`,
        title: "Sub-website Products",
        subtitle: "Showing List of products and basic info",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/4.png`,
        title: "Product Details",
        subtitle: "Showing detailed info of products",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/5.png`,
        title: "Accessories & Other Products",
        subtitle: "List of all the other type of products",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/6.png`,
        title: "Accessories Detals",
        subtitle: "Detailed info of accessories",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/7.png`,
        title: "All sub-Office/Shops",
        subtitle: "Listing the location and other info of dealers/shop of the sub-company",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/8.png`,
        title: "News List",
        subtitle: "List of all the current news",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/9.png`,
        title: "News Details",
        subtitle: "Showing news details after clicking news list",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/10.png`,
        title: "Jobs List",
        subtitle: "Page to request job application needed by the company",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/11.png`,
        title: "Job Description and Terms",
        subtitle: "Detailed info about a job and its T&C",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/12.png`,
        title: "About us",
        subtitle: "About Us Page",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/13.png`,
        title: "Membership Login",
        subtitle: "Login for the company's membership cust",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/14.png`,
        title: "Membership Registration",
        subtitle: "Signup for the company's membership cust",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/15.png`,
        title: "Profile & User Details 1",
        subtitle: "List of User Info",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/16.png`,
        title: "Profile & User Details 2",
        subtitle: "Vouchers/ Coupons List",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/17.png`,
        title: "Cart",
        subtitle: "User's Cart Page",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesWebsitePrefix}/18.png`,
        title: "Purchase Details note",
        subtitle: "Purchase detail note",
        route: "presentation",
        pro: false
      }
    ]
  },
  {
    heading: "Booking Services",
    description:
      "A website that is used to let customers to book an appointment for vehicle's maintenance in advanced, with a unique generated code that used to log the booking data.",
    languages:[
      "Mysql",
      "Strapi",
      "React",
      "Rsuitejs Theme"
    ],
    videos:[
    ],
    urls:[
      {link:'https://booking.thamrin.co.id',label:'Visit here'},
    ],
    items: [
      {
        image: `${imagesBookingPrefix}/1.png`,
        title: "HomePage",
        subtitle: "Main page showing banners and basic services provided",
        route: "page-headers",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/2.png`,
        title: "HomePage 2",
        subtitle: "Main page showing banners and basic services provided",
        route: "page-features",
        pro: false
      },
      {
        image:  `${imagesBookingPrefix}/3.png`,
        title: "HomePage 3",
        subtitle: "Main page showing banners and basic services provided",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/4.png`,
        title: "Booking Page",
        subtitle: "Page to book an appointment (limited by Vehicle's number and google re-Captcha)",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/5.png`,
        title: "Google Captcha",
        subtitle: "Google Captcha after submitting form",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/7.png`,
        title: "Confirmation Popup",
        subtitle: "Confirmation of appointment has been made, with reminder via email and unique code to track it.",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/6.png`,
        title: "Appointment Details 1",
        subtitle: "Finding booking info with unique code or vehicle's number",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/8.png`,
        title: "Appointment Details 2",
        subtitle: "Finding booking info with unique code or vehicle's number",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/9.png`,
        title: "Appointment Details Pdf",
        subtitle: "Popup showing the details and the download button",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/13.png`,
        title: "Admin Page Login",
        subtitle: "Backend Login for administrator",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/10.png`,
        title: "List Navigation",
        subtitle: "Showing List of data save in the server",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/11.png`,
        title: "Booking List",
        subtitle: "Show all the booking info currently saved and their status",
        route: "presentation",
        pro: false
      },
      {
        image: `${imagesBookingPrefix}/12.png`,
        title: "New appointment Popup",
        subtitle: "Manually adding new appointment via admin panel",
        route: "presentation",
        pro: false
      },
    ]
  },
];
