import styled from 'styled-components';

export const InfoContainer = styled.div`
display: flex;
align-items: center;
height: 400px;
`

export const InfoHeaderContainer = styled.div`
display: flex;
align-items: center;
margin-left: 15%;

@media (max-width:768px) {
    margin-left: 5%;
}
`

export const InfoHeader = styled.h2`
font-size: 40px;

@media (max-width:768px) {
    font-size: 30px;
}

@media (max-width:575px) {
    font-size: 24px;   
}
`

export const InfoImage = styled.img`
margin-top: 50px;
margin-left: 10px;
margin-right: 20px;

@media (max-width:768px) {
    width: 60px;
}

@media (max-width:575px) {
    width: 40px;   
}
`

export const InfoDesc = styled.p`
margin-left: auto;
margin-right: 15%;
opacity: .6;
font-size: 18px;
line-height: 27px;
width: 560px;

@media (max-width:768px) {
    margin-right: 5%;
    font-size: 12px;
    line-height: 20px;
    width: 300px;
}

@media (max-width:575px) {
    line-height: normal;   
}
`

export const ResumeContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 5%;
position: relative;
`

export const ResumeTitle = styled.h2`
font-size: 40px;

@media (max-width:768px) {
    font-size: 30px;
}

@media (max-width:575px) {
    font-size: 24px;   
}
`

export const ResumeFrame = styled.div`
background-image: url('/images/frame.png');
width: 950px;
height: 750px;
background-position: 50%;
background-repeat: no-repeat;
background-size: contain;
padding: 30px 20px 35px 15px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width:1024px) {
    width: 600px;
}

@media (max-width:575px) {
    width: 320px;   
    height: 300px;
}
`

export const ResumeImageContainer = styled.div`
width: 90%;
height: 90%;
margin-left: -4px;
border-radius: 20px;
overflow-y: scroll;

@media (max-width:1024px) {
    width: 92%;
    height: 57%;
    margin-top: 8px;
    margin-left: 0;
}

@media (max-width:575px) {
    width: 97%;
    height: 88%;
    margin-left: 4px;
    margin-bottom: 4px;
}
`

export const ResumeImage = styled.img`
max-width: 100%;
`
