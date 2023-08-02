import styled, { keyframes } from 'styled-components';
import { GoDotFill } from 'react-icons/go';

const slideLeftAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const Container = styled.div`
background-color: #ff6e00;
height: 92px;
display: flex;
align-items: center;
overflow: hidden;
`

export const Content = styled.div`
display: flex;
align-items: center;
animation: ${slideLeftAnimation} 10s linear infinite;
`

export const ContentText = styled.h2`
font-size: 42.75px;
text-transform: uppercase;
`

export const ContentDot = styled(GoDotFill)`
font-size: 30px;
margin: 0 20px;
`