import styled from 'styled-components';
import { InfoContainerProps } from '../../../interfaces/StylesInterfaces';

export const IntroContainer = styled.div`
height: 900px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 80px;
`;

export const InfoContainer = styled.div<InfoContainerProps>`
width: 600px;
margin-right: 5%;
transform: translateY(${props => (props.mounted ? '0' : '20%')});
transition: transform .3s ease-in-out;
`

export const InfoHeader = styled.h1`
font-size: 70px;
line-height: 75px;
margin: 20px 0 35px 0;
text-transform: capitalize;
`

export const InfoDesc = styled.p`
font-size: 20px;
margin-bottom: 35px;
color: rgba(0, 0, 0, 0.8);
`

export const InfoBtnOverlay = styled.div`
width: 0%;
height: 100%;
position: absolute;
left: 0;
top: 0;
background-color: #ff6e00;
font-size: 18px;
transition: width .3s ease-in-out;
`

export const InfoBtnText = styled.div`
z-index: 1;
position: relative;
`;

export const InfoBtn = styled.a`
text-transform: capitalize;
display: inline-block;
text-decoration: none;
padding: 25px 40px;
border-style: none;
border-width: 1px;
border-color: hsla(0, 0%, 100%, 0.14);
background-color: #141414;
color: #fff;
font-size: 18px;
line-height: 20px;
position: relative;
transition: color .3s ease-in-out;
cursor: pointer;

&:hover {
    ${InfoBtnOverlay} {
        width: 100%;
    }
    color: #000;
}
`

export const ImageContainer = styled.div<InfoContainerProps>`
width: 500px;
height: 500px;
border-radius: 50%;
background-color: #fff;
overflow: hidden;
transform: translateY(${props => (props.mounted ? '0' : '20%')});
transition: transform .3s ease-in-out;
margin-bottom: 10%;
`

export const ImageProfile = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`