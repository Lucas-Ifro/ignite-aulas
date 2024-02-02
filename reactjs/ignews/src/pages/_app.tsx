import { AppProps } from "next/app";
import "../styled/global.scss"
import { Header } from "../componests/Header";

function MyApp({Component, pageProps}:AppProps){
    return(
        <>
        <Header />
        <Component {...pageProps} />

        </>
    )
}

export default MyApp;