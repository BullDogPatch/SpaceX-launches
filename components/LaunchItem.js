import React from "react";

function LaunchItem(props) {
  console.log('launch',props);

  return (
    <div className='launch-item'>
      <h1>{props.data.mission_name}</h1>
      <p><span>Details: </span>{props.data.details}</p>
      <p><span>Rocket Name:</span> {props.data.rocket.rocket_name}</p>
      <p><span>Launch Date: </span>{props.data.launch_date_local}</p>
      <p><span>Mission Name: </span>{props.data.mission_name}</p>
     
     
      <img width="240px" src={props.data.links.mission_patch_small} alt="mission patch"/>
    </div>
  );
}

export default LaunchItem;
