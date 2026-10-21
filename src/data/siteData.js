// ════════════════════════════════════════════════════════════════════
//  ★  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR PORTFOLIO  ★
//  (see HOW_TO_UPDATE.md for a 2-minute guide)
// ════════════════════════════════════════════════════════════════════
import flowerShopImage from "../assets/UI_DESIGN/flowershop.png";
import YogaImage from "../assets/UI_DESIGN/yogaclass.jpg";
import MedicalImage from "../assets/UI_DESIGN/medical.jpg";
import LeisuImage from "../assets/UI_DESIGN/lr.png";
import VolImage from "../assets/UI_DESIGN/volapp.jpg";
import HealixB from "../assets/UI_DESIGN/Healix.jpg";
import BlockMind from "../assets/UI_DESIGN/BlockM.jpg";
import TutionImage from "../assets/web_design/Tution.jpg";
import PortfolioImage from "../assets/web_design/port.jpg";
import HotelImage from "../assets/web_design/hotel.jpg";
import bmPersona from "../assets/UI_DESIGN/blockmind/persona.jpg";
import bmStories from "../assets/UI_DESIGN/blockmind/stories.png";
import bmSitemap from "../assets/UI_DESIGN/blockmind/sitemap.jpg";
import bmUsecase from "../assets/UI_DESIGN/blockmind/usecase.svg";
import bmWireframes from "../assets/UI_DESIGN/blockmind/wireframes.png";
import bmSystem from "../assets/UI_DESIGN/blockmind/design-system.png";
import bmUiScreens from "../assets/UI_DESIGN/blockmind/ui-screens.png";
import volPersona from "../assets/UI_DESIGN/volunteer/persona.png";
import volSitemap from "../assets/UI_DESIGN/volunteer/sitemap.png";
import volWireframes from "../assets/UI_DESIGN/volunteer/wireframes.png";
import volScreens from "../assets/UI_DESIGN/volunteer/ui-screens.png";
import lwWire from "../assets/UI_DESIGN/leisure/wireframes.png";
import lwHifi from "../assets/UI_DESIGN/leisure/hifi-pages.png";
import lwMobile from "../assets/UI_DESIGN/leisure/mobile-view.png";
import echCover from "../assets/UI_DESIGN/echannelling/cover.png";
import echUi from "../assets/UI_DESIGN/echannelling/ui-screens.png";
import echWire from "../assets/UI_DESIGN/echannelling/wireframes.png";
import echSitemap from "../assets/UI_DESIGN/echannelling/sitemap.png";
import echUsecase from "../assets/UI_DESIGN/echannelling/usecase.png";
import echIcons from "../assets/UI_DESIGN/echannelling/icons.png";
import echButtons from "../assets/UI_DESIGN/echannelling/buttons.png";
import echDropdown from "../assets/UI_DESIGN/echannelling/dropdown.png";
import flyerImg from "../assets/GRAPHIC_DESIGN/flyer-designs.png";
import certImg from "../assets/GRAPHIC_DESIGN/certificate-designs.png";
import auraImg from "../assets/GRAPHIC_DESIGN/aura-global.png";
import auraPoster from "../assets/UI_DESIGN/aura/poster.png";
import auraLogos from "../assets/UI_DESIGN/aura/logos.png";
import dulithiPhoto from "../assets/TESTIMONIALS/dulithi-de-silva.jpg";
import mcMidwife from "../assets/UI_DESIGN/mathrucare/midwife-dashboard.png";
import mcFlow from "../assets/UI_DESIGN/mathrucare/user-flow.png";
import mcAdmin from "../assets/UI_DESIGN/mathrucare/admin-dashboard.png";
import mcCardCover from "../assets/UI_DESIGN/mathrucare/card-cover.png";
import mcEnd from "../assets/UI_DESIGN/mathrucare/end-picture.png";
import mcComponents from "../assets/UI_DESIGN/mathrucare/components.png";
import mcCover from "../assets/UI_DESIGN/mathrucare/cover.png";
import mcDash from "../assets/UI_DESIGN/mathrucare/dashboard.png";
import mcWeight from "../assets/UI_DESIGN/mathrucare/weight.png";
import mcMeal from "../assets/UI_DESIGN/mathrucare/meal.png";
import mcMood from "../assets/UI_DESIGN/mathrucare/mood.png";
import mcWell from "../assets/UI_DESIGN/mathrucare/wellbeing.png";
import mcUcMidwife from "../assets/UI_DESIGN/mathrucare/usecase-midwife.png";
import mcUcMother from "../assets/UI_DESIGN/mathrucare/usecase-mother.png";
import mcUcAdmin from "../assets/UI_DESIGN/mathrucare/usecase-admin.png";
import aiIphone from "../assets/AI_CREATIONS/iphone-18.png";
import profilePhoto from "../assets/profile.png";

// ─── 1. ABOUT YOU ───────────────────────────────────────────────────
export const PROFILE = {
  firstName: "NIMESHI",
  lastName: "DILSHARA",
  logo: "NIMNA",
  photo: profilePhoto,
  tagline:
    "I'm Nimeshi Dilshara — a UI/UX Designer & Frontend Developer with 1+ year of experience, crafting intuitive digital products people love to use.",
  aboutTitle: "About Me",
  about: [
    "I'm Nimeshi Dilshara, a passionate UI/UX designer with a strong foundation in frontend development, committed to crafting intuitive, user-centered digital experiences and contributing to business success in the IT industry.",
    "I'm pursuing my B.Sc. (Hons) in Software Engineering at NSBM Green University, where I specialize in UI/UX design, from research and wireframing to high-fidelity prototypes. With over a year of professional experience, I design web and mobile applications that balance aesthetics, functionality and accessibility.",
  ],
  location: "Homagama, Sri Lanka",
  email: "nimeshid24@gmail.com",
  phone: "", // e.g. "+94 71 234 5678"  (leave "" to hide this line)
  address: "208/1, Walpita, Batawala, Padukka", // leave "" to hide this line
  cv: "Nimeshi_Dilshara_CV.pdf", // file inside the /public folder
};

// ─── 2. SOCIAL LINKS  (type: linkedin | github | behance | instagram | facebook) ───
export const SOCIALS = [
  { type: "linkedin", url: "https://www.linkedin.com/in/nimeshi-dilshara-b2508a255/" },
  { type: "github", url: "https://github.com/n-nimna" },
  { type: "behance", url: "https://www.behance.net/nimeshidilshara" },
];

// ─── 3. EDUCATION  (edit / add / delete rows) ───────────────────────
export const EDUCATION = [
  { title: "BSc (Hons) in Software Engineering", place: "NSBM Green University", period: "2022 – 2026", note: "" },
  { title: "G.C.E. Advanced Level Examination", place: "Hanwalla Rajasinghe Central College", period: "2021", note: "" },
  { title: "English Bridging Course", place: "Cinec Campus, Malabe", period: "2022", note: "" },
  { title: "G.C.E. Ordinary Level Examination", place: "Homagama Central College", period: "2017", note: "" },
];

// ─── 4. EXPERIENCE  (leave [] to hide the section) ──────────────────
export const EXPERIENCE = [
  {
    title: "UI/UX Designer",
    place: "Hela Script (Pvt) Ltd — Remote",
    period: "Jan 2025 – Jan 2026",
    text: "Improved design-to-development handoff by bringing a developer's perspective into the design process. Applied design systems, color theory and grid structures, and crafted seamless interfaces through wireframing, prototyping and usability testing.",
  },
  {
    title: "UI/UX Intern",
    place: "Sri Lanka Telecom PLC",
    period: "Jun 2025 – Dec 2025",
    text: "Contributed to 4 UI/UX projects, designing interfaces and improving user experiences. Gained hands-on experience with design systems and consistency across products, and took part in brainstorming sessions and design reviews for internal and customer-facing applications.",
  },
];

// text shown at the right of the "Experience" heading on the About page
export const EXPERIENCE_SUMMARY = "1+ year of experience";

