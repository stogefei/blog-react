import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/detail.less';
import ReactMarkdown from 'react-markdown'
import {getBlogDetail} from '../api/blog';
import moment from 'moment'
import {ERROR_OK} from '../utils/stateCode';

class BlogDetail extends React.Component{
    constructor(props) {
        super(props)
        console.log(this.props.match.params)
        this.state = {
            detailId: this.props.match.params,
            blog: '# This is a header\n\nAnd this is a paragraph',
            author: 'zhangsan',
            title: 'zhangsan',
            time: '2019-09-34'
        }
    }
    componentDidMount() {
        const id = this.state.detailId.id
        getBlogDetail(id)
        .then(res => {
            if(res.status === 200 && res.data.errno === ERROR_OK) {
                console.log(res)
               this.setState({
                title: res.data.data.title,
                blog: res.data.data.content,
                author: res.data.data.author,
                time: res.data.data.createtime
               })
            }
        })
    }
    render(){
        return (
            <div className='detail-box'>
                 <Header/>
                <div className='detail-wrapper'>
                    <div className="detail-box-inner">
                        <h1 className="detail-title text">{this.state.title}</h1>
                        <div className='author-info'>
                            <span>{this.state.author}</span>
                            <span>{moment(this.state.time).format("YYYY-MM-DD HH:mm:ss")}</span>
                        </div>
                        <div className='blog-text'>
                            <ReactMarkdown source={this.state.blog} />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}
export default BlogDetail
