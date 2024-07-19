import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../actions/authAction";
import { Link } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const handleSubmit = () => {
    try {
      dispatch(logIn(values));
      setValues({
        username: "",
        password: "",
      });
      setError("");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data);
    } finally {
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center gap-4 lg:w-[70%] w-full mx-auto items-center flex-col">
        <div className="flex items-center gap-2 flex-1 flex-col text-center px-2">
          <h1 className="text-3xl text-primary font-medium">dodobook</h1>
          <div className="flex flex-col gap-0 text-[14.5px]">
            <span className="text-gray-700">
              Connect with us, and let your voice be heard.
            </span>
            <span className="text-gray-600">
              Inspire, engage, and create a social movement to define yourself
              the way you want!
            </span>
            <span className="text-gray-500">
              Welcome back, login to access your account!
            </span>
          </div>
        </div>
        <div className="flex-1 bg-white px-3 py-4 rounded-xl flex flex-col gap-4 sm:w-[500px] w-full">
          <h1 className="text-[17px]">Log into your account.</h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-[#f3f3f3] outline-none py-2.5 px-3 border-gray-200 rounded-lg text-[15.5px]"
              value={values.username}
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#f3f3f3] outline-none py-2.5 px-3 border-gray-200 rounded-lg text-[15.5px]"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            />

            <button
              className={`p-2.5 rounded-lg mt-2 w- ${
                loading
                  ? "bg-secondary/70 text-gray-100"
                  : "text-secondary bg-secondary"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting" : "Log in"}
            </button>
            <span className="px-1 text-sm">
              First time using dodobook?{" "}
              <span className="text-primary cursor-pointer ml-1">
                <Link to="/register">Register!</Link>
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
