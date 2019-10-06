import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const { id, title } = this.props.todo;  //destructuring and extracting id ,title 
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type = "checkbox" onChange = {this.props.markComplete.bind(this,id)}/>
                    {title}
                    <button style = {btnStyle} onClick = {this.props.delTodo.bind(this,id)}>X</button>
                </p>
                
            </div>
        )
    }
}
//prop types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    delTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func


}
const btnStyle = {
    backgroundColor: '#ff0000',
    float: 'right',
    border: 'none',
    padding: '4px 7px',
    borderRadius : '50%',
    cursor: 'pointer'
}


export default TodoItem;
