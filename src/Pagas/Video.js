import React from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import ReactPage from './ReactPage'
import Vue from './Vue'
import Flutter from './Flutter'
import '../index.css'
function Video(){
    return (
        <div>
            <h3>二级导航</h3>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">React教程</Link></li>
                    <li><Link to="/video/vue">Vue教程</Link></li>
                    <li><Link to="/video/flutter">Flutter教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path="/video/reactpage/"   component={ReactPage} />
                <Route path="/video/vue/"   component={Vue} />
                <Route path="/video/flutter/"   component={Flutter} />
            </div>
        </div>
    )
}
export default Video;