// ─── 4b. CERTIFICATIONS  ([] hides a section) ───
export const CERTIFICATIONS = [
  "Google Foundations of User Experience (UX) Design",
  "Google UX Design Process: Empathize, Define, and Ideate",
  "Google Build Wireframes and Low-Fidelity Prototypes",
  "Google Conduct UX Research and Test Early Concepts",
  "Google Create High-Fidelity Designs & Prototypes in Figma",
  "Google Build Dynamic User Interfaces (UI) for Websites",
  "Google Design a User Experience for Social Good & Prepare for Jobs",
];

// ─── 5. TESTIMONIALS  (leave [] to hide the section) ────────────────
export const TESTIMONIALS = [
  // Add more like this:  { quote: "...", name: "Person Name", role: "Job Title, Company", photo: imported image or "file.jpg" in public/testimonials }
  // role can be one line or a list of lines:  role: ["Creative Designer, ASE NSBM", "Creative Designer, Honda Stafford Motors"]
  {
    quote: "Nimeshi is a talented and creative designer who works with me in the NSBM ASE Association. She has a strong ability to understand design requirements, approach tasks creatively, and adapt to feedback. Her willingness to learn, improve, and find smarter ways to work makes her a valuable team member. I highly recommend her for opportunities that allow her to further develop her creative skills and showcase her potential.",
    name: "Dulithi De Silva",
    role: ["Creative Designer, ASE NSBM", "Creative Designer, Honda Stafford Motors"],
    photo: dulithiPhoto,
  },
];


// ─── 6. SKILLS & TOOLS  (names must match icons in src/components/Icons.jsx) ───
export const SKILLS = {
  Design: ["UI/UX Design", "Prototyping", "User Research", "Interaction Design", "Responsive Design", "Design Systems", "Wireframing"],
  Development: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MySQL", "Python"],
  Tools: ["Figma", "Photoshop", "Illustrator", "GitHub"],
};

// ─── 7. PROJECT CATEGORIES (cards on the Projects page) ─────────────
export const CATEGORIES = [
  { name: "UI/UX Design", slug: "ui-ux", icon: "pen", color: "purple", text: "Web & mobile app interfaces with full case studies", goesTo: "#/case-studies" },
  { name: "Development", slug: "development", icon: "code", color: "blue", text: "Websites and apps built with React and modern tools" },
  { name: "Graphic & Branding", slug: "graphic", icon: "palette", color: "pink", text: "Visual identity, logos, posters and creative graphics" },
  { name: "AI Creations", slug: "ai", icon: "sparkle", color: "green", text: "AI-generated artwork and experimental designs", layout: "gallery" },
];

// ─── 8. LINK HELPERS (use inside `links: [...]`) ────────────────────
const github = (url) => ({ type: "github", label: "GitHub", url });
const live = (url) => ({ type: "live", label: "Live site", url });
const linkedin = (url) => ({ type: "linkedin", label: "LinkedIn", url });
const behance = (url) => ({ type: "behance", label: "Behance", url });

// Featured Work order: add  featuredRank: 1, 2, 3...  to a project to place it (lowest first)
// Featured Work cards on the Home page: false = pictures only (not clickable), true = open the project
export const FEATURED_CLICKABLE = false;

