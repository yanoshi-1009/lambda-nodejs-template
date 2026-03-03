export const handler = async (event: { body: string }) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  try {
    return {
      statusCode: 200,
      body: "Success"
    };
  } catch (error: unknown) {
    console.error("Error occurred:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" })
    };
  }
};
