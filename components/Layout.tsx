import Header from "./Header";
import Footer from "./Footer";
import React, {PropsWithChildren} from "react";
import {Container, Main, MainGrid} from "../styles/style";

const Layout = ({children}: PropsWithChildren<any>) => {
    return (
        <Container>
            <Header/>
            <Main>
                <MainGrid>
                    {children}
                </MainGrid>
            </Main>
            <Footer/>
        </Container>
    )
}

export default Layout;
