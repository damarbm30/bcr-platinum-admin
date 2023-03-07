import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { useEffect } from "react";
import moment from "moment/moment";

import { InnerSidebar, Breadcrumb } from "../../components";
import useOrder from "../../store/orderList";
import { getOrders } from "../../services/orderServices";

const Container = styled.div`
  display: flex;
  min-height: 100%;
  position: relative;
  left: 280px;
  width: calc(100% - 280px);
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  top: 54px;
  background-color: var(--background);
`;

const Dashboard = () => {
  const orderList = useOrder((state) => state.orderList);
  const setOrderList = useOrder((state) => state.setOrderList);

  useEffect(() => {
    async function getOrdersAsync() {
      const result = await getOrders();
      setOrderList({
        orderList: result,
        total: result?.length,
      });
    }

    getOrdersAsync();
  }, []);

  return (
    <Container>
      <InnerSidebar />
      <Wrapper>
        <div className="d-flex flex-column p-4 gap-4">
          <Breadcrumb dashboard />
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={500}
              height={300}
              data={orderList}
              margin={{ top: 0, right: 30, left: 30, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey={(day) => moment(day.day, "YYYY/MM/DD").format("DD")}
                label={{
                  value: "Date",
                  position: "bottom",
                }}
              />
              <YAxis>
                <Label
                  position="left"
                  angle={-90}
                  style={{ textAnchor: "middle" }}
                >
                  Amount of Cars Rented
                </Label>
              </YAxis>
              <Tooltip />
              <Bar dataKey="orderCount" fill="#586B90" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Wrapper>
    </Container>
  );
};
export default Dashboard;
