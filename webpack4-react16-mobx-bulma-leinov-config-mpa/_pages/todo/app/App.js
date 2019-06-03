/********************************
 * @file: todolist page
 * @desc: react-redux todo list
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React from "react";
import {connect} from "react-redux";
import utils from 'src/utils'
import AddTodo from "../components/Todo/add-todo";
import TodoList from "../components/Todo/todo-list";
import Filter from "../components/Todo/filter";
import Footer from "@/components/footer"

import {
    addTodo,
    toggleTodo,
    deleteTodo
} from "../store/action/todoAction";

import {
    filtAction,
    filterTodo
} from '../store/action/filtAction'

import Nav from "@/components/Nav";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // addTod input onChange
    onChange = (e) => {
        this.setState({value: e.currentTarget.value});
    }
    // press keyboard
    onKeyDown = (e) => {
        if (e.keyCode !== 13) {
            return;
        }
        const value = this.state.value;
        this.props.dispatch(addTodo(value));
    }

    // toggle todo
    onToggleClick = (id) => {
        this.props.dispatch(toggleTodo(id));
    }

    // delete todo
    deleteTodo = (id) => {
        const that = this;
        let deleteIndex;
        const arr = utils.deepCopy(that.props.todoCopy);
        arr.map((item, index) => {
            if (item.id === id) {
                deleteIndex = index;
            }
        })
        arr.splice(deleteIndex, 1);
        this.props.dispatch(deleteTodo(arr));
    }

    // filter
    onFilterChange = (filter) => {
        this.props.dispatch(filtAction(filter));
    }

    render() {

        return (
            <div>
                <Nav/>

                <div className="main todo column is-8">
                    <h1 className="title"> {utils.getDate("-")} todo list</h1>
                    <AddTodo
                        onChange={this.onChange}
                        onKeyDown={this.onKeyDown}
                    />
                    <Filter
                        onFilterChange={this.onFilterChange}
                    />
                    <TodoList
                        todoList={this.props.todoList}
                        onToggleClick={this.onToggleClick}
                        deleteTodo={this.deleteTodo}
                    />

                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStatesToProps = (state) => ({
    todoList: filterTodo(state.todoList, state.fiterState),
    fiterState: state.fiterState,
    todoCopy: state.todoList
});

//
export default connect(
    mapStatesToProps
)(App);

