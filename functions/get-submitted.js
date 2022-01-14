const query = require("./utils/query");

const GET_SUBMITTED = `
  query {
    allSubmitted {
      data {
        _id
        text
        problem_class
      }
    }
  }
 `;

  exports.handler = async () => {
     const { data, errors } = await query(GET_SUBMITTED);

     if (errors) {
        return {
          statusCode: 500,
          body: JSON.stringify(errors)
        };
     }

     return {
       statusCode: 200,
       body: JSON.stringify({ submitted: data.allSubmitted.data })
     };
   };
