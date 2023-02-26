import styled from "styled-components";

const Sidebar = ({ innerRef }) => {
  const Sidebar = styled.div`
    background-color: var(--primaryBlue);
    height: 100vh;
    width: 70px;
    z-index: 1050;
  `;

  return (
    <Sidebar>
      <div ref={innerRef} className="text-white">
        Sidebar
      </div>
    </Sidebar>
  );
};
export default Sidebar;
