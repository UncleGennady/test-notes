import React from 'react';
import Header from "../Header";
import Container from "../Container";

const Layout = ({children, deleteHandle, lockHandle, unlockHandle}) => {
    return (
        <>
            <Header deleteHandle={deleteHandle} lockHandle={lockHandle} unlockHandle={unlockHandle}/>
            <main>
               <Container>
                   {children}
               </Container>
            </main>
        </>
    );
};

export default Layout;