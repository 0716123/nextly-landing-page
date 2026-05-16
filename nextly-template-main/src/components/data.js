import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Performance Optimized",
  desc: "Built with modern web standards and best practices to ensure lightning-fast load times and excellent Core Web Vitals scores.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Fast Load Times",
      desc: "Optimized bundles ensure your site loads in milliseconds.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "SEO Ready",
      desc: "Structured with semantic HTML and meta tags for search engines.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Mobile First Design",
      desc: "Responsive layout that works beautifully on any device.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Developer Friendly",
  desc: "Clean, maintainable code structure that makes it easy to customize and extend for your unique needs.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Easy Customization",
      desc: "Well-organized components that are simple to modify.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Modern Stack",
      desc: "Built on Next.js 14 and Tailwind CSS for productivity.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark Mode Included",
      desc: "Professional dark theme for accessibility and user preference.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
