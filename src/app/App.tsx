import React from 'react';
import './styles/index.scss'
import classNames from "classnames";
import {useTheme} from "./provider/ThemeProvider";
import {AppRouter} from "app/provider/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;