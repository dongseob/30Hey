//functional
import Head from "next/head";

//component
import MainList from "./components/mainList";
import IconFilter from "./components/iconFilter";
import Header from "./components/header";
import ScrollToTop from "./components/scrollToTop";

export default function Home() {
    return (
        <div className="bg-slate-900 overflow-hidden flex min-h-screen">
            <Head>
                <title>30Hey - 인기 동영상 정보 플랫폼</title>
                <link rel="icon" href="/image/logo/logo_small.png" />
                <meta property="og:title" content="30Hey" key="title" />
                <meta property="og:image" content="/30Hey.jpg" />
            </Head>

            <div className="flex flex-col w-full">
                <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex-1 p-3">
                    <Header></Header>
                    <IconFilter></IconFilter>
                    <MainList></MainList>
                </div>
            </div>
            <ScrollToTop></ScrollToTop>
        </div>
    );
}
