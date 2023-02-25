import styled from "styled-components";

const LoginError = () => {
  const Warning = styled.div`
    background-color: var(--primaryRed);
  `;

  return (
    <Warning className="card card-body mb-4 text-danger border-0">
      Masukkan username dan password yang benar. Perhatikan penggunaan huruf
      kapital.
    </Warning>
  );
};
export default LoginError;
