import Header from "./Header";
import Footer from "./Footer";
import {PropsWithChildren} from "react";
import {Container} from "../styles/style";

const Layout = ({children}: PropsWithChildren<any>) => {
    return (
        <Container>
            <Header/>
            {children}
            <Footer/>
        </Container>
    )
}

export default Layout;
