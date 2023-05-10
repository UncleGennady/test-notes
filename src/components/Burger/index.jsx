import React from "react";
import './styles.scss'


const Burger = ({children, isClicked, updateMenu}) => {

    return(
        <>
            <div className={'burger_menu'} onClick={updateMenu}>
                <div className={`burger_bar  ${isClicked ? 'clicked' : 'unclicked'}`}></div>
                <div className={`burger_bar  ${isClicked ? 'clicked' : 'unclicked'}`}></div>
                <div className={`burger_bar  ${isClicked ? 'clicked' : 'unclicked'}`}></div>
            </div>
            <ul className={`menu ${isClicked ? 'visible' : 'hidden'}`}>
                {children}
            </ul>
        </>

    )
}

export default Burger