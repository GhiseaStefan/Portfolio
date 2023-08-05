import styled from 'styled-components';
import { SkillImageContainerProps } from '../../../interfaces/StylesInterfaces';

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 600px;
overflow: hidden;
position: relative;

@media (max-width:575px) {
    height: 500px;
}
`

export const Title = styled.h2`
font-size: 38px;
margin: 20px 0 60px 0;
`

export const Message = styled.p`
color: #ff6e00;
position: absolute;
font-size: 18px;
top: 15%;
`

export const SkillsContainer = styled.div`
display: flex;
`

export const SkillImageContainer = styled.div<SkillImageContainerProps>`
margin-right: 20px;
position: relative;
top: 50%;
left: 50%;
transition: transform .3s ease-in-out;
cursor: pointer;
width: 320px;
height: 460px;
transform: translate(calc(${props => props.currentIndex * -340}px - 50%), -50%);


@media (max-width:575px) {
    transform: translate(calc(${props => props.currentIndex * -200}px - 50%), -50%);
    width: 180px;
    height: 320px;
}
`

export const SkillImage = styled.img`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
width: 100%;
height: 100%;
`