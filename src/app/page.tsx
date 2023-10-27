import Image from "next/image";
import Banner from "@/assets/banner.jpg";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen">
            <div className="w-full h-[400px]">
                <Image src={Banner} className="bg-cover" alt="Banner" />
            </div>
        </main>
    );
}
