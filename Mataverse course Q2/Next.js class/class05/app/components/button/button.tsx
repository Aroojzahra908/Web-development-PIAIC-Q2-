"use client"
import { ButtonProps } from "@/types/componentTypes";
var count:number = 1;
function Button(props:ButtonProps){
    return (
        <button className={props.className}  onClick={props.onClickHandler}>{props.title} </button>
    )
}

export default  Button;
