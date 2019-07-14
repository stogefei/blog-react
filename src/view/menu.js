import React from 'react';
import bannerImg from '../imgs/img-banner.png'
import mdImg from '../imgs/img-cover.png'
import mdImg2 from '../imgs/img-cover.png'
import ItmImg from '../imgs/img-cover-dark-02.png'
import {fetchList} from '../api/datalist'
import LoadMore from '../components/laodmore.js'
import ToTOP from '../components/top.js'
class Menu extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
           active: -1,
    }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.itemClick = this.itemClick.bind(this);
    }
    handleMouseEnter(index) {
        this.setState({active:index});
    }
    handleMouseLeave(index) {
        this.setState({active:-1});
    }
    itemClick(item) {
        console.log(this.props)
        this.props.history.push('/detail')
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
                                  onClick={this.itemClick.bind(this,item)}
                                 onMouseEnter={this.handleMouseEnter.bind(this, index) }
                                 onMouseLeave={this.handleMouseLeave.bind(this, index)}>
                                <div className="item-list-left"/>
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
                    <div className="item-body">
                        <div className="item-body-box">
                            <div className="item-body-left-box">
                                <div className="item-md-img">
                                    <img src={mdImg} alt=""/>
                                </div>
                                <div className="item-md-bt">
                                  <p className="item-md-title">
                                      <span className="item-title-left">
                                        UX/UI SYSTEMS Copy
                                    </span>
                                      <span className="item-md-tag">
                                        tag
                                    </span>
                                  </p>
                                    <p className="item-md-text">
                                        Create web design with basic web components based on Sketch nested symbols
                                    </p>
                                    <p>
                                    <span className="item-md-inner">
                                        Compatible with
                                    </span>
                                        <span className="item-md-author">
                                        Sketch
                                    </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="item-body-box">
                            <div className="item-body-left-box">
                                <div className="item-md-img">
                                    <img src={mdImg2} alt=""/>
                                </div>
                                <div className="item-md-bt">
                                    <p className="item-md-title">
                                      <span className="item-title-left">
                                        UX/UI SYSTEMS Copy
                                    </span>
                                        <span className="item-md-tag">
                                        tag
                                    </span>
                                    </p>
                                    <p className="item-md-text">
                                        Create web design with basic web components based on Sketch nested symbols
                                    </p>
                                    <p>
                                    <span className="item-md-inner">
                                        Compatible with
                                    </span>
                                        <span className="item-md-author">
                                        Sketch
                                    </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <LoadMore></LoadMore>
                <div className="menu-item-list">
                    <p className="item-text">UX/UI SYSTEMS</p>
                    <div className="item-body-list">
                       <ul>
                           <li className="item-pro-list">
                              <div className="item-pro-box">
                                  <div className="list-img-box">
                                      <img src={ItmImg} alt=""/>
                                  </div>
                                  <div className="list-tile">
                                      <div className="list-tile-box">
                                          <p className="list-top-tile">UX/UI SYSTEMS</p>
                                          <span className="list-top-tag">Tag</span>
                                      </div>
                                  </div>
                                  <p className="list-detail">
                                      Create web design with basic web components based on Sketch
                                  </p>
                              </div>
                           </li>
                           <li className="item-pro-list">
                               <div className="item-pro-box">
                                   <div className="list-img-box">
                                       <img src={ItmImg} alt=""/>
                                   </div>
                                   <div className="list-tile">
                                       <div className="list-tile-box">
                                           <p className="list-top-tile">UX/UI SYSTEMS</p>
                                           <span className="list-top-tag">Tag</span>
                                       </div>
                                   </div>
                                   <p className="list-detail">
                                       Create web design with basic web components based on Sketch
                                   </p>
                               </div>
                           </li>
                           <li className="item-pro-list">
                               <div className="item-pro-box">
                                   <div className="list-img-box">
                                       <img src={ItmImg} alt=""/>
                                   </div>
                                   <div className="list-tile">
                                       <div className="list-tile-box">
                                           <p className="list-top-tile">UX/UI SYSTEMS</p>
                                           <span className="list-top-tag">Tag</span>
                                       </div>
                                   </div>
                                   <p className="list-detail">
                                       Create web design with basic web components based on Sketch
                                   </p>
                               </div>
                           </li>
                           <li className="item-pro-list">
                               <div className="item-pro-box">
                                   <div className="list-img-box">
                                       <img src={ItmImg} alt=""/>
                                   </div>
                                   <div className="list-tile">
                                       <div className="list-tile-box">
                                           <p className="list-top-tile">UX/UI SYSTEMS</p>
                                           <span className="list-top-tag">Tag</span>
                                       </div>
                                   </div>
                                   <p className="list-detail">
                                       Create web design with basic web components based on Sketch
                                   </p>
                               </div>
                           </li>
                           <li className="item-pro-list">
                               <div className="item-pro-box">
                                   <div className="list-img-box">
                                       <img src={ItmImg} alt=""/>
                                   </div>
                                   <div className="list-tile">
                                       <div className="list-tile-box">
                                           <p className="list-top-tile">UX/UI SYSTEMS</p>
                                           <span className="list-top-tag">Tag</span>
                                       </div>
                                   </div>
                                   <p className="list-detail">
                                       Create web design with basic web components based on Sketch
                                   </p>
                               </div>
                           </li>
                           <li className="item-pro-list">
                               <div className="item-pro-box">
                                   <div className="list-img-box">
                                       <img src={ItmImg} alt=""/>
                                   </div>
                                   <div className="list-tile">
                                       <div className="list-tile-box">
                                           <p className="list-top-tile">UX/UI SYSTEMS</p>
                                           <span className="list-top-tag">Tag</span>
                                       </div>
                                   </div>
                                   <p className="list-detail">
                                       Create web design with basic web components based on Sketch
                                   </p>
                               </div>
                           </li>
                           <li className="item-pro-list">
                               <div className="item-pro-box">
                                   <div className="list-img-box">
                                       <img src={ItmImg} alt=""/>
                                   </div>
                                   <div className="list-tile">
                                       <div className="list-tile-box">
                                           <p className="list-top-tile">UX/UI SYSTEMS</p>
                                           <span className="list-top-tag">Tag</span>
                                       </div>
                                   </div>
                                   <p className="list-detail">
                                       Create web design with basic web components based on Sketch
                                   </p>
                               </div>
                           </li>
                       </ul>
                    </div>
                </div>
                <div className="footer-body">
                    <div className="footer-body-left">
                        <h3>Header Text</h3>
                        <p className="detail">Get access to all assets we made and will make
                            for one year</p>
                        <p className="btn">Go Unlimited For $99</p>
                    </div>
                    <div className="footer-body-right">
                        <div className="right-img-bg"></div>
                        <div className="right-inner-text">
                            <p className="detail">Sign up for our newsletters & get 10% discount promo code</p>
                            <div className="action">
                                <input type="text" placeholder="Your e-mail" maxLength="32"/>
                                <p className="btn">Button Show</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ToTOP></ToTOP>
            </div>
        );
    }
}
export default Menu;
