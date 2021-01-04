import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loader = () => (
  <Spinner
    animation='border'
    variant='secondary'
    role='status'
    style={{
      width: '75px',
      height: '75px',
      margin: 'auto',
      display: 'block',
    }}
  ></Spinner>
);

export default Loader;
