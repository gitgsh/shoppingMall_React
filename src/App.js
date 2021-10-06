/* eslint-disable */
import './App.css';
import {useState} from 'react';
import { Navbar, Container, Nav ,NavDropdown, Jumbotron, Button} from 'react-bootstrap';
import Data from './data.js';

import {Link, Route, Switch} from 'react-router-dom';

function App() {
  let [shoes, setShoes] =useState(Data);
  let [id, setId] =useState(0);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">SHOE SHOP</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


<Route exact path="/">
 {/* jumbotron */}
<div className="background">
    <h1 className="display-4">40% Season Off!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <br/>
    <hr/>
    <div className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    <br/>
  </div>
{/* container 세개로 쪼갬 */}
<div className="container">
    <div className="row">
      {
        shoes.map((a, i)=>{ //return을 안썼고 , i만 전달하는게 아니라 a,i 둘다 써줘야함
          // a가 data하나하나를 의미하니까 그것만 넣어줘도 shoes개수만큼 도니까 그래도 된다.
          return <Shoes shoes={/*shoes[i]*/a } id={i} key={i}/>
        })
      }
      
    </div>
</div>
</Route>

<Route exact path="/detail">
  <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
  </div> 
</Route>

</div>

  );

}
function Shoes(props){
  return(
  <div className="col-md-4">
    <img src={"https://codingapple1.github.io/shop/shoes"+(props.id+1)+".jpg"} width="100%"/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content} & {props.shoes.price}</p>
  </div>
  );
}

export default App;
