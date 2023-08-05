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

@media (max-width: 768px) {
    height: 40px;
    width: 120px;
}

@media (max-width:575px) {
    margin-left: 1%;
}
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

@media (max-width: 768px) {
    height: 40px;
}

@media (max-width:575px) {
    margin-right: 1%;    
}
`

export const SocialIconWrapper = styled.a`
display: flex;
font-size: 20px;
color: #fff;
background-color: #000;
border-radius: 50%;
padding: 4px;
margin: 0 10px;

@media (max-width:575px) {
    margin: 0 5px;
    font-size: 16px;
}
`

export const ProjectsHlink = styled.a`
margin: 0 10px;
color: #000;
text-decoration: none;
font-size: 20px;
cursor: pointer;

@media (max-width:575px) {
    font-size: 16px;
}
`
