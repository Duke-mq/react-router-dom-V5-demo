import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {id:0}
    }
    render() {
        return (
            <h2>
                List Page {this.state.id}
            </h2>
        )}
    /**
     * this.props.match
     * {
     *    path: "/list/:id",
     *    url: "/list/123",
     *    params: { id: "123"},
     * }
     */
    componentDidMount(){
        let id = this.props.match.params.id
        console.log(id)
        this.setState({id})
    }
}

export default List;