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
`

export const InfoHeader = styled.h2`
font-size: 40px;
`

export const InfoImage = styled.img`
margin-top: 50px;
margin-left: 30px;
`

export const InfoDesc = styled.p`
margin-left: auto;
margin-right: 15%;
opacity: .6;
font-size: 18px;
line-height: 27px;
width: 560px;
`

export const ResumeContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 5%;
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
`

export const ResumeImageContainer = styled.div`
width: 90%;
height: 90%;
margin-left: -4px;
border-radius: 20px;
overflow-y: scroll;
`

export const ResumeImage = styled.img`
max-width: 100%;
`
