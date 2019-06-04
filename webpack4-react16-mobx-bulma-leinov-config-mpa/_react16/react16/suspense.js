import React, {Suspense} from 'react'
import ReactDOM from "react-dom"

// react-cache 当前不稳定
import {unstable_createResource as createResource} from 'react-cache'

const getName = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('Morgan');
    }, 1000);
})

const resource = createResource(getName)

const Greeting = () => {
    return <div>hello {resource.read()}</div>
}

const SuspenseDemo = () => {
    return (
        // React 提供的 Suspense 组件
        <Suspense fallback={<div>loading...</div>} >
            <Greeting />
        </Suspense>
    )
}

ReactDOM.render(<SuspenseDemo />, document.getElementById("root"))
