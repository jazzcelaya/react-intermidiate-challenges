import React from "react"

const MediaSnippet = ({mediaType, url}) => {
    return(
        <div>
            <media>
                <source media="(min-width:650px)" srcset={url}></source>
                <source media="(min-width:465px)" srcset={url}></source>
                <img src={url} alt="Flowers" ></img>
            </media>
        </div>
    )
} 
export default MediaSnippet