import api from "./config";

export const getOrders = async (data) => {
  try {
    const result = await api.get(
      "/admin/order/reports?from=2022-10-01&until=2022-10-31"
    );

    return result?.data;
  } catch (error) {
    console.log(error.message);
  }
};
