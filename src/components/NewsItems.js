import React, { Component } from 'react'
import NoPicture from '../assets/images/No Picture.png'

export class NewsItems extends Component {
  render() {
    let {title, description, url, urlToImage} = this.props
    return (
        <div className="my-2">
            <div className="card">
                <img src={urlToImage?urlToImage:NoPicture} className="card-img-top" style={{height: "150px"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title?title.slice(0, 45):"No Title"}...</h5>
                    <p className="card-text">{description?description.slice(0, 88):"No Description Found"}...</p>
                    {url&& <a href={url} rel="noreferrer" target="_blank" className="btn btn-dark">Read more</a>} 
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItems