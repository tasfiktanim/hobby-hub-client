import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Name validation
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters.");
      return;
    } else {
      setNameError("");
    }

    // Password validation
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      toast.error("Password must be at least 6 characters.");
      return;
    }
    if (!upperCaseRegex.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      toast.error("Password must include an uppercase letter.");
      return;
    }
    if (!lowerCaseRegex.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      toast.error("Password must include a lowercase letter.");
      return;
    }

    setPasswordError("");

    // Register
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
            setUser(user);
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset space-y-2">
            {/* Name  */}
            <label className="label">Name</label>
            <input name="name" type="text" className="input input-bordered" placeholder="Name" required />
            {nameError && <p className="text-xs text-red-500">{nameError}</p>}

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input name="photo" type="text" className="input input-bordered" placeholder="Photo URL" required />

            {/* Email */}
            <label className="label">Email</label>
            <input name="email" type="email" className="input input-bordered" placeholder="Email" required />

            {/* Password */}
            <label className="label">Password</label>
            <input name="password" type="password" className="input input-bordered" placeholder="Password" required />
            {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}

            <button type="submit" className="btn btn-neutral mt-4">Register</button>

            <p className="font-semibold text-center pt-5">
              Already Have An Account?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
