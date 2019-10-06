import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: '',

    }
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value}); //works for multiple fields
    }
    onSubmit = (e) =>{
        e.preventDefault(); //as it wants to submit the form
        this.props.addTodo(this.state.title);
        this.setState({title: ''})

    }
    render() {
        return (
            <form style = {{display: 'flex'}} onSubmit  = {this.onSubmit}>
                <input
                 type = "text" 
                 name = "title" 
                 placeholder = "Add Todo..."
                 style = {{flex: '10', padding: '5px'}}
                 onChange = {this.onChange}
                 />

                 <input
                    type = "submit"
                    value = "Submit"
                    className = "btn"
                    style = {{flex: '1'}}
                 />
            </form>
        )
    }
}

export default AddTodo
