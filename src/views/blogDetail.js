import React from 'react'

class BlogDetail extends React.Component{
    constructor(props) {
        super(props)
        console.log(this.props.match.params)
    }
    componentDidMount() {
    }
    render(){
        return (
            <div>detail</div>
        )
    }

}
export default BlogDetail
