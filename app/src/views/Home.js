import React from "react";
import {Link} from "react-router-dom";
import StyledMain from "../components/core/StyledMain";
import styled from "styled-components";
import DocumentTitle from "react-document-title";

const StyledParagraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  font-weight: 400;
  color: inherit;
  margin-bottom: 1rem;
`;

const StyledCta = styled(Link)`
  color: ${({ theme }) => theme.mainBlack};
  background: ${({ theme }) => theme.mainGrey};
  padding: 1rem;
`;

const Home = () => {

    return (
        <DocumentTitle title="Home Page">
            <StyledMain>
                <StyledParagraph>
                    Welcome in the virtual, multi sensual adventure
                </StyledParagraph>
                <p>
                    <StyledCta to="/art">start exploring</StyledCta>
                </p>
            </StyledMain>
        </DocumentTitle>
    );
};

export default Home;