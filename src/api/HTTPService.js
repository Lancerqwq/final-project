export class HTTPService {
  baseUrl = "https://jsonplaceholder.typicode.com/";
  // baseUrl = "https://run.mocky.io/v3/491c00bb-f427-44c9-b4a4-2cd2ed9f5aad";

  request({ path, ...params }) {
    const url = path ? this.baseUrl + path : this.baseUrl;
    return fetch(url, params).then((res) => {
      return this.parseResponse(res);
    });
  }

  getRequest(path, params = {}) {
    return this.request({ method: "GET", path, ...params });
  }

  postRequest(path, body) {
    return this.request({
      path,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(body),
    });
  }

  parseResponse(response) {
    switch (this.response.status) {
      case 200: {
        return response.json();
      }
      case 401: {
        return "Error";
      }
      default: {
        return Promise.reject(response.json());
      }
    }
  }
}
