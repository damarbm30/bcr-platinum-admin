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

    const result = await api.get(
      `/admin/v2/car?category=${category}&pageSize=50`,
      header
    );

    return result?.data?.cars;
  } catch (error) {
    console.log(error.message);
  }
};

export const createCars = async (data) => {
  try {
    const header = {
      headers: {
        accept: "application/json",
        access_token: JSON.parse(localStorage.getItem("adminCredential")),
      },
    };

    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "object") {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    }

    await api.post("/admin/car", formData, header);
  } catch (error) {
    console.log(error.message);
  }
};

export const editCars = async (data, id) => {
  try {
    const header = {
      headers: {
        accept: "application/json",
        access_token: JSON.parse(localStorage.getItem("adminCredential")),
      },
    };

    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "object") {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    }

    await api.put(`/admin/car/${id}`, formData, header);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCars = async (id) => {
  try {
    const header = {
      headers: {
        accept: "application/json",
        access_token: JSON.parse(localStorage.getItem("adminCredential")),
      },
    };

    await api.delete(`/admin/car/${id}`, header);
  } catch (error) {
    console.log(error.message);
  }
};
