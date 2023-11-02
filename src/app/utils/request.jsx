
import axios from "axios";
// import { USER_LOGOUT } from "../Redux/SagaAction/actions";
import store from "../Redux-Toolkit/store";

const requestApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});


requestApi.interceptors.request.use((req) => {
  const authToken = JSON.parse(localStorage.getItem("authToken"))

  if (authToken || req?.data?.authToken) {
    let tokens = req?.data?.authToken ?? "";
    let newtoken = authToken ?? tokens;
    req.headers = {
      Authorization: `Bearer ${newtoken}`,
      // "Content-Type": "application/x-www-form-urlencoded"
    };
  } if(authToken === null){
    req.headers = {
      isGuest : true
    }
  }
  return Promise.resolve(req);
});

requestApi.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data?.meta?.status === 1) {
      return Promise.resolve(data);
    } else {
      // store.dispatch({type : "test", payload : "/test"})
        // history.push("/hello")
        // window.location.href = "/";
      let error = {
        message: "Something went Wrong",
        statusCode: 500,
      };
      error.message = data.meta.message;
      error.statusCode = data.statusCode;
      return Promise.reject(error);
    }
  },
  function (error) {
    // return Promise.reject(error?.response?.data);
      if (error?.response?.status === 401) {
            // localStorage.removeItem('admin')
            // localStorage.removeItem('nobleauthToken')
            // store.dispatch({
            //     type: USER_LOGOUT
            // })
        } else {
            return Promise.reject(
                error?.response?.data ?? {
                    message: 'Something went Wrong',
                    statusCode: 500
                }
            )
        }
  }
);

export default requestApi;
