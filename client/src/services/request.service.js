const request = async (requestData) => {
  const {
    url,
    method = "POST",
    body = {},
    headers = {},
    token = true,
  } = requestData;

  try {
    headers["Content-Type"] = "application/json";
    const getLocalStorage = localStorage.getItem("userData");
    if (token === true && getLocalStorage !== null) {
      let getToken = JSON.parse(getLocalStorage).token;
      body["authorization"] = `Bearer ${getToken}`;
    }

    const requestBody = JSON.stringify(body);
    const response = await fetch(url, { method, body: requestBody, headers });
    const isOk = response.ok;
    
    const data = await response.json();

    return { data, isOk };
  } catch (e) {
    console.log("request error");
  }
};

export { request };
