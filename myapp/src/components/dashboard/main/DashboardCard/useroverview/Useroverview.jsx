import React from "react";
import useroverview from "../../../../../assets/useroverview.png";
import '../../../../common/global.css'

const UserOverview = () => {
    return (
        <>
            <img
                src={useroverview}
                style={{
                    zIndex: 99,
                    position: "absolute",
                    left: "17%",
                    bottom: "33%",
                    width: "50%",
                    height: "35%",
                }}
                alt="User Overview"
            />
        </>
    );
};

export default UserOverview;