import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label} </label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    ); // the syntax look crazy but it's same as "onChange={formProps.input.onChange}" and so on..
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  onSubmit = formValues => {
    console.log('so i have onsubmit?', this.props)
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error" // if you don't have this "error" class it won't show error message by semantic ui
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// validate input function
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title!";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description!";
  }

  return errors;
};

export default reduxForm({ form: "streamForm", validate: validate })(
  StreamForm
);
