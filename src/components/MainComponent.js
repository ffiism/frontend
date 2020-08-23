import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Members from './MemberComponent'
import Bloodline from './BloodlineComponent'
import Jagriti from './JagritiComponent';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import Escape from './EscapeComponent'
import Disha from './DishaComponent';

class Main extends Component {

  constructor(props) {
    super(props);
  }
  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }

    return (
      <div>

      {/* // <Container>
      //   <Row lg="1" xs="1">
      //     <Col lg="12" xs = "12"> */}
            <Header />
            <TransitionGroup>
         <CSSTransition classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={()=> <Home />} />
              <Route path="/aboutus" component={HomePage} />
              <Route path="/disha" component={Disha} />
              <Route path="/jagriti" component={Jagriti} />
              <Route path="/escape" component={Escape} />
              <Route path="/bloodline" component={()=><Bloodline />} />
              <Route exact path="/members" component={() => <Members />} />
              <Route path="/donate" component={HomePage} />
              <Route path="/contactus" component={HomePage} />
              <Redirect to="/home" />
            </Switch>
           </CSSTransition>
            </TransitionGroup>
            <Footer />
      {/* //     </Col>
      //   </Row>
      // </Container> */}

      </div>
      
    );
  }
}

export default Main;
