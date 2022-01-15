require("dotenv").config();

const axios = require("axios");

module.exports = async (query, variables) => {
  const result = await axios({
      url: "https://graphql.us.fauna.com/graphql",
      method: "POST",
      headers: {
          Authorization: `Bearer ${process.env.FAUNA_CS_SERVER_KEY}`
      },
      data: {
        query,
        variables
      }
  });

  return result.data;
};