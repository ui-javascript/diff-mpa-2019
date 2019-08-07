import React from "react"
import ReactDOM from "react-dom"

import { Formik, Form, Field } from 'formik';

function BasicArrayExample () {

  return (<div>
    <h1>Friends</h1>

    <Formik
      initialValues={{
        friends: ['jared', 'ian'],
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      <Field name="friends[0]"/>
      <Field name="friends[1]"/>
      <button type="submit">Submit</button>
    </Formik>
  </div>)
}

ReactDOM.render(<BasicArrayExample />, document.getElementById("root"));
