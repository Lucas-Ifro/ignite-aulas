import { AppProps } from "next/app";
import "../styled/global.scss"
import { Header } from "../componests/Header";
import { SessionProvider } from "next-auth/react";

function MyApp({Component, pageProps}:AppProps){
    return(
        
        <SessionProvider session={pageProps.session}>
            <Header />
            <Component {...pageProps} />

        </SessionProvider>

    
    )
}

export default MyApp;