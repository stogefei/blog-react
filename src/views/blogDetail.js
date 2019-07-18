import React from 'react'
import Header from '../components/header';
import '../styles/detail.less';
class BlogDetail extends React.Component{
    constructor(props) {
        super(props)
        console.log(this.props.match.params)
    }
    componentDidMount() {
    }
    render(){
        return (
            <div className='detail-box'>
                 <Header/>
                <div className='detail-wrapper'>
                <h1 className="detail-title text">Give Me 5 Minutes and I’ll Give You 5 Ways To Earn More</h1>
                </div>  
            </div>
        )
    }

}
export default BlogDetail
