import React from 'react';
import { Link } from 'react-router-dom';

const Issues = props => {
  return (
  <div className="issues">
      {props.issues.map((issue, i) => (
        <Link to={`/issues/${issue.number}`}>
          <h4 key={i}>{issue.title}</h4>
          <p>#{issue.number}</p>
        </Link>
        ))
      }
  </div>
  )
}

export default Issues;