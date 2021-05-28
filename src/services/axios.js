import Axios from 'axios';

export async function apiCall(method, url, dataObj, head, params) {
  let data;

  try {
    data = await Axios({
      method,
      url: `${process.env.VUE_APP_BACKEND_URL}/${url}`,
      data: dataObj,
      headers: {
        head,
      },
      params,
    });

    return data;
  } catch (e) {
    console.log(e);

    return e.response;
  }
}
