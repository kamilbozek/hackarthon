import React, {useEffect, useState} from "react";
import StyledMain from "../components/core/StyledMain";
import styled from "styled-components";
import DocumentTitle from "react-document-title";

const StyledCta = styled.button`
  color: ${({ theme }) => theme.mainBlack};
  background: ${({ theme }) => theme.mainGrey};
  padding: 1rem;
  border: none;
  display: inline-block;
  margin-right: 1rem;
`;

function Art() {
    const [url, setUrl] = useState('')
    const [counter, setCounter] = useState(0)

    const artworkIds = [139, 57, 1];

    useEffect(() => {
        fetch_data();
    }, [counter]);

    function random_artwork_id() {
        var min = 1
        var max = 20
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function fetch_data() {
        var headers = new Headers()
        headers.append("Authorization", "Bearer <TOKEN>");
        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        var artworkId = random_artwork_id();
        // console.log(artworkId)
        fetch(`https://apihackaton.zacheta.art.pl/api/v1/multimedia/${artworkIds[counter]}`, requestOptions).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.log("NOT OKKK")
            }
            throw new Error('API request failed')
        },
            error => console.log(error.message)
        ).then(jsonData => {
            console.log(jsonData)
            console.log(jsonData.data?.attributes?.ThumbnailUrl)
            setUrl(jsonData.data?.attributes?.ThumbnailUrl)
        })
    }

    const increaseCounter = () => {
        if (counter < artworkIds.length - 1) {
            setCounter(counter + 1);
        } else {
            setCounter(0)
        }
    };

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(counter-1);
        } else {
            setCounter(0)
        }
    };

    return (
        <DocumentTitle title="Art Browser Page">
            <StyledMain>
                <p>
                    <StyledCta onClick={decreaseCounter}>Get prev artwork</StyledCta>
                    <StyledCta onClick={increaseCounter}>Get next artwork</StyledCta>
                </p>
                <p>
                    <img src={url} width="500" alt="Artwork"/>
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </StyledMain>
        </DocumentTitle>
    )
}

export default Art
