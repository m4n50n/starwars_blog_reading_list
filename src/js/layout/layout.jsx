import React from "react";
import PropTypes from "prop-types";

import { Header } from "../component/Header/header.jsx";
import { Footer } from "../component/Footer/footer.jsx";

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout;
