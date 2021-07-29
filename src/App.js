import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import './index.css';

export default function App() {
  return(
    <div id="body">
      <Header />
      <Card 
        className='section'
        img='./logo.svg'
        title='Our Company'
        description='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
      />
      <Card 
        className='section'
        img='./logo.svg'
        title='Our Partner'
        description='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
      />
      <Card 
        className='section'
        img='./logo.svg'
        title='Our Teams'
        description='It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
      />
      <ContactContainer />
    </div>
  )
}

const Header = () =>{
  return(
    <div className='header'>
      <span className='header-title'>
        Company
      </span>
      <br/>
      <span className='header-text'>
        We specialize in something ...
      </span>
    </div>
  );
}

const Card = (props) => {
  return(
    <div className={props.className}>
      <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt='' />
      </div>

      <div className="big-div">
        <span className='div-title'>
          {props.title}
        </span>
        <br/>
        <span>
          {props.description}
        </span>
      </div>
    </div>
  );
}

const ContactContainer = () =>{
  return(
    <div className='contact-container container-fluid bg-grey'>
      <span className='div-title'>Contact Us</span>
      <div className='contact-form'>
      <div id='sect1'>
        <span>Contact us and we will get back to you within 24hrs.</span>
        <span>
          <i className='fas fa-map-marker-alt'></i>
          Bongao Tawi-Tawi
        </span>
        <span>
          <i className='fas fa-mobile-alt'></i>
          09051344494
        </span>
        <span>
          <i className='far fa-envelop'></i>
          ramosmarvin50@gmail.com
        </span>
      </div>
      <div id='sect2'>
        <span>
          Contact
        </span>

        <input type='text' placeholder='email address' className='input-field'/>
        <textare name='' id='' cols='30' rows='10' placeholder='comment'></textare>
        <Button className='contact-btn'>Send</Button>
      </div>
      </div>
    </div>
  );
}
