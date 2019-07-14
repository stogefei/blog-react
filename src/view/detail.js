import React from 'react';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import LoadMore from '../components/laodmore.js'
import ToTOP from '../components/top.js'
import ItmImg from '../imgs/img-cover.png'
class Detail extends React.Component{
    render() {
        return (
            <div className="detail">
                <Header/>
                <div className="detail-box">
                   <div className="detail-top">
                       <p className="title">Little Title,Little Title,Little Title</p>
                       <h3 className="detail-inner">UI assets for startup</h3>
                       <p className='detail-text'>
                           High-quality digital resources which make your
                          </p>
                       <p className='detail-text'>
                           design workflow faster and easier
                       </p>
                   </div>
                   <div className="detail-wrapper">
                       <div className="detail-left">
                           <div className="detail-left-box">
                               <p className="title">
                                   <span className="title-line"></span>
                                   <b>Title</b>
                               </p>
                               <p className="subline">
                                   <span>
                                       Subline
                                   </span>
                               </p>
                               <p className="subtitle">
                                   <span>
                                       Subtitle
                                   </span>
                                   <span className="subtitle-line"></span>
                               </p>
                               <div className="text-inner">
                                   <p>
                                   智能病理分析系统 2.0 是一套病理切片图像的多层特征分析计算机辅助诊断系统。基于计算机自动分析系统将包括以下主要功能，包括细胞，细胞核分割 ，癌变区域识别，细胞核特征提取及病理切片分级鉴定。这些病理诊断功能能极大丰富当前病理诊断的结构，能够为病理医生提供快速与准确的病理量化信息反馈，精准定义疾病的多层信息。
                                   </p>
                                   <p>
                                   同时，也是一套病理智能辅助诊断全流程平台，集数字切片扫描、病例管理、智能诊断、报告编辑、报告审核与打印为一体，可辅助从事宫颈液基细胞学诊断的病理科医生快速精准地完成多种细胞病变和感染的诊断，即时生成诊断报告，供医生复核并签发打印。
                                   </p>
                                </div>
                               <div className="img-box">
                                  <div className="img-wrapper">
                                      <img src={ItmImg} alt=""/>
                                      <p className="img-text">Image here 01 (no sp</p>
                                  </div>
                                   <div className="img-wrapper">
                                       <img src={ItmImg} alt=""/>
                                       <p className="img-text">Image here 02 (no sp</p>
                                   </div>
                               </div>
                           </div>
                           <LoadMore/>
                       </div>
                       <div className="detail-right">
                           <p className="btn">Go Unlimited For $99</p>
                           <p className="btn-default">Go Unlimited For $99</p>
                           <div className="detail-right-tip">
                               <h3>Title here</h3>
                               <p>Turn your imagination into reality by using these illustrations and create your own unique story. Here are 20 ready-to-use vector and fully editable illustrations for your next project.</p>
                           </div>
                           <div className="detail-right-tip">
                               <h3>Title here</h3>
                               <p>Turn your imagination into reality by using these illustrations and create your own unique story. Here are 20 ready-to-use vector and fully editable illustrations for your next project.</p>
                           </div>
                           <div className="detail-tag-box">
                                <p className="detail-tag">
                                        <span>
                                            tag
                                        </span>
                                 </p>
                               <p className="detail-tag">
                                        <span>
                                            tag
                                        </span>
                                    </p>
                               <p className="detail-tag">
                                   <span>
                                        tag
                                    </span>
                                </p>
                               <p className="detail-tag">
                                   <span>
                                        tag
                                    </span>
                                </p>
                           </div>
                       </div>
                   </div>
            </div>
                <Footer/>
                <ToTOP/>
            </div>
        );
    }
}
export default Detail;