// ─── 9. PROJECTS ────────────────────────────────────────────────────
//  To ADD a project: copy any block below, paste it in the list, change it.
//    category : "UI/UX Design" | "Development" | "Graphic & Branding" | "AI Creations"
//    featured : true  → shows in the "Featured Work" slider on the Home page
//    caseStudy: only for "UI/UX Design" → creates the Case Study page
//               (see the CASE STUDY TEMPLATE at the very bottom of this file)
//  Images: put the file in src/assets/..., then add an import at the top.
export const PROJECTS = [
  {
    id: "ui-mathrucare",
    category: "UI/UX Design",
    title: "MathruCare",
    image: mcCardCover,   // card + Featured Work picture
    cardFocus: "center 0%",   // which part of the picture shows on the Case Studies card
    tags: ["Web App", "Figma"],
    desc: "My final year research project: an MOH-based maternal health web app for personalized nutrition, weight tracking, wellbeing screening and midwife communication.",
    featured: true,
    featuredRank: 1,     // position in Featured Work (1 = first)
    links: [],
    caseStudy: {
      label: "Web App",
      cardTag: "Final Year Research Project",   // the one tag shown on the Case Studies card
      endImage: mcEnd,                          // final picture at the end of the page
      subtitle: "An MOH-based maternal health web app that supports Sri Lankan mothers and Public Health Midwives with personalized nutrition, weight monitoring, wellbeing screening and communication between clinic visits.",
      projectType: "Final Year Research Project",
      duration: "6 Months",
      sections: [
        {
          title: "Project Overview",
          text: [
            "MathruCare is my final year research project: an AI-assisted web application, built around Sri Lanka's Medical Officer of Health (MOH) divisions, that supports pregnant women between their monthly clinic visits. It brings personalized meal plans, gestational weight tracking with prediction, weekly wellbeing screening and direct contact with their Public Health Midwife (PHM) into one place.",
            "The system has three interfaces: Mother, Midwife and Administrator. I designed and developed all three myself, from the research and Figma prototypes to the working web application, and evaluated it with the people who would use it. The study took place in the Homagama MOH division and followed a Design Science Research approach over six months.",
          ],
        },
        {
          title: "Problem",
          text: [
            "Antenatal care in Sri Lanka runs through monthly in-person clinics. Between visits, mothers get very little professional support, so many turn to WhatsApp groups, Facebook, Google and YouTube, which are not clinically checked or monitored. Midwives, in turn, have no digital way to track and talk to the mothers in their area.",
            "I asked: how might we support pregnant women between clinic visits with personal nutrition advice, health monitoring and wellbeing support, led by their own midwife?",
          ],
          pointsTitle: "What the research found (40 mothers and 20 midwives, Homagama MOH)",
          points: [
            "72.5% of mothers found it hard to keep a healthy pregnancy diet",
            "34 of 40 mothers had a meal plan, but 29 struggled to follow it",
            "23 mothers got nutrition information from WhatsApp groups, and only 6 from their midwife",
            "70% felt stressed all or some of the time",
            "Midwives had no digital tool to monitor, alert and message the mothers in their own MOH area",
          ],
        },
        {
          title: "Research Process",
          text: ["I followed a Design Science Research approach: understand the problem in the field, define requirements, design and prototype, then evaluate with real users."],
          screens: [
            {
              title: "1. Understand the users",
              text: "I surveyed 60 people in the Homagama MOH division: 40 pregnant mothers and 20 Public Health Midwives, using separate questionnaires for each group.",
              points: ["Mothers: diet, stress, pregnancy challenges, digital access and the support they would like", "Midwives: workload, communication, how they check wellbeing and their digital confidence"],
            },
            {
              title: "2. Define the requirements",
              text: "The findings became requirements for three user roles, each with its own interface.",
              points: [
                { b: "Mother — ", t: "the main user, who needs simple, supportive tools between visits." },
                { b: "Midwife — ", t: "monitors the mothers assigned to her area and sends announcements." },
                { b: "Administrator — ", t: "verifies midwives, manages MOH divisions and the meal database." },
              ],
            },
            {
              title: "3. Design and develop",
              text: "I turned the requirements into use cases, designed the Mother, Midwife and Administrator interfaces in Figma, and built the working web application myself.",
            },
            {
              title: "4. Evaluate",
              text: "I tested the system with 10 pregnant women and 5 midwives at the Homagama MOH clinic, using the System Usability Scale and open feedback.",
            },
          ],
        },
        {
          title: "Key Design",
          points: [
            { b: "Simple and supportive, not clinical — ", t: "the Mother interface complements clinical advice instead of replacing it, so it stays calm and easy to follow." },
            { b: "One home for everything — ", t: "a left navigation (Dashboard, Weight Tracker, Meal Planner, Mood Tracking, Announcements and Profile) keeps every tool one click away." },
            { b: "Her midwife is always visible — ", t: "a card with her midwife's name and phone number sits in the sidebar, and the midwife's announcements appear on the dashboard." },
            { b: "Color shows where she is — ", t: "each section has its own soft color wash: green for the dashboard, lilac for weight, yellow for meals and mint for mood." },
            { b: "Safety is built in — ", t: "an Emergency button stays in the header on every screen, and wellbeing results are labelled as screening support, never as a diagnosis." },
            { b: "Guidance, not just numbers — ", t: "the weight tracker shows her target range for her pregnancy week, a BMI band and a predicted result with a confidence indicator, plus a plain note to consult her midwife." },
            { b: "Trimester-aware meals — ", t: "meals are planned by time of day with calories and 'or' alternatives, and each trimester's key nutrients are explained." },
            { b: "Gentle check-ins — ", t: "the weekly wellbeing check is a 60-second, ten-question pause, one question at a time, with a progress bar." },
          ],
        },
        {
          title: "Key Screens",
          text: ["The screens below show the Mother, Midwife and Administrator interfaces."],
          tocSub: true,
          screens: [
            {
              title: "Home Dashboard",
              text: "A warm welcome and her pregnancy progress, with her MOH division, trimester and current weight at a glance. Three banners lead to the most common tasks: track weight, view the nutrition plan and start a wellbeing check. Recent weight history and her midwife's announcements sit below.",
              image: mcDash,
            },
            {
              title: "Weight Tracker",
              text: "Shows her target gain range for her pregnancy week against BMI bands, her pre-pregnancy and current details, and a monthly weight update form. A prediction result with a confidence indicator tells her in plain language when to consult her midwife.",
              image: mcWeight,
            },
            {
              title: "Meal Planner",
              text: "Daily nutritional targets (calories, carbohydrates, protein and fats) with a short note on what matters in her trimester, followed by meals for breakfast, morning, lunch, afternoon and dinner, each with calories and an alternative. A “Why this meal?” link under each option explains the suggestion.",
              image: mcMeal,
            },
            {
              title: "Mood Tracking",
              text: "A quiet weekly check-in with one question at a time, a progress bar and Back and Reset controls. A mood history shows past scores with clear status labels.",
              image: mcMood,
            },
            {
              title: "Wellbeing Support",
              text: "After the check-in she sees her wellbeing score and status, with a way to retake the questions, and a set of calming music, supporting videos and relaxing articles chosen for her result.",
              image: mcWell,
            },
            {
              title: "Midwife Dashboard",
              text: "A single overview of the mothers in her MOH division: totals for mothers, diabetic mothers, active alerts and new mothers, a trimester breakdown, and recent emotional wellbeing alerts with a risk tag and score. Shortcuts take her straight to sending an announcement or managing her mother list.",
              image: mcMidwife,
            },
            {
              title: "Admin Dashboard",
              text: "Summary cards show the total midwives, mothers and MOH divisions. Pending midwife registrations appear in a table with Verify and Reject actions, and a list of active midwives can be sorted, filtered and searched.",
              image: mcAdmin,
            },
          ],
        },
        {
          title: "Components",
          text: ["A small set of reusable components keeps the Mother, Midwife and Administrator interfaces consistent and quick to build."],
          points: [
            { b: "Role tabs — ", t: "Mother, Midwife and Admin tabs on the sign-in screen change the form to match each role, with a green highlight on the active tab." },
            { b: "Form fields — ", t: "registration number, email and password fields with a Hide/Show toggle, a 'Forget your password' link and a clear green Sign in button." },
            { b: "MOH division dropdown — ", t: "default, focused and open states, with a list of divisions such as Homagama, Pitipana and Habarakada." },
            { b: "Navigation items — ", t: "side navigation entries such as Dashboard have a default state and a soft green active state." },
            { b: "Stat cards and toggles — ", t: "compact cards for numbers such as weekly mood check-ins, and an on/off language toggle." },
            { b: "Dietary preference selector — ", t: "a small dropdown for choosing Vegetarian or Non-Vegetarian when planning meals." },
            { b: "Icons and logo — ", t: "a consistent line icon set (location, midwife, mood, security and logs) and the MathruCare logo in two lockups." },
          ],
          images: [{ src: mcComponents, caption: "MathruCare components" }],
        },
        {
          title: "Use Case Diagram",
          text: ["One use case diagram for each user role shows what the system must do for them. Together they cover the Mother, Midwife and Administrator interfaces."],
          imageColumns: 3,
          images: [
            { src: mcUcMother, caption: "Mother" },
            { src: mcUcMidwife, caption: "Midwife" },
            { src: mcUcAdmin, caption: "Administrator" },
          ],
        },
        {
          title: "User Flow",
          text: [
            "The user flow follows each role from sign in to log out. Everyone starts on the Sign In page and selects a role: Mother, Midwife or Admin. Each role then reaches its own dashboard and the tools it needs, and every role ends at Log out.",
          ],
          images: [{ src: mcFlow, caption: "MathruCare user flow: Mother, Midwife and Admin (click the diagram to enlarge)" }],
        },
        // ── To add an interactive prototype later, copy this section back in, above Usability Testing: ──
        // { title: "Interactive Prototype", text: ["Explore the interactive prototype of MathruCare below."], embed: "PASTE YOUR FIGMA PROTOTYPE LINK" },
        {
          title: "Usability Testing",
          text: [
            "I tested the system with 10 pregnant women and 5 Public Health Midwives at the Homagama MOH clinic. After using the system, each participant completed the ten-item System Usability Scale (SUS) questionnaire and gave open feedback.",
            "Usability testing results: the average SUS score was 81.67 overall, 84.50 for the midwives and 80.25 for the mothers, a favorable result showing that both groups found the system easy to use. Qualitatively, most participants reported no significant problems. One mother scored much lower (47.5) and said she needed more time to understand the system, and several suggested short introductory guidance before first use. The feedback showed that the interface works well day to day and pointed to one clear improvement: a gentler first-time introduction.",
          ],
        },
        {
          title: "Key Learnings",
          text: [
            "Mothers want simplicity and support, and midwives want a clear overview. In future work, I would add first-time onboarding guidance, Tamil language support, offline access for midwives with unreliable internet, and a larger pilot in other areas. This project reinforced that a design process rooted in the voices of mothers and midwives can turn a complex challenge like continuous maternal care into an approachable digital experience.",
          ],
        },
      ],
    },
  },
  {
    id: "ui-echannelling",
    category: "UI/UX Design",
    title: "eChannelling Doctor App",
    image: echCover,
    tags: ["Mobile App", "Figma"],
    desc: "A mobile app that brings a doctor's whole day into one place: appointments, sessions, teleconsultations, ePrescriptions, patient records and income.",
    featured: true,
    links: [],
    caseStudy: {
      label: "Mobile App",
      cardTag: "Healthcare Mobile App",
      subtitle: "A mobile app for Sri Lankan doctors to manage appointments, sessions, teleconsultations, ePrescriptions, patient health records and income in one place.",
      projectType: "Mobile App Design",
      // duration: "",   // add your duration here, e.g. "3 months" (hidden while empty)
      sections: [
        {
          title: "Key Screen",
          text: ["eChannelling Doctor App brings a doctor's working day into one mobile app: registration and verification, appointments, session scheduling, teleconsultations, ePrescriptions, patient health records, notifications and income reports."],
          images: [{ src: echUi, caption: "High-fidelity screens — eChannelling Doctor App" }],
        },
        {
          title: "The Challenge",
          text: [
            "Doctors who consult through a telemedicine platform manage many things at once: appointments and sessions across hospitals and online, patient records, prescriptions, reminders and earnings. When these live in separate tools, time is lost switching between them and important details are easy to miss.",
            "The challenge was to design one mobile app for Sri Lanka's eChannelling platform that fits a doctor's busy day: quick to scan between patients, safe to use with sensitive medical information, and dependable for both in-person and online consultations.",
          ],
          pointsTitle: "Project requirements",
          points: [
            "Self-registration and verification",
            "Profile management",
            "Appointment management (current, upcoming and past)",
            "Session management (scheduling, cancel and transfer)",
            "Income view (normal and teleconsultations)",
            "Teleconsultations (video and audio, chat and file sharing)",
            "ePrescription and favorite drug list",
            "Patient Health Record (PHR) access",
            "Notifications and reminders",
          ],
        },
        {
          title: "The Solution",
          text: [
            "I organised the requirements into eight clear modules. Five of them sit in a simple bottom navigation — Home, Appointment, Session, Teleconsult and Income — while Profile and Notifications are one tap away from the Home header. A doctor can start the day on Home, see what is ahead, and reach any task in a few taps.",
          ],
          pointsTitle: "What the app does",
          points: [
            { b: "Self-registration & verification — ", t: "doctors create an account with their medical specialty, primary hospital and SLMC registration number, add a photo, and recover access through a verification code and a new password." },
            { b: "Home dashboard — ", t: "a greeting and today's overview of appointments, sessions and teleconsultations, quick actions (create prescription, add session, reminders) and tabs for today's schedule, active sessions and recent payments." },
            { b: "Appointment management — ", t: "Current, Upcoming and Past tabs showing the patient, consultation type, time and status at a glance." },
            { b: "Session management — ", t: "a filterable session list with add, edit, cancel and transfer, plus a schedule manager with week and day views, working days and time slots." },
            { b: "Teleconsultations — ", t: "upcoming consultations with a one-tap start, audio and video call screens with call controls, and chat and file sharing during the consultation." },
            { b: "ePrescription & favorite drugs — ", t: "search an active appointment, add medicines with dosage, frequency and instructions, and save frequently used drugs as favorites." },
            { b: "Patient Health Record (PHR) — ", t: "Overview and Medications tabs with critical allergies, latest vital signs and recent lab results." },
            { b: "Income — ", t: "income summary cards for normal and teleconsultation earnings, income trends, a searchable transactions list and CSV or PDF export." },
            { b: "Notifications & reminders — ", t: "alerts grouped by day with mark-as-read, and prioritised reminders with direct actions such as Start Session and Schedule Follow Up." },
            { b: "Profile & security — ", t: "profile and edit profile, password change, biometric login, theme, help centre and a confirmed logout." },
          ],
        },
        {
          title: "Strategy & Approach",
          text: ["I treated this as a workflow design problem: understand what a doctor needs to do in a day, group those tasks into modules, map the flows, and then design from low to high fidelity."],
          screens: [
            {
              title: "1. Define the scope",
              text: "Turned the requirement list into eight modules so every feature has a clear home.",
              points: ["Authentication, Home, Appointments, Sessions, Teleconsultation, Profile, Notifications and Income", "Matched each requirement to one module, so nothing was missing or duplicated", "Prioritised the actions doctors repeat most: viewing today's schedule, starting a session and writing a prescription"],
              note: "Module list and requirement-to-module map.",
            },
            {
              title: "2. Site Map",
              text: "The site map organises the app into eight numbered modules. After the authentication flow (onboarding, sign up, sign in and forgot password), doctors land on a Home menu with a dashboard overview, quick actions, upcoming appointments and a notification overview. From there they branch into Appointments, Sessions, Teleconsultation, Profile, Notifications and Income.",
              image: echSitemap,
              note: "Site map.",
            },
            {
              title: "3. Use Case Diagram",
              text: "The use case diagram shows what the doctor, the primary actor, can do in the app. It captures ten main use cases that together cover a doctor's day, from signing in to signing out.",
              points: [
                { b: "Sign In / Account Access — ", t: "register, sign in and recover access to the account." },
                { b: "View Dashboard and Notifications — ", t: "see today's overview and stay up to date with alerts." },
                { b: "Manage Appointments — ", t: "view current, upcoming and past appointments and their details." },
                { b: "Manage Schedule and Availability — ", t: "set working days, locations and time slots." },
                { b: "Review Patient Records and Vital Signs — ", t: "open the patient health record, allergies, vitals and lab results." },
                { b: "Manage Consultation Sessions — ", t: "add, edit, cancel and transfer sessions." },
                { b: "Conduct Teleconsultations — ", t: "run audio and video consultations." },
                { b: "Manage Profile and Security — ", t: "edit the profile and control password and sign-in settings." },
                { b: "View Income and Transactions — ", t: "track earnings and review payments." },
                { b: "Sign Out — ", t: "end the session securely." },
              ],
              image: echUsecase,
              note: "Use case diagram.",
            },
            {
              title: "4. Wireframes",
              text: "Low-fidelity wireframes covered every module, more than 40 screens in total, including pop-ups, dropdown filters and confirmation dialogs. They were used to check layout, hierarchy and flow before any visual styling.",
              image: echWire,
              note: "Low-fidelity wireframes.",
            },
            {
              title: "5. Visual design & prototype",
              text: "The high-fidelity screens apply the design system to the wireframes and add the states a real clinic day needs: open dropdowns, modals, overlays, validation hints and confirmation messages.",
              points: ["Built the design system first: color, typography, icons and components", "Designed more than 40 high-fidelity screens in Figma", "Linked the screens into a clickable prototype"],
              note: "Design system, high-fidelity UI and prototype.",
            },
          ],
        },
        {
          title: "Design System",
          text: ["A compact design system keeps a large app consistent and fast to design, and makes developer handoff straightforward. It defines color, typography and icons."],
          swatchTitle: "Color System",
          swatchGroups: [
            { title: "Primary", items: [{ hex: "#1D04BF" }, { hex: "#484CE7" }] },
            { title: "Content colors", items: [{ hex: "#030213" }, { hex: "#555B6C" }, { hex: "#FAF9FF" }, { hex: "#04B905" }, { hex: "#D3F263" }, { hex: "#CDDCF9" }, { hex: "#1C69FF" }, { hex: "#DD1414" }, { hex: "#EDEBFA" }, { hex: "#E6F8E6" }, { hex: "#6150D3" }, { hex: "#FCE8E8" }, { hex: "#9A9AA1" }, { hex: "#E7A115" }, { hex: "#FCF3E3" }, { hex: "#9A04BF" }, { hex: "#FBFAFE" }] },
            { title: "Background colors", items: [{ hex: "#FFFFFF" }, { hex: "#F9FAFB" }] },
            { title: "Border colors", items: [{ hex: "#4A5565" }, { hex: "#484CE7" }] },
            { title: "Action colors", items: [{ hex: "#1D04BF" }, { hex: "#4027E5" }, { hex: "#19049F" }, { hex: "#CDDCF9" }] },
          ],
          typeScale: {
            title: "Typography",
            family: "Roboto",
            rows: [
              ["H1", "24px", 700, "Bold"],
              ["H2", "20px", 700, "Bold"],
              ["H2", "20px", 600, "Semibold"],
              ["H3", "16px", 600, "Semibold"],
              ["H4", "14px", 600, "Semibold"],
              ["B1-m", "16px", 500, "Medium"],
              ["B1-r", "16px", 400, "Regular"],
              ["B2-m", "14px", 500, "Medium"],
              ["B2-r", "14px", 400, "Regular"],
              ["B3-m", "12px", 500, "Medium"],
              ["B3-r", "12px", 400, "Regular"],
              ["Btn1", "16px", 600, "Semibold"],
              ["Btn2", "12px", 600, "Semibold"],
            ],
          },
          images: [{ src: echIcons, caption: "Icon set", width: 302 }],
        },
        {
          title: "Components",
          text: ["Every interactive element is a reusable component with defined states, so screens are built from the same parts and behave the same way everywhere."],
          points: [
            { b: "Buttons — ", t: "primary, secondary and icon buttons, each with active, hover, pressed and disabled states." },
            { b: "Dropdowns — ", t: "a base dropdown (default, hover, active), a dropdown component with option lists and a disabled state, and a filter dropdown with a count badge." },
            { b: "Status badges & cards — ", t: "appointment and session cards with clear status labels such as Confirmed, Pending and Paid." },
            { b: "Segmented tabs & toggles — ", t: "Current, Upcoming and Past tabs, week and day views, and toggles for working days and notification settings." },
            { b: "Time-slot grid — ", t: "a three-column grid that shows available, booked and selected slots at a glance." },
            { b: "Modals & bottom sheets — ", t: "Edit Session, Schedule Edit and logout confirmation keep destructive or detailed actions in context." },
            { b: "Forms with inline help — ", t: "password rules shown as a live checklist and a four-digit verification code input." },
          ],
          imageColumns: 2,   // show the images in two columns
          images: [
            { src: echButtons, caption: "Button components", width: 362 },
            { src: echDropdown, caption: "Dropdown components", width: 418 },
          ],
        },
        {
          title: "Impact & Results",
          text: [
            "The eChannelling Doctor App brings a doctor's whole working day into one consistent, easy-to-scan mobile experience, replacing scattered tools with a single app built for busy clinical schedules.",
            "Key outcomes include:",
          ],
          points: [
            "Faster everyday workflows, with today's overview, quick actions and one-tap session start placing the most frequent tasks within a few taps of the Home screen",
            "Complete coverage of the clinical workflow in one app: registration and verification, appointments, session scheduling, teleconsultations, ePrescriptions, patient health records, notifications and income reports",
            "Safer, clearer handling of patient and practice information through structured health records, prioritised reminders and confirmation dialogs for sensitive actions such as logging out",
            "Clear income visibility, with reports and trends for normal and teleconsultation earnings and a searchable, exportable transactions list",
            "A consistent, scalable design system of color, Roboto type scale, icons, buttons and dropdowns that speeds up future screens and makes developer handoff straightforward",
          ],
        },
      ],
    },
  },
  {
    id: "ui-leisure",
    category: "UI/UX Design",
    title: "Leisure World Website Redesign",
    image: LeisuImage,
    tags: ["Web", "Redesign"],
    desc: "A fresh redesign of the Leisure World website for a clearer, more engaging experience.",
    featured: false,
    links: [
      behance("https://www.behance.net/gallery/212455075/LeisureWorld-Redesign-Website"),
    ],
    caseStudy: {
      label: "Web",
      cardTag: "Redesign Web and Mobile Project",
      subtitle: "Leisure World, Sri Lanka's premier theme park, transformed its website to deliver a user-friendly and visually vibrant experience.",
      projectType: "Website Redesign",
      duration: "2 weeks",
      sections: [
        {
          title: "About Project",
          text: [
            "Leisure World, Sri Lanka's premier theme park, transformed its website to deliver a user-friendly and visually vibrant experience. The redesign focused on a streamlined booking system, engaging visuals of attractions, easy navigation, and a responsive layout to ensure accessibility across devices.",
            "Key sections, including attractions, ticketing, and events, were revamped to make information easily accessible and the planning experience enjoyable. By balancing aesthetics with functionality, the new site invites visitors to explore Leisure World's offerings and prepare for unforgettable adventures with ease.",
          ],
        },
        {
          title: "Key Features",
          points: [
            "Streamlined Booking System",
            "Intuitive Navigation",
            "Attractions and Facilities Information",
            "Event and Promotions Section",
          ],
        },
        {
          title: "Colors & Typography",
          swatches: [
            { hex: "#0D1A46", name: "" },
            { hex: "#FE723F", name: "" },
            { hex: "#FFFFFF", name: "" },
            { hex: "#031224", name: "" },
          ],
          typeface: {
            name: "Montserrat",
            fonts: [
              { name: "Montserrat", family: "'Montserrat', sans-serif", weight: 500 },
              { name: "Baloo", family: "'Baloo 2', sans-serif", weight: 800 },
            ],
            sizes: ["70pt", "64pt", "40pt", "32pt", "30pt", "16pt", "22pt"],
            weights: ["Light", "Medium", "Bold", "SemiBold", "Regular"],
          },
        },
        {
          title: "Low Fidelity Wireframe",
          images: [{ src: lwWire, caption: "Low fidelity wireframes" }],
        },
        {
          title: "All Pages – High Fidelity Design",
          images: [{ src: lwHifi, caption: "All pages — high fidelity design" }],
        },
        {
          title: "Mobile View Design",
          images: [{ src: lwMobile, caption: "Mobile view design" }],
        },
      ],
    },
  },
  {
    id: "ui-volunteer",
    category: "UI/UX Design",
    title: "Volunteer Social App Design",
    image: VolImage,
    tags: ["Mobile App", "Figma"],
    desc: "A volunteer-focused social app that connects people with causes and community events.",
    featured: false,
    links: [
      linkedin("https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uiux-mobileapp-volunteerplatform-activity-7283451119257690113-mZs-?utm_source=share&utm_medium=member_desktop"),
      behance("https://www.behance.net/gallery/216473633/Volunteer-Focuced-Social-App"),
    ],
    caseStudy: {
      label: "Mobile App",
      cardTag: "Volunteer Social App",
      subtitle: "A volunteer-focused social app that connects people with causes and community events.",
      projectType: "Mobile App Design Project",
      duration: "4 weeks",
      sections: [
        {
          title: "The Challenge",
          text: [
            "Volunteering depends on two things: finding the right opportunity, and staying motivated after the first one. Many volunteer platforms struggle with both. Projects are buried in cluttered listings, task guidelines are vague, and contributions go unrecognised, so well-meaning people drop off before volunteering becomes a habit.",
            "Bondify was designed for students and young volunteers like Sophia, who want to make a meaningful impact without spending hours searching for opportunities. The guiding question was: how might we make volunteering easy to start, clear to join and rewarding to continue?",
          ],
          pointsTitle: "Design goals",
          points: [
            "Make discovering relevant projects fast and uncluttered",
            "Give volunteers clear information before they commit",
            "Build trust between volunteers and organisers",
            "Recognise and reward contributions so people keep coming back",
          ],
        },
        {
          title: "The Solution",
          text: [
            "Bondify is a volunteer-focused social app organised around five areas — Home, Activities, Bpoints, Friends and Profile — in a bottom navigation bar with Bpoints as the raised centre action.",
            "Volunteers discover colour-coded project categories on Home, read clear activity details (date, time, location and what to know) and apply in one tap. They track ongoing and completed work, earn Bpoints that feed a leaderboard and badges, and stay connected through friends, chat and invites. A verified sign-up flow with NID scan and optional facial recognition keeps the community trustworthy.",
          ],
        },
        {
          title: "Design Approach",
          text: ["I followed a user-centered process, moving from understanding the volunteer to a polished, high-fidelity interface."],
          screens: [
            {
              title: "1. Understand the Users",
              text: "Defined who the app is for and what stops them from volunteering.",
              points: [
                "Created a primary persona, Sophia Patel: a 21-year-old university student with advanced tech skills",
                "Captured her needs: easy discovery by interest, transparent tracking of activities and Bpoints, and an engaging community",
                "Captured her frustrations: cluttered interfaces, unclear task guidelines and a lack of recognition",
              ],
              note: "Persona, needs and frustrations.",
            },
            {
              title: "2. Structure the Experience",
              text: "Planned how people move through the app before designing any screen.",
              points: [
                "Grouped features into five areas: Home, Activities, Bpoints, Friends and Profile",
                "Mapped onboarding, log in and registration into the main app",
                "Planned secondary paths: ongoing and completed activities, points and leaderboard, chat and invites, profile and in-app settings",
              ],
              note: "Site map and feature structure.",
            },
            {
              title: "3. Wireframe the Layouts",
              text: "Explored layout and hierarchy before adding visual style.",
              points: [
                "Sketched 15 low-fidelity screens: splash, welcome, account creation, log in, home, activities, activity detail, Bpoints, leaderboard, friends, chat, invite friends and profile",
                "Tested the bottom navigation and the card-based information hierarchy",
              ],
              note: "Low-fidelity wireframes.",
            },
            {
              title: "4. Visual Design & Prototype",
              text: "Turned the structure into a friendly, consistent visual identity.",
              points: [
                "Chose a purple and green color palette and the Poppins typeface",
                "Designed 20 high-fidelity screens in Figma, adding trust and account flows the wireframes did not cover",
                "Applied real volunteering photography, rounded cards and a dark bottom navigation bar across every screen",
              ],
              note: "Color palette, typography, high-fidelity UI and prototype.",
            },
          ],
        },
        {
          title: "Key Decision Making",
          points: [
            { b: "Bpoints at the centre of the navigation — ", t: "the raised centre tab makes rewards the heart of the app and a constant reminder of progress." },
            { b: "Verified sign-up — ", t: "account creation is split into two steps (details, then an NID scan front and back), with optional facial recognition for quick log in. A step indicator keeps the longer flow manageable and builds trust between volunteers and organisers." },
            { b: "Social sign-in next to email — ", t: "Google, Facebook and Microsoft options reduce friction for people who just want to get started." },
            { b: "Clear details before commitment — ", t: "activity pages lead with date, time and location, then 'what you need to know' and an About section, with a fixed 'Apply to Volunteer' button. This answers the 'unclear guidelines' frustration directly." },
            { b: "Ongoing and Completed tabs — ", t: "a segmented control separates what is next from what is done, keeping the activity list easy to scan." },
            { b: "Recognition through gamification — ", t: "a podium leaderboard, colour-coded points history and badges make contributions visible and celebratory." },
          ],
        },
        {
          title: "Key Features",
          points: [
            { b: "Home — ", t: "a personal greeting with search, favourites and notifications; a featured project banner with a call to action; colour-coded category chips; 'Explore by You' recommendations; and friend suggestions." },
            { b: "Activities — ", t: "Ongoing and Completed tabs with photo cards showing the organiser and participants, plus detailed pages with date, time, location, requirements, an About section and an Apply to Volunteer button." },
            { b: "Bpoints — ", t: "a points balance, an achievement highlight, a colour-coded points history and a leaderboard with a top-three podium." },
            { b: "Friends — ", t: "a friends list with avatars, one-to-one chat, and an invite screen with search and an alphabetical contact list with checkboxes." },
            { b: "Profile — ", t: "points and rank summary, Main, Events and Badges tabs, upcoming and participated events, a badge collection and settings (in-app settings, volunteer history, about, privacy policy, help centre and log out)." },
            { b: "Account & trust — ", t: "email or social sign-up, NID scan, facial recognition and password recovery." },
          ],
        },
        {
          title: "User Personas",
          text: ["User personas are archetypal users whose goals and characteristics represent the needs of a larger group. Sophia represents the university students and young volunteers Bondify is designed for: motivated, digitally confident, and short on time."],
          images: [{ src: volPersona, caption: "Primary persona — Sophia Patel" }],
        },
        {
          title: "Site Map",
          text: ["The site map shows how users navigate the app and how screens connect. After onboarding and log in or registration, five main areas — Home, Activities, Bpoints, Friends and Profile — keep every feature within one or two taps. Profile also leads to in-app settings: history, about, privacy policy, help centre and log out."],
          images: [{ src: volSitemap, caption: "Bondify site map" }],
        },
        {
          title: "Wireframes",
          text: ["A wireframe is a layout of a screen that shows which interface elements will exist on key pages. These 15 low-fidelity wireframes defined the structure of onboarding, home, activities, Bpoints, friends and profile, and were used to test layout, hierarchy and navigation before visual styling."],
          images: [{ src: volWireframes, caption: "Low-fidelity wireframes" }],
        },
        {
          title: "High Fidelity Design",
          text: ["The final design improves the product's aesthetic appeal and usability through suitable imagery, typography, spacing, layout and color. It expands the 15 wireframes into 20 polished screens."],
          pointsTitle: "From wireframe to final UI",
          points: [
            "Placeholder boxes were replaced with real volunteering photography that makes projects feel human and inspiring",
            "Colour-coded category chips and cards make projects faster to scan",
            "The podium leaderboard and badge artwork make rewards feel celebratory",
            "New screens were added where trust and account management needed them: NID scan, facial recognition, forgot password and settings",
            "Purple headers, rounded cards and a dark bottom navigation bar keep every screen consistent",
          ],
          images: [{ src: volScreens, caption: "High-fidelity UI screens" }],
        },
        {
          title: "Color Palette",
          text: ["A vibrant purple builds the brand, supported by soft lavender and neutral tones for calm, readable surfaces, a dark tone for navigation and text, and a fresh green accent for highlights."],
          swatches: [
            { hex: "#6E59ED", name: "Primary" },
            { hex: "#B2A7F9", name: "Soft Purple" },
            { hex: "#F5F5F5", name: "Background" },
            { hex: "#23222B", name: "Dark" },
            { hex: "#5CE761", name: "Accent" },
          ],
        },
        {
          title: "Typography",
          text: ["Poppins was chosen for its clean, friendly geometric shapes and excellent readability on small mobile screens. Four sizes create a clear hierarchy from headlines to captions, and weights from Light to Bold add emphasis."],
          typeface: { name: "Poppins", sizes: ["45pt", "23pt", "12pt", "9pt"], weights: ["Light", "Medium", "Bold", "SemiBold"] },
        },
        // ── Add an interactive prototype here when you have the Figma link: ──
        // { title: "Interactive Prototype", text: ["Click through the prototype below."], embed: "PASTE YOUR FIGMA PROTOTYPE LINK" },
        {
          title: "Future Enhancements",
          points: [
            "Push notifications and reminders for upcoming volunteer events",
            "Verified organisations and volunteer certificates for completed activities",
            "Map-based discovery to find projects near the user",
            "Team challenges and seasonal Bpoints campaigns to keep the community active",
          ],
        },
        {
          title: "Key Learnings",
          text: [
            "Bondify taught me that trust and motivation are product features, not afterthoughts. Recognition, progress and social connection matter as much as a clean interface. Wireframing 15 screens first let me test navigation early, but identity verification and account recovery only appeared at the high-fidelity stage, so next time I would plan trust and safety flows during wireframing.",
          ],
        },
      ],
    },
  },
  {
    id: "ui-blockmind",
    category: "UI/UX Design",
    title: "Social Media Blocking App",
    image: BlockMind,
    tags: ["Mobile App", "Figma"],
    desc: "A mobile app concept that helps users limit social media use and build healthier digital habits.",
    featured: true,
    featuredRank: 2,
    links: [
      linkedin("https://www.linkedin.com/feed/update/urn:li:activity:7310293123409014784/"),
      behance("https://www.behance.net/gallery/222243291/Social-Media-Block-App"),
    ],
    caseStudy: {
      label: "Mobile App",
      cardTag: "Social Media Blocking App",
      subtitle: "A mobile app concept that helps users limit social media use and build healthier digital habits.",
      projectType: "University Project",
      duration: "3 weeks",
      sections: [
        {
          title: "Project Overview",
          text: [
            "BlockMind is a focus-enhancing mobile app that helps users block distracting social media platforms and regain control over their time. It lets users schedule blocking sessions, set usage limits and create focus modes for increased productivity.",
            "The task was to research and design a user-friendly, distraction-blocking application with intuitive navigation, smart scheduling features and a modern, minimalist interface.",
          ],
        },
        {
          title: "The Challenge",
          text: [
            "Users who frequently use social media need a convenient way to manage distracting applications, because uncontrolled usage interrupts their focus and daily activities. Existing blockers often feel too restrictive or lack flexibility, so people abandon them.",
          ],
          points: [{ b: "How might we ", t: "help users manage social media distractions and maintain better focus on their priorities?" }],
        },
        {
          title: "The Solution",
          text: [
            "A calm, dark-themed mobile app built around one idea: make focus easy, not punishing. Users can start a Quick Mode session in one tap, schedule blocking around their day, and see their progress through clear, encouraging usage insights.",
          ],
        },
        {
          title: "Design Approach",
          text: ["I followed a user-centered design process, moving from understanding people to a tested, high-fidelity prototype."],
          screens: [
            {
              title: "1. Empathize",
              text: "Understand how social media distractions affect concentration and productivity.",
              points: ["Identified the target users and their challenges", "Researched social media usage and existing blocking apps", "Created a user persona and identified pain points", "Mapped the user's current experience of distraction"],
              note: "User persona, research findings and pain points.",
            },
            {
              title: "2. Define",
              text: "Turned user needs into a clear design challenge.",
              points: ["Wrote the problem statement and a How Might We question", "Set design goals", "Prioritized the most important user needs"],
              note: "Problem statement, design goals and prioritized needs.",
            },
            {
              title: "3. Ideate",
              text: "Explored solutions for reducing distractions while keeping the app easy to use.",
              points: ["Brainstormed app-blocking and focus features", "Developed the site map and user flows", "Organized features into logical categories", "Sketched alternative screen layouts"],
              note: "Ideas, site map, user flows and initial sketches.",
            },
            {
              title: "4. Prototype",
              text: "Transformed the ideas into a consistent, intuitive mobile experience.",
              points: ["Created low-fidelity wireframes", "Established colors, typography, icons and reusable components", "Designed high-fidelity screens with a dark interface and blue accents", "Linked the screens into an interactive Figma prototype"],
              note: "Wireframes, design system, high-fidelity UI and prototype.",
            },
          ],
        },
        {
          title: "User Personas",
          text: [
            "BlockMind targets individuals aged 20–40 who seek productivity, career growth and better focus. They need flexible tools to reduce social media distractions, manage their time and build healthy digital habits for work, study and personal well-being.",
          ],
          images: [
            { src: bmPersona, caption: "Primary persona — Alex Carter" },
            { src: bmStories, caption: "User stories for three key user types" },
          ],
        },
        {
          title: "Site Map",
          text: [
            "The site map defines how users move through the app. After onboarding and sign in or sign up, users land on a Home hub with four main areas — Home, Analysis, Activity and Profile — so every feature is reachable in a few taps. Error states for sign-up are planned from the start.",
          ],
          images: [{ src: bmSitemap, caption: "BlockMind site map and user flow" }],
        },
        {
          title: "Use Case Diagram",
          text: ["The use case diagram shows the key actions a user can take inside the BlockMind system, from viewing the dashboard to managing settings."],
          images: [{ src: bmUsecase, caption: "Use case diagram — User and the BlockMind system" }],
        },
        {
          title: "Wireframes",
          text: ["Low-fidelity wireframes were used to test layout, hierarchy and navigation before any visual styling, keeping the focus on usability."],
          images: [{ src: bmWireframes, caption: "Low-fidelity wireframes — onboarding, home, schedules, analysis, activity and profile" }],
        },
        {
          title: "Color Palette & Design System",
          text: ["A dark interface with blue accents keeps the app calm and easy on the eyes. A small design system of colors, buttons, icons, tab bar and Inter typography keeps every screen consistent and fast to build."],
          images: [{ src: bmSystem, caption: "Colors, components, icons, tab bar and typography" }],
        },
        {
          title: "High Fidelity Design",
          text: ["The final high-fidelity screens bring the wireframes to life with the dark interface, blue accents and reusable components from the design system — covering onboarding, the home dashboard, schedules, analysis, activity, profile and settings."],
          images: [{ src: bmUiScreens, caption: "High-fidelity UI screens" }],
        },
        {
          title: "Key Features",
          points: [
            { b: "Quick Mode — ", t: "start a focus session in one tap from the home screen." },
            { b: "Scheduled blocking — ", t: "create, edit and track blocking schedules around study and work hours." },
            { b: "Usage insights — ", t: "see total usage, daily average and most-used apps, with top increases and decreases." },
            { b: "Activity report — ", t: "review progress over time and stay motivated." },
            { b: "Personalization — ", t: "manage notifications, time, language and theme from the profile area." },
          ],
        },
        {
          title: "Key Design Decisions",
          points: [
            { b: "Calm dark theme with blue accents — ", t: "reduces visual noise and supports the feeling of focus." },
            { b: "Four-tab navigation — ", t: "Home, Analysis, Activity and Profile keep the structure simple and predictable." },
            { b: "Encouraging feedback — ", t: "progress is shown positively (time saved, sessions completed) instead of making users feel guilty." },
            { b: "Flexible, not strict — ", t: "users control schedules and limits, which avoids the 'too restrictive' problem of other blocking apps." },
          ],
        },
        // ── Add an interactive prototype here when you have the Figma link: ──
        // { title: "Interactive Prototype", text: ["Click through the prototype below."], embed: "PASTE YOUR FIGMA PROTOTYPE LINK" },
        {
          title: "Future Enhancements",
          points: [
            "Smarter suggestions that recommend limits based on a user's real usage patterns",
            "Gentle accountability features, such as sharing goals with a friend",
            "Widgets and quick actions on the phone home screen",
            "More focus themes and rewards to keep long-term motivation",
          ],
        },
        {
          title: "Key Learnings",
          text: [
            "This project taught me how important flexibility is in habit-building products: people respond better to tools that support them than tools that restrict them. Designing the site map and use cases early made the wireframes faster, and building a small design system kept the high-fidelity screens consistent.",
          ],
        },
      ],
    },
  },
  {
    id: "gfx-aura",
    category: "Graphic & Branding",
    title: "Aura Global",
    image: auraImg,
    tags: ["Branding", "Poster Design"],
    desc: "Brand identity and the “Save The Giant Legacy” campaign poster for Aura Global Foundation.",
    featured: true,     // also shown (view only) in Featured Work on Home
    featuredRank: 3,
    fit: "contain",
    bg: "linear-gradient(180deg, #3bb64c 0%, #b5e3bb 50%, #fefefe 100%)",
    links: [],
    caseStudy: {
      label: "Poster Design",
      subtitle: "A brand identity and campaign poster for Aura Global Foundation that turns panda conservation into a personal, immediate call to action.",
      projectType: "Brand & Poster Design",
      sections: [
        {
          title: "Poster",
          text: ["“Save The Giant Legacy” is a campaign poster for Aura Global Foundation, designed to connect Sri Lankan families and wildlife enthusiasts to global panda conservation."],
          images: [{ src: auraPoster, caption: "Save The Giant Legacy — final poster" }],
        },
        {
          title: "Overview",
          text: [
            "Conservation messages often feel distant and international. The challenge was to make panda conservation feel personal and meaningful for an audience in Sri Lanka.",
            "The campaign does this by framing adoption as protecting a “legacy”. Supporters are not just donating; they are helping a legacy live on. The logo set and the poster were designed together, so the brand and the message work as one system.",
          ],
        },
        {
          title: "Goal & Audience",
          points: [
            { b: "Goal — ", t: "move viewers from awareness to action by making conservation feel accessible, impactful and immediate." },
            { b: "Audience — ", t: "Sri Lankan families and wildlife enthusiasts." },
            { b: "One action — ", t: "adopt a panda, through a single clear “Adopt Now” button and web address." },
          ],
        },
        {
          title: "Design Decisions",
          points: [
            { b: "Message framing — ", t: "“Be the reason their legacy lives on” turns adoption into a personal, lasting act." },
            { b: "Clear hierarchy — ", t: "the headline comes first, one concrete fact (only 1,800 giant pandas remain) makes the urgency real, and the call to action follows." },
            { b: "Emotional imagery — ", t: "playful panda cubs and a large panda portrait help people feel connected and concerned." },
            { b: "Color with purpose — ", t: "dark greens represent nature and environmental protection, while a bright lime is kept only for the “Adopt Now” button so it stands out." },
            { b: "Readable type — ", t: "Inter keeps every line clear and easy to read on mobile phones." },
            { b: "One focused card — ", t: "the tagline, button and web address sit together in a single card, so the next step is obvious." },
          ],
        },
        {
          title: "Brand Identity",
          text: ["The Aura Global Foundation mark places a globe above two joined hands, a symbol of global care and partnership. Three lockups cover different layouts: a stacked version with an arched wordmark for hero placements, a horizontal version for headers and wide spaces, and a vertical version for compact spaces."],
          images: [{ src: auraLogos, caption: "Aura Global Foundation logo lockups" }],
        },
        {
          title: "Color Palette",
          text: ["Deep greens carry the nature and environmental message, soft neutrals keep the layout clean, and the bright lime is reserved for the main action."],
          swatches: [
            { hex: "#000000", name: "Black" },
            { hex: "#F8F8F8", name: "Off White" },
            { hex: "#0D6B39", name: "Forest Green" },
            { hex: "#336F39", name: "Leaf Green" },
            { hex: "#BEF264", name: "Lime" },
          ],
        },
        {
          title: "Typography",
          text: ["Inter was chosen because it is clear and easy to read on mobile phones. An extra-bold heading gives the poster a strong entry point, and medium to semi-bold body styles keep supporting text easy to scan."],
          typeScale: {
            title: "Type styles",
            family: "Inter",
            noLineHeight: true,
            rows: [
              ["Heading", "76px", 800, "Extra Bold"],
              ["Body 1", "30px", 500, "Medium"],
              ["Body 2", "30px", 700, "Bold Italic", "italic"],
              ["Body 3", "24px", 600, "Semi Bold"],
            ],
          },
        },
        {
          title: "Deliverables",
          points: [
            "Aura Global Foundation logo set in three lockups",
            "“Save The Giant Legacy” campaign poster",
            "Color palette and Inter type styles for consistent future designs",
          ],
        },
      ],
    },
  },
  {
    id: "dev-hotel",
    category: "Development",
    title: "Responsive Hotel Booking Website",
    image: HotelImage,
    tags: ["React", "Tailwind CSS"],
    desc: "A responsive hotel booking website with a clean layout, room listings and a smooth booking flow.",
    featured: true,
    links: [
      github("https://github.com/n-nimna/Hotel-Booking-Website"),
      linkedin("https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_react-frontend-uiux-activity-7287400290280972288-Al9d?utm_source=share&utm_medium=member_desktop"),
      live("https://n-nimna.github.io/Hotel-Booking-Website/"),
    ],
  },
  {
    id: "dev-portfolio",
    category: "Development",
    title: "Personal Portfolio Website",
    image: PortfolioImage,
    tags: ["React", "Tailwind CSS"],
    desc: "My personal portfolio website showcasing my UI/UX, development and branding work.",
    featured: false,
    links: [
      github("https://github.com/n-nimna/nimna-portfolio"),
      linkedin("https://www.linkedin.com/in/nimeshi-dilshara-b2508a255/details/projects/"),
      live("https://n-nimna.github.io/nimna-portfolio/"),
    ],
  },
  {
    id: "dev-tution",
    category: "Development",
    title: "Tuition Class Website",
    image: TutionImage,
    tags: ["React JS"],
    desc: "A modern, responsive website for a tuition class with course details and easy enrolment.",
    featured: false,
    links: [
      github("https://github.com/n-nimna/BrightMind-Website"),
      linkedin("https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_react-vite-webdevelopment-activity-7277520260579172352-cEXq?utm_source=share&utm_medium=member_desktop"),
      live("https://n-nimna.github.io/BrightMind-Website/"),
    ],
  },
  {
    id: "ui-bicycle",
    category: "Graphic & Branding",
    title: "Bicycle Branding Website Design",
    image: HealixB,
    tags: ["Branding", "Figma"],
    desc: "A bold branding website design for a bicycle brand, focused on product storytelling.",
    featured: true,
    links: [
      linkedin("https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uiux-webdesign-bicyclebranding-activity-7291925724049879040-ShSk?utm_source=share&utm_medium=member_desktop"),
      behance("https://www.behance.net/gallery/218323753/Bicycle-Branding-Website"),
    ],
  },
  {
    id: "gfx-flyers",
    category: "Graphic & Branding",
    title: "Flyer Designs",
    image: flyerImg,
    tags: ["Flyer Design", "Graphic Design"],
    desc: "Event and awareness flyers designed for the Association of Software Engineering at NSBM Green University.",
    featured: true,
    featuredRank: 4,
    featuredOnly: true,   // shown ONLY in Featured Work on Home (not in the Projects pages)
    viewOnly: true,    // true = shown as a picture only (no link, not clickable)
    fit: "contain",    // show the whole image without cropping
    links: [],
  },
  {
    id: "gfx-certificates",
    category: "Graphic & Branding",
    title: "Certificate Designs",
    image: certImg,
    tags: ["Certificate Design", "Graphic Design"],
    desc: "Certificate and invitation designs for events organized by the Association of Software Engineering at NSBM Green University.",
    featured: true,
    featuredOnly: true,   // shown ONLY in Featured Work on Home (not in the Projects pages)
    viewOnly: true,
    fit: "contain",
    bg: "linear-gradient(180deg, #39b44a 0%, #53985d 55%, #013a09 100%)",   // background colour behind the picture
    links: [],
  },

  {
    id: "ai-iphone18",
    category: "AI Creations",
    title: "iPhone 18 — Premium Product Advertisement",
    image: aiIphone,
    tags: ["AI Generated", "Product Ad"],
    desc: "A modern iPhone 18 promotional poster featuring 3D visuals, minimalist typography, and a premium aesthetic to create an eye-catching social media advertisement.",
    featured: false,
    viewOnly: true,   // shown as a picture only (no link)
    links: [],
  },

  // ── TEMPLATE: Graphic & Branding / AI Creations ──
  // {
  //   id: "gfx-1",                      // any unique name
  //   category: "Graphic & Branding",   // or "AI Creations"
  //   title: "Brand Identity – Your Brand",
  //   image: MyImage,                   // import at the top of this file
  //   tags: ["Logo", "Illustrator"],
  //   desc: "One or two lines about the project.",
  //   featured: false,
  //   links: [behance("https://www.behance.net/gallery/...")],
  // },
];

