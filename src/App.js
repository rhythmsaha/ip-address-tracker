import { useEffect, useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import Search from "./components/Search";

const App = () => {
    const [result, setResult] = useState({
        ip: "192.212.174.101",
        version: "IPv4",
        city: "Rosemead",
        region: "California",
        region_code: "CA",
        country: "US",
        country_name: "United States",
        country_code: "US",
        country_code_iso3: "USA",
        country_capital: "Washington",
        country_tld: ".us",
        continent_code: "NA",
        in_eu: false,
        postal: "91770",
        latitude: 34.0648,
        longitude: -118.086,
        timezone: "America/Los_Angeles",
        utc_offset: "-0700",
        country_calling_code: "+1",
        currency: "USD",
        currency_name: "Dollar",
        languages: "en-US,es-US,haw,fr",
        country_area: 9629091.0,
        country_population: 327167434,
        asn: "AS7127",
        org: "SCE",
    });

    useEffect(() => {
        fetch(`https://ipapi.co/json/`)
            .then((res) => res.json())
            .then((data) => setResult(data))
            .catch((e) => console.log((e) => e.message));
    }, []);

    const fetchData = (ip) => {
        fetch(`https://ipapi.co/${ip}/json/`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setResult(data);
                }
            })
            .catch((e) => console.log(e.message));
    };

    return (
        <>
            <Header />
            <section className="w-10/12 mx-auto -mt-56 lg:-mt-44 space-y-6 lg:space-y-8">
                <Search onSearch={fetchData} />
                <Results result={result} />
            </section>

            <div className="absolute top-80 lg:top-72 bottom-0 right-0 left-0 -z-10">
                <iframe
                    title="map"
                    width="100%"
                    height="100%"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDE2ZiptdG1UYwQfPZfk_7248dF8Wf8TlU&q=${result?.latitude},${result?.longitude}`}
                ></iframe>
            </div>
        </>
    );
};

export default App;
