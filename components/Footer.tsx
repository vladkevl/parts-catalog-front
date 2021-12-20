import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/part.svg';
import {FooterContainer, FooterLogo} from "../styles/style";

const Footer = () => {
    return (
        <FooterContainer>
            <Link href="/">
                <>
                    Parts by{' '}
                    <FooterLogo>
                        <Image src={logo} alt="Logo" width={24} height={24}/>
                    </FooterLogo>
                </>
            </Link>
        </FooterContainer>
    )
}

export default Footer;
