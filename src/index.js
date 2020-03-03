import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Index } from './components/Index/Index';
import { Procedure } from './components/Procedure/Procedure';
import { Pricing } from './components/Pricing/Pricing';
import { BlogPost } from './components/BlogPost/BlogPost';
import { DesPost } from './components/DesPost/DesPost';
import { DocPost } from './components/DocPost/DocPost';

ReactDOM.render(<Router>
  <Switch>
    <Route exact path="/">
      <Index />
    </Route>
    <Route path="/procedure">
      <Procedure />
    </Route>
    <Route path="/pricing">
      <Pricing />
    </Route>
    <Route path="/des/:blogPostID" component={(props) => <BlogPost {...props} />} />
    <Route path="/methods/:desPostID" component={(props) => <DesPost {...props} />} />
    <Route path="/doc/:docPostID" component={(props) => <DocPost {...props} />} />
  </Switch>
</Router>, document.getElementById('root'));
