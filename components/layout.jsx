import Header from "./header";
import Banner from "./banner";
import ResourceHeader from "./resourceHeader";
import Footer from "./footer";
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = ({ children }) => {
    const router = useRouter();
    if(router.pathname.indexOf('Resources') != -1 ) {
        return (
            <>
                <Head>
                    <link rel="icon" href="/favicon-Homy.ico" />
                </Head>
                <Banner />
                <Header props={'static'}/>
                <ResourceHeader />
                { children }
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <Head>
                    <link rel="icon" href="/favicon-Homy.ico" />
                </Head>
                <Banner />
                <Header props={'header'}/>
                { children }
                <Footer />
            </>
        );
    }
}
 
export default Layout;