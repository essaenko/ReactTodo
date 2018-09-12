import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
    }
    render(){
        return (
            <div>
                <TextField
                    id="task"
                    label="Enter task"
                    value={this.state.task}
                    onChange={this.handleChange('task')}
                    margin="normal"
                /><br/>
                <Button variant="outlined" onClick={this.createTask}>
                    Add task
                </Button>
            </div>
        )
    }
    handleChange = name => event => {
        this.setState({...this.state, ...{task: event.target.value}});
    }
    createTask = event => {
        this.props.createTask(this.state.task);
        this.setState({...this.state, task: ""});
    }
}