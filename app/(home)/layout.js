import "../globals.css";
import Link from "next/link";
import { AuthProvider } from "@/components/context/AuthContext";
import Banner from "@/components/Banner";
import BottomNav from "@/components/navigation-buttom/BottomNav";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NumberOne from "@/components/NumberOne";


export const metadata = {
    title: "dalya",
    description: "dalya gasht",

};
export const viewport = {
    themeColor: '#FDB713',
}


export default function RootLayout({ children }) {
    return (
        <html dir="rtl" lang="fa">
            <body className="max-w-[2520px] 
          mx-auto bg-slate-50">
                <AuthProvider>
                    <Navbar />
                    <Banner />
                    <div>
                        {children}
                    </div>
                    <BottomNav />
                    <div>
                        <NumberOne />
                    </div>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
