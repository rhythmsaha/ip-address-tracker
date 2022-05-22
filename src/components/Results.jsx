import React from "react";
import Result from "./Result";

const Results = ({ result }) => {
    return (
        <div className="bg-white py-8 lg:py-10 rounded-xl shadow-lg grid lg:grid-cols-4 gap-5 lg:gap-0 max-w-6xl mx-auto">
            <Result heading="IP ADDRESS" text={result?.ip} />
            <Result
                heading="LOCATION"
                text={`${result?.city}, ${result?.region_code}, ${result?.postal}`}
            />
            <Result
                heading="TIMEZONE"
                text={`UTC ${result?.utc_offset?.slice(
                    0,
                    3
                )}:${result?.utc_offset?.slice(3, 5)}`}
            />
            <Result heading="ISP" text={result?.org} end />
        </div>
    );
};

export default Results;
