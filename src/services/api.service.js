import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const authInterceptor = (config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  config.headers.RefreshToken = `Bearer ${localStorage.getItem(
    "refreshToken"
  )}`;
  return config;
};
const headersInterceptor = (config) => {
    config.headers['Content-Type'] = 'application/json';
 
    return config;
  };

$host.interceptors.request.use(headersInterceptor);

$authHost.interceptors.request.use(authInterceptor);

$authHost.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401) {
      try {
        const response = await $authHost.get(
          `${process.env.REACT_APP_URL}/user/refresh`
        );
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        return $authHost.request(originalRequest);
      } catch (e) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }
    throw error;
  }
);

export { $host, $authHost };
