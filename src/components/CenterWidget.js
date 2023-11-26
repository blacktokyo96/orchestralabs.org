import React from "react";
import './NavBar.css';
import { useRecoilValue } from 'recoil';
import { navigationState } from '../state/NavigationState';
import NavOptions from "../utils/enums";
import IntroPanel from "./IntroPanel";
import TestResults from "./TestResults";
import Contact from "./Contact";

const CenterWidget = () => {
    const { currentPage } = useRecoilValue(navigationState);

    switch (currentPage) {
        case NavOptions.HOME:
            return <IntroPanel />;
        case NavOptions.TEST_RESULTS:
            return <TestResults />;
        case NavOptions.CONTACT:
            return <Contact />;
        default:
            return null;
    }
};

export default CenterWidget;
