import React, { Component } from 'react';
import {message,Modal, Input} from 'antd';
import 'simplemde/dist/simplemde.min.css'
import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js';
import {addNewBlog} from '../api/blog'
class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorInner: '',
            blogTitle: '',
            visible: false
        }
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleTitkeChange = this.handleTitkeChange.bind(this)
    }
    // 提交
    handleOk() {
        console.log(this.state, 'this.state');
        if(!this.state.blogTitle) {
            return false
        }
        const requestData = {
            title: this.state.blogTitle,
            content: this.state.editorInner
        }
        addNewBlog(requestData)
            .then((res) => {
                console.log(res, 'res')
                if (res.status === 200 && res.data.errno === 0) {
                    message.success('添加成功', 1)
                        .then(() => {
                            this.setState({
                                editorInner: '',
                                blogTitle: ''
                            });
                        })
                } else {
                    message.error(res.data.message)
                }
                this.setState({
                    visible: false,
                });
            })
    }
    handleCancel() {
        this.setState({
            visible: false,
        });
    }
    handleTitkeChange(e) {
        this.setState({
            blogTitle: e.target.value,
        });
    }
    componentDidMount() {
        let that  = this;
        const editorId = that.refs.editor.childElementCount;
        that.smde = new SimpleMDE({
            // element: document.getElementById('editor').childElementCount,
            element: editorId,
            autofocus: true,
            autosave: true,
            placeholder: "Hello world!",
            toolbar: [{
                name: "bold",
                action: SimpleMDE.toggleBold,
                className: "fa fa-bold",
                title: "Bold",
            },
                "side-by-side",
                "fullscreen",
                "link",
                "image",
                "italic",
                "preview",
                "|", // Separator
                {
                    name: "custom",
                    action: function customFunction(editor){
                        if(!that.smde.value()) {
                          return  message.warning('内容为空')
                        }
                        that.setState({
                            visible: true,
                            editorInner: that.smde.value()
                        });
                    },
                    className: "fa fa-check-circle-o",
                    title: "提交",
                },
            ],
            previewRender: function(plainText) {
                return marked(plainText,{
                    renderer: new marked.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return highlight.highlightAuto(code).value;
                    }
                });
            },
        })
    }
    render() {
        return (
            <div className="blog-box">
                <Modal
                    title="文章名称"
                    okText="确定"
                    cancelText="取消"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                   <div>
                       <Input placeholder="请输入标题" value={this.state.blogTitle} maxLength={64} onChange={this.handleTitkeChange} allowClear />
                   </div>
                </Modal>
                <textarea ref="editor" id="editor"></textarea>
            </div>
        )
    }
}

export default Blog;
