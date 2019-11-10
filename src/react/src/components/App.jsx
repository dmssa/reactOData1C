import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import Header from './Header';
import Card from './Card';
import Filter from './../containers/Filter';

const App = (props)=>{
    if(props.isReady){
      return (
          <Router>
            <Container>
              <Header />
              <Route path='/' component={Filter} exact/>
              <Route path='/profile/:name' component={Card} exact/>
            </Container>
          </Router>
      )
    }
    props.fetchConfig();
    return (
      <div>
        Загрузка...
      </div>
      )
}

export default App;
