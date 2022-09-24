import React from "react";
import FooterLogos from "../../assets/footer-logos.png";
import styled from "styled-components";


const StyledLogo = styled.footer`
  background: ${({ theme }) => theme.mainGrey};
  text-align: center;
  width: "100%",
  height: "119px",
`

function Footer() {
    return (
        <div>
            <p style={{

            }}>
                <img src={FooterLogos} alt="footer logos"/>
            </p>
        </div>
    )
}

export default Footer;