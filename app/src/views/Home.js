import React from "react";
import {Link} from "react-router-dom";
import StyledMain from "../components/core/StyledMain";
import styled from "styled-components";
import DocumentTitle from "react-document-title";
import Footer from "../components/core/Footer";
import ReactLogo from "../assets/logo.svg";

const StyledParagraph = styled.p`
  font-weight: 500;
  font-size: 27px;
  line-height: 40px;
  margin-bottom: ${({ theme }) => theme.margin};
`;

const StyledHeading1 = styled.h1`
  font-family: ${({ theme }) => theme.openSans};
  color: ${({ theme }) => theme.primaryText};
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  margin-bottom: ${({ theme }) => theme.margin};
`;

const StyledHeading2 = styled.h2`
  font-family: ${({ theme }) => theme.openSans};
  color: ${({ theme }) => theme.primaryText};
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: ${({ theme }) => theme.margin};
`;


const StyledCta = styled(Link)`
  // color: ${({ theme }) => theme.mainBlack};
  // background: ${({ theme }) => theme.primaryButton};
  padding: 1.5rem;
  margin: 1.5rem;

  background: #ECDDD9;
  box-shadow: 7px 7px 0px rgba(0, 43, 129, 0.75);
  border-radius: 20px;
  //flex: none;
  order: 0;
  flex-grow: 0;

  left: calc(50% - 325px/2 - 0.5px);
  top: calc(50% - 41px/2 + 0.5px);

  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;

  display: flex;
  align-items: center;
  text-align: center;
  color: #0B0626;
`;

const StyledLogo = styled.img`
  position: absolute;
  width: 162px;
  height: 162px;
  left: 80px;
  top: 172px;
`

const Home = () => {

    return (
        <DocumentTitle title="Home Page">
            <StyledMain>
                <img src={ReactLogo} alt="React Logo" />
                <div>
                    <StyledHeading1>
                        Witaj w wirtualnej, wielozmysłowej wyprawie po kolekcji sztuki!
                    </StyledHeading1>

                    <StyledParagraph>
                        Niektóre z prezentowanych tu dzieł sztuki mają interaktywną formę - możesz po nich nawigować za pomocą ruchów głowy, komend głosowych i klawiatury.
                    </StyledParagraph>

                    <StyledHeading2>
                        Czy chcesz wypróbować interaktywne dzieło?
                    </StyledHeading2>

                    <p>
                        <StyledCta to="/art">Go to tutorial</StyledCta>
                        <StyledCta to="/art">Skip tutorial</StyledCta>
                    </p>
                </div>
                <Footer/>
            </StyledMain>
        </DocumentTitle>
    );
};

export default Home;