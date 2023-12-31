import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getOpt } from "../apiRequest/api";
import Layout from "../layout/Layout";

const OtpPage = () => {
  const [pin, setPin] = useState("");
  // searchapram for get email paerameter;
  const [searchParam] = useSearchParams();
  const email = searchParam.get("email");

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    (async () => {
      let res = await getOpt(email, pin);

      if (res) {
        localStorage.setItem("token", res.data);
        navigate(`/`);
      } else {
        alert("something happend");
      }
    })();
  };
  return (
    <Layout>
      <div>
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1 gap-3">
            <div className="flex items-center w-full justify-center h-screen">
              <div className="card w-8/12 card-side bg-white shadow-xl">
                <figure>
                  <img
                    className="h-96 w-96"
                    src="/images/login-banner.png"
                    alt="Movie"
                  />
                </figure>
                <div className="card-body justify-center items-center">
                  <div className="w-8/12">
                    <h1 className="text-2xl my-4">PIN VERIFICATION</h1>
                    <p className="mb-4 text-gray-600 text-sm">
                      4 Digit Verification PIN has been send to your email
                    </p>
                    <input
                      value={pin}
                      onChange={(e) => {
                        setPin(e.target.value);
                      }}
                      type="text"
                      placeholder="4 Digit Pin"
                      className="input w-full bg-white rounded-lg input-bordered"
                    />
                    <button
                      onClick={loginUser}
                      className="btn rounded-lg w-full my-4 btn-primary"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OtpPage;
