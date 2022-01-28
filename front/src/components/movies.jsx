import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import {MoviesList} from './movieslist.jsx';

export const Movies = ({state, dispatch}) => {
    
  return (
    <div>
      <div className="app_container">
        <div className="list-container">
          <AutoSizer>
            {MoviesList(state, dispatch)}
          </ AutoSizer>
        </div>
      </div>
    </div>
  )
}

export default Movies;