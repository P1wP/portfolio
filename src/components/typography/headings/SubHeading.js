import React from "react";

function SubHeading({classProp, subheading}){
    return(
        <h2 className={classProp}>{subheading}</h2>
    );
}

export default SubHeading;