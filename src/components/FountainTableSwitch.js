import React from "react";
import { useState } from "react";
import { Switch } from "@mui/material";
import Axios from "axios";
import url from "../url.js";

const FountainTableSwitch = ({ initialState, fountainId }) => {
  const [checked, setChecked] = useState(initialState === 1);

  const handleSwitch = async () => {
    setChecked(!checked);
    try {
      await Axios.post(url + "/FountainController/setFountainState", {
        fountainId: fountainId,
        state: !checked,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return <Switch color="success" checked={checked} onChange={handleSwitch} />;
};

export default FountainTableSwitch;
