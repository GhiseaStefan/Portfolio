import React from 'react'
import { Container, Text, Color } from './FooterStyles'

const Footer: React.FC = () => {
    return (
        <Container>
            <Text>
                Created By: <Color>Ghisea Stefan</Color>
            </Text>
            <Text>&copy; 2023 Me. All rights reserved.</Text>
            <Text>Contact: <Color>ghiseastefan@gmail.com</Color></Text>
        </Container>
    )
}

export default Footer