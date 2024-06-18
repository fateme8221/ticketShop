import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/images/logoname.jpeg'
import { usePathname } from "next/navigation";

const Logo = () => {
    const path = usePathname();

    return (
        <Link href="/" className={`lg:block ${(path === "/" || path === "/iranout/" || path === "/hotel/" || path === "/train/" || path === "/bus/" || path === "/accommodation/") ? 'block' : 'hidden'}  `}>
            <Image src={logo} alt='logo' priority={true} />
        </Link>
    );
};

export default Logo;