//functional
import Head from "next/head";

//component
import Header from "./header";

const Contact = () => {
    return(
        <div className="bg-slate-900 overflow-hidden flex min-h-screen">
            <Head>
                <title>30Hey - 인기 동영상 정보 플랫폼</title>
                <link rel="icon" href="/image/logo/logo_small.png" />
                <meta property="og:title" content="30Hey" key="title" />
                <meta property="og:image" content="/image/30Hey.jpg" />
            </Head>

            <div className="flex flex-col w-full">
                <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex-1 p-3">
                    <Header></Header>
                    <div className="mt-12 text-center flex flex-col gap-8 max-w-md mx-auto">
                        <h1 className="text-5xl font-bold py-4">Contact me</h1>
                        <p>제안, 기타 요청사항이 있으시면 언제든지 문의해주세요. <br></br>저는 당신의 소식을 듣게 되어 기쁩니다😊</p>
                        <address><a target={"_blank"} href="mailto:jds3567@gmail.com">email : jds3567@gmail.com</a></address>
                        <address><a target={"_blank"} href="https://github.com/dongseob/30Hey">github : github.com/dongseob/30Hey</a></address>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;