export class HTTPService {
  static request({ path, ...params }) {
    const baseUrl = "https://jsonplaceholder.typicode.com/";
    const url = path ? baseUrl + path : baseUrl;
    return fetch(url, params).then((res) => {
      return this.parseResponse(res);
    });
  }

  static getRequest(path, params = {}) {
    return this.request({ method: "GET", path, ...params });
  }

  static postRequest(path, body) {
    return this.request({
      path,
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(body),
    });
  }

  static parseResponse(response) {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 401) {
      return "redirect";
    }
    return Promise.reject(response.json());
  }
}
