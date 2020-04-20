import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from "./AvatarList";

//const Avatar = (props) => {
 class Avatar extends Component{

    constructor(){
        super();
        this.state = {
            name : "BBmsg welcomes you :)"
        }
    }

    altername(){
        this.setState({
            name : "BBmsg Developers"
        })
    }

     render() {
    const AvatarListArray1 = [
            {
                id:1,
                name:"Mohit",
                gender:"male",
                work:"Web Developer"
            },
            {
                id:2,
                name:"Madhab",
                gender:"male",
                work:"Web Developer"
            },
            {
                id:3,
                name:"Rohit",
                gender:"male",
                work:"App Developer"
            },
            {
                id:4,
                name:"Shayantan",
                gender:"male",
                work:"Data Analyst"
            },
            {
                id:5,
                name:"Suchita",
                gender:"female",
                work:"App Developer"
            },
            {
                id:6,
                name:"Vidhi",
                gender:"female",
                work:"Graphics Designer"
            }
        ]


        const ArrayAvatarCard = AvatarListArray1.map( (AvatarCard, i) => {
            return <AvatarList key={i} id={AvatarListArray1[i].id} 
                                gender={AvatarListArray1[i].gender}
                                name={AvatarListArray1[i].name} 
                                work={AvatarListArray1[i].work}/> 
        }

        )

        return (
        <div className="mainpage">
            <h1>{this.state.name}</h1>
            <button onClick = { () => this.altername() }>Alter</button>
            <br />
                {ArrayAvatarCard}
        </div>
    )
}
 }
export default Avatar; 