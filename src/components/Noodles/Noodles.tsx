// Import dependencies
import * as React from "react";

// Import Summary & Available
import NoodlesSummary from "./NoodlesSummary";
import NoodlesAvailable from "./NoodlesAvailable";

const Noodles = () => {
    return (
        <React.Fragment>
            <NoodlesSummary />
            <NoodlesAvailable />
        </React.Fragment>
    );
};

export default Noodles;