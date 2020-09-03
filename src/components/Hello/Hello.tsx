import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

export interface HelloProps {
    title: string;
    text: string;
    actionText: string;
    onClick: () => void;
  }

export default function Hello(props :HelloProps) {
    return (
      <Jumbotron>
        <h1>{props.title}</h1>
        <p>
          {props.text}
        </p>
        <div>
          <button type="button" onClick={props.onClick}>{props.actionText}</button>
        </div>
      </Jumbotron>
    );
}
