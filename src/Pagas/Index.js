import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
// class Index extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [
//                 {cid: 1, title: '点击到第1篇'},
//                 {cid: 2, title: '点击到第2篇'},
//                 {cid: 3, title: '点击到第3篇'},
//             ]
//         };
//         /*编程式重定向*/
//         this.props.history.push("/home/")
//         /**
//          * 可以得到route传过来的props
//          * props字段里面有 history,location,match*/
//         console.log(this.props)
//     }
//     render() {
//         return (
//             <ul>
//                 {/* 标签式重定向 */}
//                 {/* <Redirect to="/home/" />*/}
//                 {
//                     this.state.list.map((item, index) => {
//                         return (
//                             <li key = {index}>
//                                 <Link to={'/list/' + item.cid}>{item.title}</Link>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         )
//     }
// }
function Index() {
    return(
        <h1>欢迎来到首页</h1>
    )
}

export default Index;