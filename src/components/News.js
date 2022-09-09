import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'science',
        apiKey: '51aca3f2d2c948149a0a2d33e2a543d7',
        pageSize: 8
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        apiKey: PropTypes.string,
        pageSize: PropTypes.number
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        } 
    }
    updateNews = async() => {
        console.log(this.props);
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        const data = await fetch(url);
        this.props.setProgress(30);
        const parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({articles: parsedData.articles, loading: false, totalResults: this.totalResults});
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
    } 
    handlePreviousClick = async () => {
        
        this.setState({ page: this.state.page - 1});
        this.updateNews();
    }
    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1});
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({articles: this.state.articles.concat(parsedData.articles), loading: false, totalResults: this.totalResults});
    };
    render() {
        return (
            <>
                <h3 className='text-center'>NewsMonkey Top {this.props.category} Headlines</h3>
                { this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                <div className='container my-3'>
                    <div className="row">
                        {
                            this.state.articles.map((element) =>{
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl = {element.url} name={element.source.name} date= {element.publishedAt} author={element.author}/>
                                </div>
                            })
                        }
                    </div>
                </div>
                </InfiniteScroll>   

                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <=1 ? true : false} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize) ? true : false} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News
