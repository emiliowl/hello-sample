import React from 'react';

export interface HelloProps {
    text: string;
    onClick: () => void;
  }

export default function Hello(props :HelloProps) {
    return <div onClick={props.onClick}>{props.text}</div>;
}
