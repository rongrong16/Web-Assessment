// NavBar.tsx
export const NAV_LINKS = [
  { name: "Home", href: "" },
  { name: "About", href: "#about" },
  { name: "Listings", href: "#listings" },
  { name: "Contact", href: "#contact" },
];

export const BRAND = {
  initials: "MM",
  fullName: {
    first: "MARCI",
    last: "METZGER",
  },
  subtitle: "HOMES",
  colors: {
    primary: "blue-900",
    secondary: "yellow-400",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-500",
  },
};

// HeroCarousel.tsx
export const HERO_SLIDES = [
  {
    image: "/img/hero1.webp",
    text: "Nevada Homes, Expertly Guided.",
    subtext: "Discover your perfect property in the Silver State",
  },
  {
    image: "/img/hero2.webp",
    text: "Your Dream Home Awaits.",
    subtext: "Luxury living tailored to your lifestyle",
  },
  {
    image: "/img/hero3.webp",
    text: "Trusted Real Estate with Heart.",
    subtext: "Building relationships, one home at a time",
  },
];

// AboutSection.tsx
import { Award, TrendingUp, Heart } from "lucide-react";

export const ACHIEVEMENTS = [
  { icon: Award, label: "30 Years", desc: "Experience" },
  { icon: TrendingUp, label: "$28.5M+", desc: "2021 Sales" },
  { icon: Heart, label: "500+", desc: "Happy Clients" },
];

export const HIGHLIGHTS = [
  "Deep Nevada market expertise",
  "Personalized client approach",
  "Proven negotiation skills",
  "Full-service support team",
];

// ServicesSection.tsx
import { Home, Building2, Users } from "lucide-react";

export interface Service {
  title: string;
  desc: string;
  img: string;
  alt: string;
  icon: React.ElementType;
  gradient: string;
}

export const SERVICES_SECTION = {
  subtitle: "What We Offer",
  title: "Your Real Estate Partner",
  description:
    "Comprehensive services tailored to your unique real estate journey",
};

export const SERVICES: Service[] = [
  {
    title: "Real Estate Done Right",
    desc: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    img: "/img/services1.webp",
    alt: "Real Estate Done Right",
    icon: Home,
    gradient: "from-[#1E3A8A] to-[#3B82F6]",
  },
  {
    title: "Commercial & Residential",
    desc: "Large or small, condo or mansion, we can find it and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
    img: "/img/services2.webp",
    alt: "Commercial & Residential",
    icon: Building2,
    gradient: "from-[#1E3A8A] to-[#FACC15]",
  },
  {
    title: "Rely on Expertise",
    desc: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    img: "/img/services3.webp",
    alt: "Rely on Expertise",
    icon: Users,
    gradient: "from-[#3B82F6] to-[#FACC15]",
  },
];

// PhotoGallery.tsx
export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export const GALLERY_SECTION = {
  title: "Photo Gallery",
  description:
    "Explore some of our most beautiful properties and client success stories",
  buttonLabel: "View All Properties",
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/img/gallery1.webp", alt: "Gallery Image 1" },
  { src: "/img/gallery2.webp", alt: "Gallery Image 2" },
  { src: "/img/gallery3.webp", alt: "Gallery Image 3" },
  { src: "/img/gallery4.webp", alt: "Gallery Image 4" },
  { src: "/img/gallery5.webp", alt: "Gallery Image 5" },
];

// SearchListing.tsx
export const SELECT_FILTERS = [
  {
    name: "location",
    label: "Location",
    options: [
      { value: "", label: "Select Location" },
      { value: "pahrump", label: "Pahrump" },
      { value: "lasvegas", label: "Las Vegas" },
      { value: "reno", label: "Reno" },
    ],
  },
  {
    name: "type",
    label: "Property Type",
    options: [
      { value: "", label: "Any Type" },
      { value: "house", label: "House" },
      { value: "condo", label: "Condo" },
      { value: "land", label: "Land" },
    ],
  },
  {
    name: "sortBy",
    label: "Sort By",
    options: [
      { value: "", label: "Default" },
      { value: "price_low_high", label: "Price (Low → High)" },
      { value: "price_high_low", label: "Price (High → Low)" },
      { value: "newest", label: "Newest Listings" },
    ],
  },
];

export const RANGE_FILTERS = [
  { name: "bedrooms", label: "Bedrooms", max: 5 },
  { name: "baths", label: "Baths", max: 5 },
];

//CallorVisit.tsx
import { Phone, Mail, MapPin } from "lucide-react";

export const CONTACT_CARDS = [
  {
    title: "Call Us",
    text: "(206) 919-6886",
    href: "tel:+12069196886",
    icon: Phone,
    color: "var(--color-accent)",
    label: "Tap to call",
  },
  {
    title: "Email",
    text: "MARCIMETZGER@GMAIL.COM",
    href: "mailto:MARCIMETZGER@GMAIL.COM",
    icon: Mail,
    color: "var(--color-primary)",
    label: "Send an email",
  },
  {
    title: "Visit Our Office",
    text: "123 Ridge Realty Blvd, Pahrump, Nevada",
    href: "https://maps.app.goo.gl/fU7eoiJvNCRENKXz5",
    icon: MapPin,
    color: "var(--color-secondary)",
    label: "View on Maps",
  },
];

export const OFFICE_INFO = {
  hoursTitle: "Office Hours",
  hoursText: "Monday - Sunday: 8:00 AM - 7:00 PM",
};

export const CTA_BUTTONS = [
  {
    label: "Schedule a Consultation",
    variant: "primary",
  },
  {
    label: "Request Info",
    variant: "secondary",
  },
];

// Footer.tsx
export const PARTNER_LOGOS = [
  "/logos/logo4.webp",
  "/logos/logo3.webp",
  "/logos/logo2.webp",
  "/logos/logo1.webp",
];

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/MarciHomes/",
    icon: "/logos/facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/marci-metzger-30642496/",
    icon: "/logos/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump",
    icon: "/logos/yelp.svg",
    alt: "Yelp",
  },
];

export const COPYRIGHT = {
  owner: "Marci Metzger",
  company: "Ridge Realty Group",
  reservedText: "All Rights Reserved",
};
