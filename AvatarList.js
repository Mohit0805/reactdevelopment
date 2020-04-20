import React from "react";
import "./Avatar.css";

const AvatarList = (props) => {
    return (

        <div className='avatarstyle ma4 bg-light-blue dib pa4 grow shadow-4 tc'>
            <img src={`https://joeschmoe.io/api/v1/${props.gender}/${props.name}`} alt="Avatar"/>
            <h1 >{props.name}</h1>
            <p>{props.work}</p> 
        </div>
    )
}

export default AvatarList;