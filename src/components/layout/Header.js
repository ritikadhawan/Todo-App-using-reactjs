import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
           <header style = {headerStyle}>
               <h1>TodoList</h1>
           </header>
        )
    }
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
export default Header;
