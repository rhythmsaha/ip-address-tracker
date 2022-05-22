import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import Search from "./components/Search";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
    "pk.eyJ1Ijoicmh5dGhtc2FoYSIsImEiOiJja3MwaGhqeG8wYTRuMndwZXFwMWtvcGdrIn0.7u7WzVhiVLkk9a85o1XQ9A";

const App = () => {
    const mapContainerRef = useRef(null);

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
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,

            style: "mapbox://styles/mapbox/streets-v11",
            center: [result.longitude, result.latitude],
            zoom: 15,
        });

        return () => map.remove();
    }, [result]);

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

            <div
                className="map-container absolute bottom-0 right-0 left-0 top-80 lg:top-72 -z-10"
                ref={mapContainerRef}
            />
        </>
    );
};

export default App;
