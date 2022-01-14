const axios = require("axios");

 module.exports = async (query, variables) => {
   const result = await axios({
       url: "https://graphql.us.fauna.com/graphql",
       method: "POST",
       headers: {
           Authorization: `Bearer fnAEc7QeL0AAQCw-3WDdhPzK6BpIIaDVca1iaXvE`
       },
       data: {
         query,
         variables
       }
  });

  return result.data;
 };