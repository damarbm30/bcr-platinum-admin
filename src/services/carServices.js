import api from "./baseUrl";

export const getCars = async (data) => {
  try {
    const header = {
      headers: {
        accept: "application/json",
        access_token: JSON.parse(localStorage.getItem("adminCredential")),
      },
    };

    const category = data ? data : "";

    const result = await api.get(`/admin/v2/car?category=${category}`, header);
  } catch (error) {
    console.log(error.message);
  }
};
