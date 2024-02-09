import toast from "react-hot-toast"

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const getAllUsers = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      method:"GET",
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }
    )
    const data = await res.json()
    return data
  } catch (error) {
    toast.error(error.message)
  }
}

export {getAllUsers}