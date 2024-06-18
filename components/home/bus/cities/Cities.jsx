import { GoDotFill } from "react-icons/go";
import React from "react";

const cities = [
  { id: 1, name: "بلیط اتوبوس تهران مشهد" },
  { id: 2, name: "بلیط اتوبوس اصفهان تهران" },
  { id: 3, name: "بلیط اتوبوس تهران استانبول" },
  { id: 4, name: "بلیط اتوبوس اهواز تهران" },
  { id: 5, name: "بلیط اتوبوس مشهد تهران" },
  { id: 6, name: "بلیط اتوبوس تهران شیراز" },
  { id: 7, name: "بلیط اتوبوس استانبول تهران" },
  { id: 8, name: "بلیط اتوبوس تهران تبریز" },
  { id: 9, name: "بلیط اتوبوس تهران اصفهان" },
  { id: 10, name: "بلیط اتوبوس شیراز تهران" },
  { id: 11, name: "بلیط اتوبوس تهران اهواز" },
  { id: 12, name: "بلیط اتوبوس تبریز تهران" },
];
const Cities = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16 lg:grid-cols-4">
      {cities.map((city) => (
        <div className="flex items-center gap-1" key={city.id}>
          <GoDotFill className="text-blue-700"/>
          <h2 className="text-gray-800">{city.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cities;
