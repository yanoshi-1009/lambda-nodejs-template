const Page = require("./Page");

exports.handler = async () => {
  "use strict";

  try {
    const page = new Page(process.env.id, process.env.pass);
    await page.init(process.env.TERM_PROGRAM);

    await page.close();

    return {
      statusCode: 200,
      body: "Success"
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error.body)
    };
  }
};
