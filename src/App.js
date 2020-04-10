import React, { useState } from "react";
import Select from "react-select";
import countries from "./lib/countries.json";

import countryShapes from "./lib/country_shapes";
// object of all countries with key of 3 letter code
// { "SWE": swedenGeoJson }

import "./App.css";

const sortLabels = (a, b) => {
  if (a.label > b.label) return 1;
  if (b.label > a.label) return -1;

  return 0;
};

const countryOptions = countries
  .map((json) => ({
    label: json.name.common,
    value: json.cca3,
  }))
  .sort(sortLabels);

function App() {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
        options={countryOptions}
      />
      <pre>selected option: {JSON.stringify(selectedOption, null, 2)}</pre>
      {!!selectedOption ? (
        <pre>
          active geojson:
          {JSON.stringify(countryShapes[selectedOption.value], null, 2)}
        </pre>
      ) : (
        <p>Please select country</p>
      )}
    </div>
  );
}

export default App;
