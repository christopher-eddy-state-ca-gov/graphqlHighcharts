'use strict';
const fetch = require('node-fetch');


var url = 'https://files.covid19.ca.gov/data/tier-details/all-counties.json';

exports.GetDatasets = async () => {
    var json;
    try {
        const response = await fetch(url)
        json = await response.json()    
    } 
    catch (error) {
        console.log(error.response.body);
     }    
    console.log(`exports.Datasets=${json.dataset.length}`);
    return json.dataset;
}