import React, { Component } from 'react';

export class AddLink extends Component {
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Url</label>
            <input
              type="text"
              className="form-control"
              name="url"
              placeholder="Enter Url"
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
