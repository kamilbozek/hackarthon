import React, {useEffect, useState} from "react";
import StyledMain from "../components/core/StyledMain";
import styled from "styled-components";
import DocumentTitle from "react-document-title";
import Footer from "../components/core/Footer";

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

    const artworkIds = [139, 57, 1, 41];

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
        headers.append("Authorization", "Bearer 4449dc1d8017ef0167589b420b89f2f4600b1e0c67725f9ede88575a464869c613ae7f5182bdaa160a2c7c759fd11896c595e658d9ea4b6351bdaf046df14695cf31c219fd559a65f68f068e54ac3c39813bef725a63ae5f95e54bff951a2684a6858f129e04c9cb1f10ff6106ec668f085306637a286f5f45f71969f00a87d4");
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
                <Footer/>
            </StyledMain>
        </DocumentTitle>
    )
}

export default Art
