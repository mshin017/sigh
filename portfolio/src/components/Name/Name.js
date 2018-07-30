import React, { Component } from "react"
import style from "./Name.scss"

export default class Name extends Component {
    render(){
        return(
            <div className={style.root}>
                <div className={style.barTop}/>
                    <h1> Michelle </h1>
                <div className={style.barBottom}/>
            </div>
        )
    }
}