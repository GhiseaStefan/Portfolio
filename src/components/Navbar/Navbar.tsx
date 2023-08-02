import React from 'react'
import { Container, LogoContainer, LogoImage, SocialContainer, SocialIconWrapper, ProjectsHlink } from './NavbarStyles'
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();

    const showProjectsLink = !location.pathname.includes('/project')
    return (
        <Container>
            <LogoContainer href='/'>
                <LogoImage src='/images/logo.png' />
            </LogoContainer>
            <SocialContainer>
                <SocialIconWrapper href='https://www.linkedin.com/in/stefan-ghisea-b75329286/' target='_blank'>
                    <BiLogoLinkedin />
                </SocialIconWrapper>
                <SocialIconWrapper href='mailto:ghiseastefan@gmail.com'>
                    <MdEmail />
                </SocialIconWrapper>
                <SocialIconWrapper href='https://github.com/GhiseaStefan' target='_blank'>
                    <BiLogoGithub />
                </SocialIconWrapper>
                {showProjectsLink && (
                    <Link activeClass='active' to='projects-preview' spy={true} smooth={true} offset={-70} duration={500}>
                        <ProjectsHlink>Projects</ProjectsHlink>
                    </Link>
                )}
            </SocialContainer>
        </Container>
    )
}

export default Navbar