import axios from 'axios';

const API_URI = 'http://localhost:8000';

const API_GMAIL = async (UrlObject, payload, /*  requestData = {},*/ type) => {
  // const { params, urlParams, ...body } = requestData;

    return await axios({
        method: UrlObject.method,
        url: `${API_URI}/${UrlObject.endpoint}/${type}`,
        data: payload
    })
}

export default API_GMAIL;