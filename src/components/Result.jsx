import React from "react";

const Result = ({ heading, text, end }) => {
    return (
        <div
            className={`w-full px-8 lg:px-10 text-center lg:text-left space-y-1  ${
                !end && "lg:border-r"
            }`}
        >
            <h2 className="text-xs lg:text-sm font-medium text-gray-400">
                {heading}
            </h2>
            <p className="font-semibold  text-lg lg:text-xl overflow-x-auto">
                {text}
            </p>
        </div>
    );
};

export default Result;
