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
import { ConPost } from './components/ConPost/ConPost';

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
    <Route path="/contacts" component={(props) => <ConPost {...props} />} />
  </Switch>
</Router>, document.getElementById('root'));
