import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import moment from 'moment';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

import './Tweet.scss';

export default function Tweet(props) {
  const { tweet: {name, tweet, time}, index, deleteTweet } = props;
  return (
    <Card className="tweet">
      <CardContent >
        <div className="tweet__header">
          <h5>{name}</h5>
          <DeleteTwoToneIcon onClick={()=>{
            deleteTweet(index)
          }}></DeleteTwoToneIcon>
        </div>
        <p>{tweet}</p>
        <div className="tweet__date-add-tweet">
          {moment(time).format("DD/MM/YYYY HH:mm")}
        </div>

      </CardContent>
    </Card>
  );
}