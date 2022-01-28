import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import {MoviesList} from './movieslist.jsx';

export const Movies = ({n_items}) => {
    
  return (
    <div>
      <div className="app_container">
        <div className="list-container">
          <AutoSizer>
            {MoviesList()}
          </ AutoSizer>
        </div>
      </div>
    </div>
  )
}

export default Movies;