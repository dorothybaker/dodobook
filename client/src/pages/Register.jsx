import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/authAction";
import { Link } from "react-router-dom";

function Register() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const handleSubmit = () => {
    const correctPassword = confirmPassword === values.password;
    if (correctPassword) {
      if (values.password.length < 8) {
        setError("** Password must be greater than 7 characters! **");
      } else {
        dispatch(register(values));
        setValues({
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
        });
        setError("");
        setConfirmPassword("");
      }
    } else {
      setError("** Confirm password must be the same as password! **");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center gap-4 lg:w-[70%] w-full mx-auto items-center flex-col px-2">
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
              Create an account with us today!
            </span>
          </div>
        </div>
        <div className="flex-1 bg-white px-3 py-4 rounded-xl flex flex-col gap-4 lg:w-[60%] md:w-[72%] sm:w-[85%] w-full">
          <h1 className="text-[17px] font-medium">Register your account.</h1>
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="flex gap-3 items-center">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-[#f3f3f3] outline-none py-2.5 px-3 border-gray-200 rounded-lg text-[15.5px]"
                value={values.firstName}
                onChange={(e) =>
                  setValues({ ...values, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-[#f3f3f3] outline-none py-2.5 px-3 border-gray-200 rounded-lg text-[15.5px]"
                value={values.lastName}
                onChange={(e) =>
                  setValues({ ...values, lastName: e.target.value })
                }
              />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-[#f3f3f3] outline-none py-2.5 px-3 border-gray-200 rounded-lg text-[15.5px]"
              value={values.username}
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-[#f3f3f3] outline-none py-2.5 px-3 border-gray-200 rounded-lg text-[15.5px]"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <div className="flex gap-3 items-center md:flex-row flex-col">
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#f3f3f3] outline-none py-2.5 px-3 border-gray-200 rounded-lg text-[15.5px]"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full bg-[#f3f3f3] outline-none py-2.5 px-3 border-gray-200 rounded-lg text-[15.5px]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <span className="text-red-500 text-sm">{error}</span>

            <button
              className={` p-2.5 rounded-lg mt-2 text-base ${
                loading
                  ? "bg-secondary/70 text-gray-100"
                  : "text-secondary bg-secondary"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting" : "Register"}
            </button>
            <span className="px-1 text-sm">
              Already have an account?{" "}
              <span className="text-primary cursor-pointer ml-1">
                <Link to="/login">Log in!</Link>
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
