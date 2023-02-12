import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbGx1cGF6YnJ2eXBtY2Zvdmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxODExNTEsImV4cCI6MTk5MTc1NzE1MX0.PcZHXjk8_ruWa83BSAdotsyFW4E4vwmcR4PkIJoHWt8",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbGx1cGF6YnJ2eXBtY2Zvdmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxODExNTEsImV4cCI6MTk5MTc1NzE1MX0.PcZHXjk8_ruWa83BSAdotsyFW4E4vwmcR4PkIJoHWt8",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function apiClient(method, url, options = {}) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
