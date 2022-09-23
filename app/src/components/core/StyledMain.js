import styled from "styled-components";

const StyledMain = styled.main`
  animation-duration: .5s;
  animation-name: fadein;

  @keyframes fadein {
    from {
      opacity:0;
    }
    to {
      opacity: 100%;
    }
  }
`;

export default StyledMain;