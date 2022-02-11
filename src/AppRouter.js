import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Index from "./Pagas/Index";
import Video from './Pagas/Video'
import './index.css'

// import List from "./Pagas/List";
// import Home from "./Pagas/Home";
/*export default function AppRouter() {
    return(
        <Router>
            <ul>
                <li> <Link to= '/'>首页</Link> </li>
                <li> <Link to= '/list/'>列表页面</Link> </li>
            </ul>
            {/!**
             V5版本存在于一个精准匹配问题，在没有精准匹配的情况下，假如第二级路由成功匹配。
             第一级路由也会匹配上，所以一般我们首页就进行一个精准匹配匹配。
             *!/}
            <Route path={'/'} exact component={Index}/>
            <Route path={'/list/:id'} component={List}/>
            <Route path={'/home/'} component={Home}/>
        </Router>
    )
}*/


function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li> <Link to="/">博客首页</Link> </li>
                        <li><Link to="/video">视频教程</Link> </li>
                        <li><Link to="">职场技能</Link> </li>
                    </ul>
                </div>
                <div className="rightMain">
                    <Route path="/"  exact component={Index} />
                    <Route path="/video"   component={Video} />

                </div>
            </div>
        </Router>
    );
}


export default AppRouter







