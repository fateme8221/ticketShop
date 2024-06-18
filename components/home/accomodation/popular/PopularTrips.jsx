import { HiOutlineChevronLeft } from "react-icons/hi2";
import Image from "next/image";
import Kish from "../../../../public/images/Kish_f159ce1dd4.png";
import Mashhad from "../../../../public/images/Mashhad_df4911171e.jpg";
import Qeshm from "../../../../public/images/Qeshm_efd9c29cf7.png";
import Ramsar from "../../../../public/images/Ramsar_d313a71069.png";
import Rasht from "../../../../public/images/Rasht_c222c29f75.jpg";
import React from "react";
import Tehran from "../../../../public/images/Tehran_de314d8375.png";
import filband from "../../../../public/images/filband_acc_80697d7358.jpg";
import kordan from "../../../../public/images/kordan_9d13050a93.jpg";
import masal from "../../../../public/images/masal_acc_4e0e2b067f.jpg";
import olesbelangah from "../../../../public/images/olesbelangah_acc_4b9fcd080e.jpg";
import shomal from "../../../../public/images/shomal_430ea129c8.jpg";
import tehran_apartments from "../../../../public/images/tehran_apartments_e9c27bb8bd.jpeg";

const cities = [
  { id: 1, type: "اجاره ویلا", city: "شمال", image: shomal },
  { id: 2, type: "اجاره ویلا", city: "کردان", image: kordan },
  { id: 3, type: "اجاره سوئیت در", city: "مشهد", image: Mashhad },
  { id: 4, type: "اجاره ویلا", city: "رامسر", image: Ramsar },
  { id: 5, type: "اجاره سوئیت در", city: "تهران", image: Tehran },
  { id: 6, type: "اجاره سوئیت در", city: "کیش", image: Kish },
  { id: 7, type: "رزرو بومگردی در", city: "قشم", image: Qeshm },
  { id: 8, type: "اجاره ویلا", city: "رشت", image: Rasht },
  { id: 9, type: "اجاره ویلا", city: "ماسال", image: masal },
  { id: 10, type: "اجاره کلبه در", city: "اولسبلنگاه", image: olesbelangah },
  { id: 11, type: "اجاره ویلا در", city: "فیلبند", image: filband },
  {
    id: 12,
    type: "اجاره آپارتمان مبله در",
    city: "تهران",
    image: tehran_apartments,
  },
];
const PopularTrips = () => {
  return (
    <div className="mb-20">
      <div>
        <h2 className="bold text-2xl">مقصدهای محبوب سفر</h2>
        <p className="text-gray-600">شهرهای محبوب در بین مهمانان</p>
      </div>
      <div className="mt-5 flex justify-center flex-wrap gap-5">
        {cities.map((item) => (
          <div key={item.id} className="border rounded-md hover:shadow-md duration-200 w-80 lg:w-72 lg:flex-grow items-center grid grid-cols-3 gap-5 p-3 bg-white">
            <Image src={item.image} alt="city" className="rounded-md" />
            <div className="col-span-2 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{item.type}</p>
                <h2 className="text-xl bold">{item.city}</h2>
              </div>
              <HiOutlineChevronLeft className="text-gray-500 text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTrips;
