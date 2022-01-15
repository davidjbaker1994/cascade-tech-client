const query = require("./utils/query");

const SUBMIT_TICKET = `
  mutation($text: String!, $problem_class: Int!){
    createSubmitted(data: {text: $text, problem_class: $problem_class}){
      _id
      text
      problem_class
    }
  }
`;

export async function handler(event) {
  const { text, problem_class } = JSON.parse(event.body);
  const { data, errors } = await query(
          SUBMIT_TICKET, { 
text, problem_class});

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ testimonial: data.createSubmitted })
  };
}