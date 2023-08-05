import styled from 'styled-components';

export const Container = styled.div`
background-color: #000;
height: 80px;
display: flex;
justify-content: space-evenly;
align-items: center;
@media (max-width:575px) {
    flex-direction: column;
}
`

export const Text = styled.p`
color: #fff;
font-size: 14px;
@media (max-width:768px) {
 font-size: 12px;   
}
`

export const Color = styled.span`
color: #ff6e00;
`