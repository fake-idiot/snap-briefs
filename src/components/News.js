import React, { Component } from "react";
import NewsItems from "./NewsItems";
import axios from "axios";
import Loader from "./Loader";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      pageSize: 12,
      country: "us"
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${this.state.page}&pageSize=${this.state.pageSize}`
    );
    this.setState({
      articles: resp.data.articles,
      loading: false,
    });
  }

  handlePage = async () => {
    this.setState({ loading: true });
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${this.state.page}&pageSize=${this.state.pageSize}`
    );
    this.setState({
      articles: resp.data.articles,
      loading: false,
      page: this.state.page,
    });
  };

  handlePage1 = async () => {
    this.setState({ loading: true });
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${
        this.state.country
      }&category=${
        this.props.category
      }&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${
        this.state.page + 1
      }&pageSize=${this.state.pageSize}`
    );
    this.setState({
      articles: resp.data.articles,
      loading: false,
      page: this.state.page + 1,
    });
  };

  handlePage2 = async () => {
    this.setState({ loading: true });
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${
        this.state.country
      }&category=${
        this.props.category
      }&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${
        this.state.page + 2
      }&pageSize=${this.state.pageSize}`
    );
    this.setState({
      articles: resp.data.articles,
      loading: false,
      page: this.state.page + 2,
    });
  };

  handlePreviousPage = async () => {
    this.setState({ loading: true });
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${
        this.state.country
      }&category=${
        this.props.category
      }&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${
        this.state.page - 1
      }&pageSize=${this.state.pageSize}`
    );
    this.setState({
      articles: resp.data.articles,
      loading: false,
      page: this.state.page - 1,
    });
  };

  handleNextPage = async () => {
    this.setState({ loading: true });
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${
        this.state.country
      }&category=${
        this.props.category
      }&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${
        this.state.page + 1
      }&pageSize=${this.state.pageSize}`
    );
    this.setState({
      articles: resp.data.articles,
      loading: false,
      page: this.state.page + 1,
    });
  };

  handleCountryFilter = async(e) =>{
    this.setState({ loading: true, country: e });
    console.log(this.state.country, "STATE")
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${
        e
      }&category=${
        this.props.category
      }&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${
        this.state.page
      }&pageSize=${this.state.pageSize}`
    );
    this.setState({
      articles: resp.data.articles,
      loading: false,
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          <strong>Snap Briefs - Top Headlines</strong>
        </h1>
        {this.state.loading && <Loader />}
        <div className="row">
          <div className="d-flex justify-content-end">
            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter By Country
              </button>
              <ul className="dropdown-menu bg-dark text-light">
                <li>
                  <button className="dropdown-item text-light" onClick={() => this.handleCountryFilter("in")}>
                    India
                  </button>
                </li>
                <li>
                  <button className="dropdown-item text-light" onClick={() => this.handleCountryFilter("ca")}>
                    Canada
                  </button>
                </li>
                <li>
                  <button className="dropdown-item text-light" onClick={() => this.handleCountryFilter("cn")}>
                    China
                  </button>
                </li>
                <li>
                  <button className="dropdown-item text-light" onClick={() => this.handleCountryFilter("us")}>
                    USA
                  </button>
                </li>
                <li>
                  <button className="dropdown-item text-light" onClick={() => this.handleCountryFilter("uk")}>
                    UK
                  </button>
                </li>
                <li>
                  <button className="dropdown-item text-light" onClick={() => this.handleCountryFilter("jp")}>
                    Japan
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item text-light" onClick={() => this.handleCountryFilter("ae")}>
                    UAE
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {this.state.articles.map((article, index) => {
            return (
              <div className="col-md-3" key={index}>
                <NewsItems
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  urlToImage={article.urlToImage}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-end">
          <div
            className="btn-group me-2"
            role="group"
            aria-label="Second group"
          >
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousPage}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-dark active"
              onClick={this.handlePage}
            >
              {this.state.page}
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePage1}
            >
              {this.state.page + 1}
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePage2}
            >
              {this.state.page + 2}
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
