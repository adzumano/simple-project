import React, {Suspense} from 'react';
import './styles/index.scss'
import classNames from "classnames";
import {useTheme} from "./provider/ThemeProvider";
import {AppRouter} from "app/provider/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback={"loading.."}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;