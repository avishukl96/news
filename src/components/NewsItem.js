import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newURL, fullTitle } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 title={fullTitle} className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noopener"
              target="_blank"
              href={newURL}
              className="btn btn-sm btn-primary"
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
