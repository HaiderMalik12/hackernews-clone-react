import React, { Component } from 'react';

export class AddLink extends Component {
  state = {
    title: '',
    url: ''
  };

  onChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="card card-body">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.onChangeHandler}
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Url</label>
            <input
              type="text"
              className="form-control"
              name="url"
              placeholder="Enter Url"
              value={this.state.url}
              onChange={this.onChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddLink;
