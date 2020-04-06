import React from 'react'
import Tweet from './Tweet'


const TweetManaged = ({ tweetContents }) => {
    const [isRetweeted, setIsRetweeted] = React.useState(false)
    const [isLiked, setIsLiked] = React.useState(false)


    const [numOfRetweets, setNumOfRetweets] = React.useState(Math.round(Math.random() * 100))

    const [numOfLikes, setNumOfLikes] = React.useState(Math.round(Math.random() * 1000))


    return (
        <Tweet
            tweetContents={tweetContents}
            displayName="Carmen Sandiego ✨"
            username="carmen-sandiego"
            avatarSrc={avatar}
            timestamp={new Date()}
            // The following 3 values are driven by React state hooks:
            numOfRetweets={state.numOfRetweets}
            numOfLikes={state.numOfLikes}
            isLikedByCurrentUser={state.isLiked}
            isRetweetedByCurrentUser={state.isRetweeted}
            // The following 2 values should dispatch an action to change the state:
            handleToggleLike={() => {
                setNumOfLikes(isLiked ? numOfLikes - 1 : numOfLikes + 1)
                setIsLiked(!isLiked)
            }}
            handleToggleRetweet={() => {
                setNumOfRetweets(isRetweet ? numOfRetweets - 1 : numOfRetweets + 1)
                setIsRetweeted(!isRetweeted);
            }}
        />



    )
}




export default TweetManaged