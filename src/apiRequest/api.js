import axios from "axios";

const baseURL = "https://cart-api.teamrabbil.com/api";

export async function productList() {
  let res = await axios.get(baseURL + "/product-list");
  if (res.status === 200) {
    return res.data;
  } else {
    return alert("err");
  }
}
/// api for userlogin
export async function userLogin(email) {
  let res = await axios({
    method: "post",
    url: baseURL + "/user-login",
    data: {
      UserEmail: email,
    },
  });

  if (res.status === 200) {
    return res.data?.msg === "success" ? true : false;
  } else {
    return alert("err");
  }
}
// api for otp
export async function getOpt(email, otp) {
  let res = await axios({
    method: "post",
    url: baseURL + "/verify-login",
    data: {
      UserEmail: email,
      OTP: otp,
    },
  });

  if (res.status === 200) {
    return res.data?.msg === "success" ? res.data : false;
  } else {
    return alert("err");
  }
}

//Add to card api
export async function createCard(id) {
  let res = await axios({
    method: "get",
    url: baseURL + "/create-cart/" + id,
    headers: {
      token: localStorage.getItem("token"),
    },
  });

  if (res.status === 200) {
    return res.data?.msg === "success" ? true : false;
  } else {
    return false;
  }
}
