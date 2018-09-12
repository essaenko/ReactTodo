import React, {Component} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default class TaskList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <List>
                    {this.eachTasks()}
                </List>
            </div>
        )
    }
    eachTasks(){
        let tasks = [];
        if(Array.isArray(this.props.tasks)){
            this.props.tasks.forEach((task, index) => {
                tasks.push(<ListItem button>
                                <div class="task">
                                    {task}
                                    <div onClick={() => this.props.removeTask(index)} class="del-icon">
                                        Удалить?
                                    </div>
                                </div>
                            </ListItem>);
            })
        }
        return tasks;
    }
}