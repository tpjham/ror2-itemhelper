import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { blue, grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  infoDiv: {
    backgroundColor: grey[900],
    color: "white",
    visibility: "inherit"
  },
  section1: {
    backgroundColor: blue[900],
    justifyContent: "center",
    overflow: "clip",
    paddingTop: 7,
    paddingLeft: 4,
    paddingRight: 4
  },
  section2: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    margin: 0
  },
}));

const InfoDiv = ({item}) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.infoDiv}>
        <div className={classes.section1}>
          <Grid container alignContent="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" align="center">
                {item.Item}
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.section2}>
          <div>
            <Typography variant="body1">
              <b>Description:</b><br/>
              {item.Description}
            </Typography>
          </div>
          <div>
            <Typography gutterBottom variant="body1">
              <b>{item["Stack Type"] ? "Stack Type:" : "Cooldown:"}</b><br/>
              {item["Stack Type"] ? item["Stack Type"] : item["Cooldown"]}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDiv;