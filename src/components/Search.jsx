import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Search = ({ onSearch }) => {
    const [text, setText] = useState("");

    const inputChangeHadnler = (e) => {
        setText(e.target.value);
    };

    function ValidateIPaddress(ipaddress) {
        if (
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                ipaddress
            )
        ) {
            return true;
        }
        window.alert("You have entered an invalid IP address!");
        return false;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!ValidateIPaddress(text)) return;

        onSearch(text);
    };

    return (
        <form
            className="flex rounded-lg overflow-hidden mx-auto max-w-3xl"
            onSubmit={submitHandler}
        >
            <input
                type="text"
                className="flex-1 py-3 px-6 lg:py-5 outline-none placeholder:text-gray-200 font-medium text-gray-600 text-lg min-w-0 tracking-wide"
                placeholder="IP address..."
                onChange={inputChangeHadnler}
                value={text}
            />
            <button
                type="submit"
                className="bg-black w-12 flex justify-center items-center lg:w-20"
            >
                <ChevronRightIcon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
            </button>
        </form>
    );
};

export default Search;
