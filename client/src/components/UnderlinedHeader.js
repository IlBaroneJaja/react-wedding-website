import React from "react";

const UnderlinedHeader = ({title}) => {
    return (
        <>
            <h1 className="pt-5 text-center">{title}</h1>
            <hr style={{width: "50%", margin: "0 auto"}}/>
        </>
    )
}

export default UnderlinedHeader;
