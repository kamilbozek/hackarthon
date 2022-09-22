import React, { useState } from "react";

function Art() {
    const [url, setUrl] = useState('')

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
        console.log(artworkId)
        fetch(`https://apihackaton.zacheta.art.pl/api/v1/multimedia?fields=ThumbnailUrl&start=${artworkId}&limit=1`, requestOptions).then(res => {
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
            console.log(jsonData.data[0].attributes.ThumbnailUrl)
            setUrl(jsonData.data[0].attributes.ThumbnailUrl)
        })
    }
    return (
        <div>
            <p>
                <button onClick={fetch_data}>Get next artwork</button>
            </p>
            <p>
                <img src={url} width="500" />
            </p>
        </div>
    )
}

export default Art
