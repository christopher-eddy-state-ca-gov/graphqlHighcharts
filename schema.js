var { buildSchema } = require('graphql');

// Initialize a GraphQL schema
exports.schema = buildSchema(`
  type Query {
    dataset(county: String!): dataset
    dataSets(currentTier: Int): [dataset]
  },
  type dataset {
    COUNTY: String,
    DATE: String
    CURRENT_TIER: Int,
    TIER_STATUS_WEEK: Int,
    CASE_RATE_TIER: Int,
    TEST_POSITIVITY_TIER: Int,
    ADJ_FACTOR: Float,
    TOTAL_NEW_CASES: Int,
    POSITIVE_TESTS: Int,
    TOTAL_TESTS: Int,
    POPULATION: Int,
    COUNTY_TEST_NUMBER: Int,
    COUNTY_CASE_NUMBER: Int,
    FILE_PATH: String,
    SF_LOAD_TIMESTAMP: String,
    HEALTH_EQUITY_METRIC: Float,
    HEALTH_EQUITY_REQ_MET: Int,
    DATA_RELEASE_TIMESTAMP: String
  }
`);
