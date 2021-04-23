// From: https://www.digitalocean.com/community/tutorials/a-practical-graphql-getting-started-guide-with-nodejs
'use strict';
var https = require('https');
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var {schema} = require('./schema');
var {GetDatasets} = require('./data');

var datasets = [];

// Return a single user (based on id)
var getDataset = function(args) {
  var county = args.county;
  console.log(`getDataset(${county}) from ${datasets.length}`);
  return datasets.filter(ds => ds.COUNTY === county)[0];
}

// Return a list of users (takes an optional shark parameter)
var retrieveDatasets = function(args) {
  console.log(`retrieveDatasets ${JSON.stringify(args)}`);
  if (args.currentTier) {
    var currentTier = args.currentTier;
    console.log(`currentTier=${currentTier}`);
    return datasets.filter(ds => ds.CURRENT_TIER === currentTier);
  } else {
    return datasets;
  }
}


// Root resolver
var root = {
  dataset: getDataset,  // Resolver function to return user with specific id
  dataSets: retrieveDatasets
};



(async () => {



datasets = await GetDatasets();

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,  // Must be provided
  rootValue: root,
  graphiql: true,  // Enable GraphiQL when server endpoint is accessed in browser
}));
app.listen(8080, () => console.log('Now browse to localhost:8080/graphql'));
})();