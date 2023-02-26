import React, {Suspense, useContext} from 'react';
import Counter from "./components/Counter";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import classNames from "classnames";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/about'}>AboutPage</Link>
            <Link to={'/'}>MainPage</Link>
            <Suspense fallback={'...loading'}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    );
};

export default App;