import { Link } from "react-router-dom";
import styled from "styled-components";

import { InnerSidebar, Breadcrumb } from "../../components";

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
  return (
    <Container>
      <InnerSidebar />
      <Wrapper>
        <div className="d-flex flex-column p-4 gap-4">
          <Breadcrumb dashboard />
        </div>
      </Wrapper>
    </Container>
  );
};
export default Dashboard;
