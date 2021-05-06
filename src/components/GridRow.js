import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InfoDiv from './InfoDiv';

const useStyles = makeStyles((theme) => ({
  common: {
    flexGrow: 1,
    width: "20.9vw",
    position: "absolute",
    top: "31.2vh",
    left: "39.4vw",
    border: "1px solid white",
  },
  uncommon: {
    flexGrow: 1,
    width: "20.9vw",
    position: "absolute",
    top: "31.2vh",
    left: "39.4vw",
    border: "1px solid green",
  },
  legendary: {
    flexGrow: 1,
    width: "20.9vw",
    position: "absolute",
    top: "35vh",
    left: "39.4vw",
    border: "1px solid red",
  },
  lunar: {
    flexGrow: 1,
    width: "20.9vw",
    position: "absolute",
    top: "39vh",
    left: "39.4vw",
    border: "1px solid blue",
  },
  boss: {
    flexGrow: 1,
    width: "20.9vw",
    position: "absolute",
    top: "42.8vh",
    left: "39.4vw",
    border: "1px solid yellow",
  },
  equipment: {
    flexGrow: 1,
    width: "20.9vw",
    position: "absolute",
    top: "35vh",
    left: "39.4vw",
    border: "1px solid orange",
  },
  lunarEq: {
    flexGrow: 1,
    width: "16.8vw",
    position: "absolute",
    top: "46.5vh",
    left: "41.5vw",
    border: "1px solid blue",
  },
  row: {
    marginBottom: "1vh"
  },
  paper: {
    height: 70,
    width: 70,
    marginRight: "0.25vw",
    marginLeft: "0.25vw",
    background: "transparent",
    overflow: "visible",
    position: "relative",
    zIndex: 5
  }
}));

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);


const GridRow = ({item, visible}) => {
  const classes = useStyles()

  return (
    <div>
      <Grid container className={classes[item.type]} direction="column" style={{visibility: visible ? "visible" : "hidden"}}>
        {item[item.type].map((rowNumber) => (
          <Grid item xs className={classes.row}>
            <Grid container justify="flex-start" spacing={0}>
              {rowNumber.items.map((value) => (
                <Grid key={value.Item} item>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <InfoDiv item={value} />
                      </React.Fragment>
                    }
                    arrow={true}
                    placement="top-start"
                  >
                    <Paper className={classes.paper}>
                    </Paper>
                  </HtmlTooltip>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GridRow;