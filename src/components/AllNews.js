import axios from 'axios';
import React, { Component } from 'react'
import NewsItems from './NewsItems';
import Loader from './Loader';

export class AllNews extends Component {

    constructor(){
        super();
        this.state = {
            news: [],
            page: 1,
            loading: false,
            pageSize: 20
        }
    }

    async componentDidMount(){
        this.setState({loading: true})
        const resp = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${this.state.page}&pageSize=${this.state.pageSize}`)
        console.log(resp, 'resp')
        this.setState({
            news : resp.data.articles,
            totalResults: resp.data.totalResults,
            loading: false
        })
    }

    handlePage = async() => {
        this.setState({loading: true})
        const resp = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${this.state.page}&pageSize=${this.state.pageSize}`)
        this.setState({
            news: resp.data.articles,
            loading: false,
            page: this.state.page
        })
    }

    handlePage1 = async() => {
        this.setState({loading: true})
        const resp = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${this.state.page+1}&pageSize=${this.state.pageSize}`)
        this.setState({
            news: resp.data.articles,
            loading: false,
            page: this.state.page + 1
        })
    }

    handlePage2 = async() => {
        this.setState({loading: true})
        const resp = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${this.state.page+2}&pageSize=${this.state.pageSize}`)
        this.setState({
            news: resp.data.articles,
            loading: false,
            page: this.state.page + 2
        })
    }

    handlePreviousPage = async() => {
        this.setState({loading: true})
        const resp = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${this.state.page-1}&pageSize=${this.state.pageSize}`)
        this.setState({
            news: resp.data.articles,
            loading: false,
            page: this.state.page - 1
        })
    }

    handleNextPage = async() => {
        this.setState({loading: true})
        const resp = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=76b5b616278c4eaf8524454670c6fdd7&page=${this.state.page+1}&pageSize=${this.state.pageSize}`)
        this.setState({
            news: resp.data.articles,
            loading: false,
            page: this.state.page + 1
        })
    }
  render() {
    return (
      <div className='container'>
        <h1 className="text-center" style={{margin: "35px 0px"}}>
            Snap Briefs - All News
        </h1>
        {this.state.loading && <Loader />}
            <div className="row">
                {
                    this.state.news.map((article, index) => {
                        return(
                            <div className="col-md-3" key={index}>
                                <NewsItems title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} />
                            </div>
                        )
                    })
                }
            </div>
      </div>
    )
  }
}

export default AllNews