import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            {/* Link 태그 안에서는 a태그가 있어야함 */}
            <a href="#">
                <div className="w-[160px] md:w-[180px] lg:w-[200px] h-16 md:h-20 lg:h-24 relative">
                    <Image
                        src="/image/logo/logo.png"
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                        unoptimized={true}
                        className="cursor-pointer"
                    ></Image>
                </div>
            </a>
        </Link>
    );
};

export default Logo;
