import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import { AppLayoutProps } from '../../interfaces/ComponentsInterfaces'
import { GlobalStyle } from './AppStyles'

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default AppLayout