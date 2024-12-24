// src/components/layouts/Layout.jsx
import React from "react";
import CustomCursor from "../layouts/CustomCursor";

const Layout = ({ children }) => {
    return (
        <div>
            <CustomCursor />
            {children}
        </div>
    );
};

export default Layout;
