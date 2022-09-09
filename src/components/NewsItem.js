import React, { Component } from 'react'
import image from '../image.jpeg';
export class NewsItem extends Component {
  render() {
    return (
      <div>{console.log(this.props.author)}
        <div className="card my-3" style={{width: "18rem"}}>
            <span class="badge badge-pill col-4 badge-danger">{this.props.name}</span>
            <img className="card-img-top" src={this.props.imageUrl ? this.props.imageUrl : image} alt={this.props.name}/>
            <div className="card-body">
                <h5 className="card-title"><b>{this.props.title}</b></h5>
                <p className="card-text">{this.props.description}</p>
                <p className="card-text text-danger">published by {this.props.author ? this.props.author : 'Unknown'} on {new Date(this.props.date).toUTCString()}</p>
                <a href={this.props.newsUrl} className="btn btn-sm btn-dark ">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
