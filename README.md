# Higher-Order Functions and JSON

## Objectives

* Use Map, Filter, and Reduce functions to mine data from a JSON file.

## Instructions

Write your code in `hof.js`.
Use `node hof.js` to run.

`volcano.json` contains a data set of 804 historical volcanic eruptions.  Below is a sample of the data for each eruption.

```JSON
  {
    "Year": 1362,
    "TSU": "",
    "EQ": "",
    "Name": "Oraefajokull",
    "Location": "Iceland-SE",
    "Country": "Iceland",
    "Latitude": 64,
    "Longitude": -16.65,
    "Elevation": 2119,
    "Type": "Stratovolcano",
    "VEI": 5,
    "Agent": "T,F",
    "Deaths": 220
  }
```

Use `filter`, `map`, `reduce` and any other higher-order functions to analyze the data in the following ways:

1. Return the volcanoes that erupted in the 1970s.
1. Return an array of the names of volcanoes that had an eruption with a Volcanic Explosivity Index (VEI) of 7 or higher.
1. Return the eruption with the highest number of recorded deaths.
1. Return the percentage of eruptions that caused mudflows (Agent_Code "M" for Mudflow).
1. Return the most common type of volcano in the set.

--Extra Practice
1. Return the number of eruptions when supplied a country as an argument.
1. Return the average elevation of all eruptions.
1. Return an array of types of volcanoes.
1. Return the percentage of eruptions that occurred in the Northern Hemisphere.
1. Return the names of eruptions that occurred after 1900, that did NOT cause a mudflow, happened in the Southern Hemisphere, and had a VEI of 5.
1. Return the names of eruptions that occurred at or above an elevation passed in as an argument.
1. Return the agents of death for the ten most deadly eruptions.


### References

Volcano data retrieved from: National Geophysical Data Center / World Data Service (NGDC/WDS): Significant Volcanic Eruptions Database. National Geophysical Data Center, NOAA. [doi:10.7289/V5JW8BSH](https://data.nodc.noaa.gov/cgi-bin/iso?id=gov.noaa.ngdc.mgg.hazards:G10147)
