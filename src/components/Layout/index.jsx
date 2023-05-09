import React from 'react';
import Header from "../Header";
import Container from "../Container";

const Layout = ({children, deleteHandle}) => {
    return (
        <>
            <Header deleteHandle={deleteHandle} />
            <main>
               <Container>
                   {children}
               </Container>
            </main>
        </>
    );
};

export default Layout;