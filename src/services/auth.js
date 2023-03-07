import api from "./config";

export const adminLogin = async (data, setIsError, navigate) => {
  try {
    const result = await api.post("/admin/auth/login", data);
    const accessToken = JSON.stringify(result.data.access_token);
    localStorage.setItem("adminCredential", accessToken);
    setIsError(false);
    navigate("/cars");
  } catch (error) {
    console.log(error);
    setIsError(true);
  }
};
