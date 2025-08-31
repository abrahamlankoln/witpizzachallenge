import './success.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

function success() {
  const history = useHistory();

  return (
    <div className="success">
<img src="/Success.png" alt="" />
    </div>
  );
}

export default success;

