import React, { useState } from "react";
import "./App.css";
import GridRow from "./components/GridRow";
import items from "./assets/items.json";
import Grid from "@material-ui/core/Grid";
import { Button, makeStyles } from '@material-ui/core';
// import common from "./assets/common.png"; // Background images for dev
// import uncommon from "./assets/uncommon.png";
// import legendary from "./assets/legendary.png";
// import lunar from "./assets/lunar.png";
// import boss from "./assets/boss.png";
// import equipment from "./assets/equipment.png";
// import lunarEq from "./assets/lunarEq.png";

const useStyles = makeStyles((theme) => ({
  buttons: {
    position: "absolute",
    top: "1.2vh",
    left: "20.9vw",
    visibility: "visible",
    zIndex: 10
  }
}));

const App = () => {
  const [visibilities, setVisibilities] = useState({
    "common": false,
    "uncommon": false,
    "legendary": false,
    "lunar": false,
    "boss": true,
    "equipment": false,
    "lunarEq": false,
    "current": "boss"
  })
  const classes = useStyles()

  const handleButtonClick = (type) => {
    console.log(`Button ${type} pressed`);
    let tmpVisibilities = Object.assign({}, visibilities)
    if (tmpVisibilities.current === type) {
      return;
    }
    tmpVisibilities[tmpVisibilities.current] = !tmpVisibilities[tmpVisibilities.current];
    tmpVisibilities[type] = !tmpVisibilities[type];
    tmpVisibilities.current = type;
    setVisibilities(tmpVisibilities);
  }

  return (
    <div className="App">
      <Grid container className={classes.buttons} direction="row">
        <Grid item xs={7}>
          <Grid container justify="center" spacing={1}>
            {
              Object.values(items.items).map(item => Object.values(item).filter(value => typeof value === "string")).map((type) => (
                <Grid key={type} item>
                  <Button key={`button-${type}`} variant="contained" color="primary" onClick={() => handleButtonClick(type)}>
                    {type}
                  </Button>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
      {Object.values(items.items).map((item) => (
        <GridRow key={`Row-${item.type}`} item={item} visible={visibilities[item.type]} style={{width: "25vw !important"}}/>
      ))
      }
    </div>
  );
}

export default App;
