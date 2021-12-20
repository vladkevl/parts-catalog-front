import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/part.svg';
import Head from "next/head";
import {Navigation, NavigationContainer, NavigationList, NavigationListItem} from "../styles/style";

const Header = () => {
    return (
        <Navigation>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavigationContainer>
                <Image src={logo} alt="Logo" width={60} height={60}/>
                <NavigationList>
                    <NavigationListItem><Link href="/">Каталог</Link></NavigationListItem>
                    <NavigationListItem><Link href="/">О нас</Link></NavigationListItem>
                </NavigationList>
            </NavigationContainer>
        </Navigation>
    )
}

export default Header;
