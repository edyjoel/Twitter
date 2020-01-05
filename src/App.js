import React, { useState, useEffect } from 'react';

import { Container, Snackbar } from '@material-ui/core';

import Header from './components/Header';
import SendTweet from './components/SendTweet';

import ListTweets from './components/ListTweets';

import { TWEETS_STORAGE } from './utils/constants';

function App() {

  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  })

  const [realoadTweets, setRealoadTweets] = useState(false);


  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);

    const allTweetsArray = JSON.parse(AllTweetsStorage);

    setAllTweets(allTweetsArray);

    setRealoadTweets(false);

  }, [realoadTweets]);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setRealoadTweets(true);
  }

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header></Header>
      <SendTweet
        allTweets={allTweets}
        setToastProps={setToastProps}
      ></SendTweet>
      <ListTweets deleteTweet={deleteTweet} allTweets={allTweets}></ListTweets>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={toastProps.open}
        autoHideDuration={1000}
      message={<span id="message-id">{toastProps.text}</span>}
      ></Snackbar>
    </Container>
  );
}

export default App;
