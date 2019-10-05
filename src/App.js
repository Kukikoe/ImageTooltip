import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GridView } from './pages/GridView';
import { UpdateImage } from './pages/UpdateImage';
import { AddImage } from './pages/AddImage';
import { ImageView } from './pages/ImageView';

const App = () => {
   return (
       <Router>
           <Route exact path="/" component={GridView} />
           <Route path="/update/:id" component={UpdateImage} />
           <Route path="/add" component={AddImage} />
           <Route path="/image/:id" component={ImageView} />
       </Router>
   )
};

export default App;


