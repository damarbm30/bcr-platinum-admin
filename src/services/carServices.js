import api from "./config";

export const getCars = async () => {
  try {
    const result = await api.get(`/admin/v2/car?pageSize=50`, {
      headers: {
        access_token: JSON.parse(localStorage.getItem("adminCredential")),
      },
    });
    return result?.data?.cars;
  } catch (error) {
    console.log(error.message);
  }
};

export const createCar = async (data) => {
  try {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "object") {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    }

    return await api.post("/admin/car", formData, {
      headers: {
        access_token: JSON.parse(localStorage.getItem("adminCredential")),
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const editCar = async (data, id) => {
  try {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "object") {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    }

    return await api.put(`/admin/car/${id}`, formData, {
      headers: {
        access_token: JSON.parse(localStorage.getItem("adminCredential")),
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCar = async (id) => {
  try {
    return await api.delete(`/admin/car/${id}`, {
      headers: {
        access_token: JSON.parse(localStorage.getItem("adminCredential")),
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
