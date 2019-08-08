import React from "react"
import ReactDOM from "react-dom"
// import PropTypes from 'prop-types'

import '@/styles/common.scss'

class Button extends React.Component {
    render() {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );
    }
}

Button.contextTypes = {
    color: React.PropTypes.string
};

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class MessageList extends React.Component {
    getChildContext() {
        return {
            color: "purple"
        };
    }

    render() {
        const children = this.props.messages.map((message) =>
            <Message text={message.text} />
        );
        return <div>{children}</div>;
    }
}

MessageList.childContextTypes = {
    color: React.PropTypes.string
};

let messageList = [
    {text: 'hello', color: 'red'}
]
ReactDOM.render(
    (<div>
        {/* @todo 报错!! */}
        <MessageList messages={messageList} />
    </div>),
    document.getElementById('root'))
