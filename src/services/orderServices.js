import api from "./config";

// export const getDailyOrders = async (data) => {
//   try {
//     const date = data?.date.split(",");
//     const firstDate = date[0].trim();
//     const lastDate = date[1].trim();

//     const result = await api.get(
//       `/admin/order/reports?from=${firstDate}&until=${lastDate}`,
//       {
//         headers: {
//           access_token: JSON.parse(localStorage.getItem("adminCredential")),
//         },
//       }
//     );

//     return result?.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getOrders = async () => {
//   try {
//     const result = await api.get(
//       "/admin/v2/order?sort=created_at%3Aasc&page=1&pageSize=1000",
//       {
//         headers: {
//           access_token: JSON.parse(localStorage.getItem("adminCredential")),
//         },
//       }
//     );

//     return result?.data?.orders;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
