import React from 'react';
import ListItem from "../ListItem";
import './styles.scss'

const Sidebar = () => {

    return (
        <aside className={'sidebar'}>
            <ListItem handleGetNote/>
        </aside>

    );
};

export default Sidebar;