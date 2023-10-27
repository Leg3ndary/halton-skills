import SmallLogo from "@/assets/halton_skills_logo_only.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <div className="relative height-16 -z-10"></div>
            <div className="sticky top-0 flex flex-wrap content-center h-16 bg-grey">
                <Image
                    src={SmallLogo}
                    className="ml-4"
                    alt="Halton Skills Logo"
                    width={100}
                />
                <div className="flex flex-row flex-wrap content-center gap-4 ml-auto mr-4">
                    <Link href="/" className="text-xl font-semibold">
                        Home
                    </Link>
                    <Link href="/elementary" className="text-xl font-semibold">
                        Elementary
                    </Link>
                    <Link
                        href="/secondary"
                        className="text-xl font-semibold "
                    >
                        Secondary
                    </Link>
                </div>
            </div>
        </>
    );
}
