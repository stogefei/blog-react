import React from 'react';
import top from '../imgs/icon-top@2x.png'
import {fetchList} from "../api/datalist";

class ToTop extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            toTopShow: false
        };
        this.goToTop = this.goToTop.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        fetchList(1);
        window.addEventListener('scroll', this.handleScroll, true);
    }
    handleScroll(){
        if(window.scrollY > 200) {
            this.setState({
                toTopShow: true
            })
        } else {
            this.setState({
                toTopShow: false
            })
        }
    }
    goToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    render() {
    return (
        <div>
            {this.state.toTopShow? <p className="to-top-box" onClick={this.goToTop}>
                <img src={top} alt=""/>
            </p>: null}
        </div>
    );
}
}

export default ToTop;
