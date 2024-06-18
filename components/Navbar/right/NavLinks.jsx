import LinkItem from "./LinkItem";
import React from "react";

const links = [
  {
    id: 1,
    name: "بلیط",
    sub: [
      { id: 1, link: "پرواز داخلی", page: '/' },
      { id: 2, link: "پرواز خارجی", page: '/iranout/' },
      { id: 3, link: "قطار", page: '/train/' },
      { id: 4, link: "اتوبوس", page: '/bus/' },
    ],
  },
  {
    id: 2,
    name: "اقامت",
    sub: [
      { id: 1, link: "هتل", page: '/hotel/' },
      { id: 2, link: "ویلا و اقامتگاه", page: '/accommodation/' },
    ],
  },
  { id: 3, name: "تور" },
  {
    id: 4,
    name: "بیشتر",
    sub: [
      { id: 1, link: "دالیا پلاس", page: '/' },
      { id: 2, link: "مجله دالیا", page: '/' },
      { id: 3, link: "بیمه مسافرتی", page: '/' },
    ],
  },
  { id: 5, name: "استرداد" },
];
const NavLinks = () => {
  return (
    <ul className="hidden lg:flex gap-10">
      {links.map((link) => (
        <LinkItem key={link.id} {...link} />
      ))}
    </ul>
  );
};

export default NavLinks;
