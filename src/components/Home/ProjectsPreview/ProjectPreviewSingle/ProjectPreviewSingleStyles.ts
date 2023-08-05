import styled from 'styled-components';

export const ProjectContainer = styled.div`
border-top: 2px solid #eee;
height: 540px;
margin: 80px 10% 80px 10%;
display: flex;
align-items: center;

@media (max-width:768px) {
    flex-direction: column;
    margin: 80px 10% 300px 10%;
    padding-top: 20px;
}

@media (max-width:575px) {
    margin: 80px 10% 100px 10%;
}
`

export const ImageContainer = styled.div`
width: 550px;
height: 420px;
margin-left: 2%;

@media (max-width:768px) {
    width: 400px;
}

@media (max-width:575px) {
    width: 300px;   
}
`

export const Image = styled.img`
width: 100%;
height: auto;
max-width: 100%;
`

export const TextContainer = styled.div`
width: 550px;
margin-left: auto;
margin-right: 2%;

@media (max-width:768px) {
    width: 400px;
    margin: 0;
}

@media (max-width:575px) {
    width: 300px;
    font-size: 14px;
}
`

export const TextTitle = styled.h2`
font-size: 32px;
line-height: 41.6px;

@media (max-width:575px) {
 font-size: 24px;
 line-height: 24px;   
}
`

export const TextDesc = styled.p`
opacity: .6;
padding: 8px 0;
margin-top: 20px;
`

export const TextHlink = styled.a`
color: #000;
padding: 4px 0;
margin-top: 20px;
display: inline-block;
cursor: pointer;
`