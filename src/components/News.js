import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static protoTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.int,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [], // Initialize articles as an empty array
      loading: true, // Set loading to true initially
      page: 1,
      pageSize: this.props.pageSize,
    };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=504d970796a04919a54abc3670f8ae36&page=1&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    //console.log(parseData.articles);
    this.setState({
      articles: parseData.articles,
      loading: false,
      totalResults: parseData.totalResults,
    });
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=504d970796a04919a54abc3670f8ae36&page=1&pageSize=${this.state.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // //console.log(parseData.articles);
    // this.setState({
    //   articles: parseData.articles,
    //   loading: false,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  handleNextClick = async () => {
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.state.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=504d970796a04919a54abc3670f8ae36&page=${
    //     this.state.page + 1
    //   }&&pageSize=${this.state.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   //console.log(parseData.articles);
    //   this.setState({
    //     articles: parseData.articles,
    //     loading: false,
    //     page: this.state.page + 1,
    //     loading: false,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=504d970796a04919a54abc3670f8ae36&page=${
    //   this.state.page - 1
    // }&pageSize=${this.state.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // //console.log(parseData.articles);
    // this.setState({
    //   articles: parseData.articles,
    //   loading: false,
    //   page: this.state.page - 1,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="my-4 text-center">Top News Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              //console.log(this.element);
              return (
                <div className="col-md-3 col-sm-3 my-3" key={element.url}>
                  <NewsItem
                    fullTitle={element.title ? element.title : ""}
                    title={element.title ? element.title.slice(0, 35) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageURL={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://findusonweb.com/files/master/10423.jpg"
                    }
                    newsURL={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="continer my-4 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button type="button" className="btn btn-secondary">
            {this.state.page}/
            {Math.ceil(this.state.totalResults / this.state.pageSize)} Page
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
