import { AppProps } from "next/app";
import "../styled/global.scss"

function MyApp({Component, pageProps}:AppProps){
    return <Component {...pageProps} />
}

export default MyApp;