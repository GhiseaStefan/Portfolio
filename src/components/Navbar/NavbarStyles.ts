import styled from 'styled-components';

export const Container = styled.div`
height: 80px;
display: flex;
align-items: center;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 999;
`

export const LogoContainer = styled.a`
height: 60px;
width: 225px;
margin-left: 5%;
`

export const LogoImage = styled.img`
width: 100%;
height: 100%;
`

export const SocialContainer = styled.div`
height: 60px;
margin-left: auto;
margin-right: 5%;
display: flex;
align-items: center;
`

export const SocialIconWrapper = styled.a`
display: flex;
font-size: 20px;
color: #fff;
background-color: #000;
border-radius: 50%;
padding: 6px;
margin: 0 10px;
`

export const ProjectsHlink = styled.a`
margin: 0 10px;
color: #000;
text-decoration: none;
font-size: 20px;
cursor: pointer;
`
