import styled from 'styled-components';

export const InfoContainer = styled.div`
display: flex;
align-items: center;
height: 400px;
margin-top: 80px;

@media (max-width:768px) {
    flex-direction: column;
    justify-content: center;
}
`

export const InfoHeaderContainer = styled.div`
display: flex;
align-items: center;
margin-left: 15%;

@media (max-width:768px) {
    margin: 0 0 20px 0;
    text-align: center;
}
`

export const InfoHeader = styled.h2`
font-size: 40px;

@media (max-width:575px) {
    font-size: 30px;   
}
`

export const InfoDescGitWrapper = styled.div`
margin-left: auto;
margin-right: 15%;
width: 560px;

@media (max-width:768px) {
    margin: 0 2%;
}

@media (max-width:575px) {
    width: 300px;   
}
`

export const InfoDesc = styled.p`
opacity: .6;
font-size: 16px;
margin-bottom: 20px;

@media (max-width:575px) {
    font-size: 12px;   
}
`

export const InfoProjectGit = styled.a`
text-decoration: none;
color: #000;
`

export const VideoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 150px;
`

export const VideoWrapper = styled.div`
width: 1280px;
border-radius: 10px;
overflow: hidden;


@media (max-width:1440px) {
    width: 768px;
}

@media (max-width:768px) {
    width: 575px;
}

@media (max-width:575px) {
    width: 352px;
}
`
