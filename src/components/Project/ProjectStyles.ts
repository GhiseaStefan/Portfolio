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

export const ItemsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 100px;
`

export const Item = styled.div`
margin-top: 40px;
width: 80%;
display: flex;
flex-direction: column;
`

export const ItemText = styled.h2`
font-size: 20px;
margin-bottom: 10px;

@media (max-width:575px) {
    font-size: 16px;
}

@media (max-width:575px) {
    font-size: 12px;   
}
`

export const ItemImageContainer = styled.div`
width: 80%;
height: 700px;
align-self: center;
margin-bottom: 40px;

@media (max-width:768px) {
    height: 450px;
}

@media (max-width:575px) {
    height: 300px;   
}
`

export const ItemImage = styled.img`
width: 100%;
height: 100%;
border-radius: 20px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`