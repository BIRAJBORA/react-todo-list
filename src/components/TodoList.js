import React, { Component } from 'react'
import Item from "./TodoItem";
export default class  extends Component {
    render() {
        return (
            <div>
                <h2>hello from todo list</h2>
                <Item/>
            </div>
        )
    }
}
