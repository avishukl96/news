import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, fullTitle } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={imageURL}
            className="card-img-top"
            alt="..."
            style={{ height: "180px" }}
          />
          <div className="card-body">
            <h5 title={fullTitle} className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noopener"
              target="_blank"
              href={newsURL}
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
