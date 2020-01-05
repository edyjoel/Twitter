import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import ModalContainer from '../ModalContainer';
import FormSendtweet from '../FormSendTweet/';

import { TWEETS_STORAGE } from '../../utils/constants';

import "./SendTweet.scss";

export default function SendTweet(props) {

  const { setToastProps, allTweets } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  const sendTweet = (event, formValue) => {
    event.preventDefault();
    const { name, tweet } = formValue;
    let allTweetsArray = [];

    if(allTweets) {
      allTweetsArray = allTweets;
    }

    if(!name || !tweet) {
      setToastProps({
        open: true,
        text: "Todos los campos son requeridos"
      })
    }else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      setToastProps({
        open: true,
        text: "Tweet Enviado correctamente"
      })
      closeModal();
    }

    allTweetsArray = [];

  }

  return(
    <div className="send-tweet">
      <Fab
        onClick={openModal}
        className="send-tweet__open-modal"
        color="primary"
        arial-label="add"
      >
        <AddIcon></AddIcon>
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendtweet
          sendTweet={ sendTweet }
        ></FormSendtweet>
      </ModalContainer>

    </div>
  );
}