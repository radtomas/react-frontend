import axios from "axios";

const request = async ({
                         method,
                         url,
                         token,
                         data = null
                       }) => {
  let response = null;
  try {
    const header = {
      "Content-Type": "application/json"
    };
    if (token)
      header["Authorization"] = `Token ${token}`;
    const apiResponse = await axios({
      method, url, data, header
    });
    response = {
      data: apiResponse.data,
      success: true
    }
  } catch (e) {
    response = {success: false, data: e.response};
  }
  return response;
};

export default {
  request
};