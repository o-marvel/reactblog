// import Header from "./header";

import Navbar from "./navbar";
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Home from "./home";
import Create from "./create";
import BlogDetail from "./blogDetail";

const BlogApp = ()=>{
    return(
        <>
        <Router>
            <Navbar />
            <div className="content">
                <Switch>
                    <Route exact path = "/">
                        <Home />
                    </Route>
                    <Route path = "/create">
                        <Create />
                    </Route>
                    <Route path = "/detail">
                        <BlogDetail />
                    </Route>
                </Switch>
            </div>
        </Router>

        </>
    )
}
export default BlogApp;