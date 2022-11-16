import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import "animate.css";

function MyApp({ Component, pageProps }) {
    
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp;
