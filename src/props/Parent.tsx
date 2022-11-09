import React from 'react';
import { ChildAsFC } from './Child';

export default function Parent() {
  return (
    <ChildAsFC
      color="red"
      onClick={() => {
        console.log('CLICK');
      }}
    >
      <h3>Something Else</h3>
    </ChildAsFC>
  );
}
