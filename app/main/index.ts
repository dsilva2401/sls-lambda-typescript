const main = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: 'world'
    }),
  };
}

export default main