import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    position:'relative',
    width: '700px',
    zIndex: 0,
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  video2: {
    position:'relative',
    width: '100px',
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  paper: {
    border: '2px solid black',
    margin: '10px',
    backgroundColor: 'black',
    color: 'Cornsilk',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <div className="v1">
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h8" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={callAccepted && !callEnded?classes.video2:classes.video} />
          </Grid>
        </Paper>
      )}
      </div>
      <div className="v2">
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h8" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      </div>
    </Grid>
  );
};

export default VideoPlayer;
