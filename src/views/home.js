import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Header from '../components/header';
import Base from '../components/base';
import {connect} from 'react-redux';
import IScroll from 'iscroll';
import {Icon} from 'antd'
import {hideTab} from "../redux/user.redux";
import {getBlogList} from "../api/blog";
import Footer from '../components/footer';
let myScroll;
@withRouter
@connect(
    state=>state.user,
    {hideTab}
)
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogList: []
        }
        this.editor = this.editor.bind(this)
    }
    editor() {
        this.props.history.push('/editorblog')
    }
    componentWillMount() {
        console.log('componentWillMount')
        getBlogList()
            .then((res) => {
                if (res.status === 200 && res.data.errno === 0) {
                    this.setState({
                        blogList: res.data.data
                    })
                } else {

                }
            })
    }
    componentDidMount() {
        console.log('componentDidMount')
        // let that = this;
        // myScroll = new IScroll('.base-box',{
        //     mouseWheel: true,
        //     scrollbars: true,
        //     mouseWheelSpeed: 30
        // });
        // setTimeout(function(){
        //     myScroll.refresh();
        // },500);
        // myScroll.on('scrollEnd',function() {
        //     if (this.y < -100 ) {
        //       that.props.hideTab({type:true})
        //     } else {
        //         that.props.hideTab({type:false})
        //     }
        // });
    }
    render() {
        const blogs =  this.state.blogList;
        return (
            <div className="home-container">
                <Header/>
                <Base data={blogs}/>
                <Footer/>
                <div className='editor-page' onClick={this.editor}>
                    <Icon type="edit" />
                </div>

            </div>
        )
    };
}

export default Home;
