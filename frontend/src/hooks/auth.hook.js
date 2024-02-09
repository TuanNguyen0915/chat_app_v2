/* eslint-disable react-hooks/rules-of-hooks */
import toast from "react-hot-toast";


const BASE_URL = import.meta.env.VITE_SERVER_URL;

function handleSignUpInPutError(formData) {
  const { fullName, username, password, confirmPassword, gender } = formData;
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("please fill in all the fields");
    return true;
  }
  if (password.length < 7) {
    toast.error("Password needed more than 6 character");
    return true;
  }
  if (password !== confirmPassword) {
    toast.error("Password does not match");
    return true;
  }
  return false;
}

function handleLogInInputError(formData) {
  const { username, password } = formData;
  if (!username || !password) {
    toast.error("please fill in all the fields");
    return true;
  }
  return false;
}

const signup = async (formData) => {
  
  try {
    const hasError = handleSignUpInPutError(formData);
    if (hasError) {
      return;
    }

    const res = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    //send user-data to local storage
    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

const login = async (formData) => {
 
  try {
    const hasError = handleLogInInputError(formData);
    if (hasError) {
      return;
    }
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

const logout = async () => {
  try {
    const res = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.success) {
      localStorage.removeItem("user");
    }
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export { signup, login, logout };
