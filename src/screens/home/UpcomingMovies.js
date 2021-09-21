import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
function UpcomingMovies(props) {
  // use state for ucoming movies... each grid will carry single movie
 //console.log(props.movies);
 
const classes = useStyles();
  return (
    
    <div className="upComingContainer">
      <div className="promoBar">Upcoming Movies</div>
      <div className="upcomingMovieList">
      <ImageList cols={6} rowHeight={230} className={classes.imageList} >
        {props.movies.map((item) => (
          <ImageListItem key={item.Poster} >
          <Link to={"/movie/"+item.imdbID} > <img src={item.Poster} alt={item.Title} />
            <ImageListItemBar
              title={item.Title}
            /> 
          </Link>
          </ImageListItem>
        ))}
      </ImageList>
       
      </div>
    </div>
  );
}

export default UpcomingMovies;
