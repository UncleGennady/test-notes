import React from 'react';
import Header from "../Header";
import Container from "../Container";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main>
               <Container>
                   {children}
               </Container>
            </main>
        </>
    );
};

export default Layout;