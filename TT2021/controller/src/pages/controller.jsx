import React, {  Component } from "react";
import SetTime from "../components/setTime";
import ControlPanel from "../components/controlPanel"
import UpdateScore from "../components/updateScore"
import Score from "../components/score"
import Announcement from "../components/announcement"
export default class Controller extends Component {
  render() {
    return (
      <div className="controller">
        <SetTime/>
        <Score/>
        <Announcement/>
        <UpdateScore/>
        <ControlPanel/>
      </div>

    );
  }
}
