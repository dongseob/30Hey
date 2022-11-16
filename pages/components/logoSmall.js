import Image from "next/image";
import Link from "next/link";

const LogoSmall = () => {
    return (
        <Link href="/">
            <a href="#">
                <div className="w-[50px] h-[50px] relative">
                    <Image
                        src="/image/logo/logo.png"
                        alt="logo_small"
                        layout="fill"
                        objectFit="contain"
                        className="cursor-pointer"
                        unoptimized={true}
                    ></Image>
                </div>
            </a>
        </Link>
    );
};
export default LogoSmall;
