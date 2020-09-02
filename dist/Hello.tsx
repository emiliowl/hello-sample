import React from 'react';

export interface HelloProps {
    text: string;
    onClick: () => void;
  }

export default function Hello({text, onClick}) {
    return <div onClick={onClick}>{text}</div>;
}
