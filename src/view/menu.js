import React from 'react';
import bannerImg from '../imgs/img-banner.png'
import {fetchList} from '../api/datalist'
class Menu extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
           active: -1,
    }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleMouseEnter(index) {
        this.setState({active:index});
    }
    handleMouseLeave(index) {
        this.setState({active:-1});
    }
    componentDidMount() {
        fetchList(1)
    }

    render() {
        const list = [
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            },
            {
                id: 4
            }
        ];
        return (
            <div className="menu-page">
                <div className="menu-item">
                    <div className="menu-left">
                        <div className="menu-left-box">
                            <div className="menu-text">
                                <p>
                                    UI assets for startup
                                </p>
                                <p>
                                    owners & busy designers
                                </p>
                            </div>
                            <div className="menu-inner">
                                <p>
                                    High-quality digital resources which make your
                                </p>
                                <p>
                                    design workflow faster and easier
                                </p>
                            </div>
                            <div className="menu-link">
                                <a href="">Button Show</a>
                                <a href="">Button Show</a>
                                <a href="">Button Show</a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-right">
                        <img className="menu-img" src={bannerImg} alt=""/>
                    </div>
                </div>
                <div className="menu-item-list">
                    <p className="item-text">WHAT’S TNES?</p>
                    <div className="items">
                        {list.map((item, index) =>
                            <div  key={item.id}
                                  className={`item-list ${index === this.state.active ? 'active-text' : ''}`}
                                 onMouseEnter={this.handleMouseEnter.bind(this, index) }
                                 onMouseLeave={this.handleMouseLeave.bind(this, index)}>
                                <div className="item-list-left"></div>
                                <div className="item-list-right-box">
                                    <div className="item-list-right">
                                        <p className="right-tip">what’s tnes?</p>
                                        <p className="right-title">Blog Title</p>
                                        <p className="right-detail">Turn your imagination into reality by using these
                                            illustrations and create your own unique story </p>
                                        <p className="right-time">June 18,2019</p>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
                <div className="menu-item-list">
                    <p className="item-text">UX/UI SYSTEMS</p>
                </div>
            </div>
        );
    }
}
export default Menu;
