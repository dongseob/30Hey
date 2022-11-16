import Logo from "./logo";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <Logo></Logo>
            <Link href={"/components/contact"}>
            <button
                type="button"
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-semibold rounded-full transition-all shadow-sm bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
            >
                Contact
            </button>
            </Link>
        </div>
    );
};
export default Header;
