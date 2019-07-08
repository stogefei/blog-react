import {Input} from 'antd';
const { TextArea } = Input;
class Blog extends Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleChange.bind(this)
        this.state = {
            markdown: 'zhangsan111'
        }
    }
    handleChange(key,val) {
        this.setState({
            markdown:val.target.value
        })

    }
    render() {
        return (
            <div className="home-container">
            <div className="home-left">
            <TextArea rows={4} placeholder="账号" onChange={(v)=>this.handleChange('username',v)} />
        </div>
        <div className="home-right">
            <ReactMarkdown source={this.state.markdown} escapeHtml={true} />
        </div>
        </div>
    )
    };
}

export default Blog;