// ════════════════════════════════════════════════════════════════════
//  CASE STUDY TEMPLATE – every section is OPTIONAL. Add / delete / reorder.
//  Each section appears in the left "Contents" menu automatically.
//
//  caseStudy: {
//    label: "Mobile App",                 // small tag above the title
//    subtitle: "One or two lines summary shown under the title",
//    projectType: "University Project",   // shown at the top of the page
//    duration: "4 Months",
//    sections: [
//      { title: "Project Overview", text: ["Paragraph 1", "Paragraph 2"] },
//      { title: "Problem", text: ["..."] },
//      { title: "Research Process", text: ["..."] },
//      { title: "Key Design Considerations",
//        text: ["..."],
//        pointsTitle: "Key Design Considerations:",
//        points: [ { b: "Bold start", t: " rest of the sentence" }, "or just a plain string" ] },
//      { title: "Key Screens", text: ["intro..."],
//        screens: [ { title: "Home Dashboard", text: "About this screen", image: ScreenImg } ] },
//      { title: "Use Case Diagram", text: ["..."], images: [{ src: DiagramImg, caption: "Figure 1" }] },
//      { title: "User Flow", text: ["..."], images: [{ src: FlowImg, caption: "" }] },
//      { title: "Interactive Prototype", text: ["Click through the prototype below."],
//        embed: "https://embed.figma.com/proto/...your-link..." },
//      { title: "Usability Testing", text: ["..."] },
//      { title: "Key Learnings", text: ["..."] },
//    ],
//  },
// ════════════════════════════════════════════════════════════════════
