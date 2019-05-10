class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 1,
      data: []
    };
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage(event, state) {
    event.preventDefault();   
    this.setState({
      display: this.state.display + 1,
    });
    if (this.state.display !== 1){
      var newDataArr = this.state.data;
      newDataArr.push(state);
      this.setState({
        data: newDataArr
      })
    }
    // if (this.state.display !== 1){
    //   $.ajax({
    //     type: "POST",
    //     url: 'localhost:3000',
    //     data: state,
    //     success: () => alert('succesful POST!'),
    //     dataType: 'string'
    //   });
    // }
  }

  render() {
    const display = this.state.display;

    if (display === 1) {
      return (
        <div>
          <h2 class='header'>Shopping List</h2>
          <form onSubmit={(event) => this.nextPage(event)}>
            <input type='submit' value='Check Out'/>
          </form>
        </div>
      );
    }
    if (this.state.display === 2) {
      return (<CreateAcct nextPage={this.nextPage} />)
    }
    if (this.state.display === 3) {
      return (<EnterAddress nextPage={this.nextPage} />);
    }
    if (this.state.display === 4) {
      return (<PaymentInfo nextPage={this.nextPage} />);
    }  
    if (this.state.display === 5) {
      return (<Confirmation nextPage={this.nextPage} data={this.state.data}/>);
    }  
  }
}

//====================================== CREATE ACCT ========================================================
class CreateAcct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();    
    this.setState({
      [event.target.name]: event.target.value 
    });  
  }

  render() {
    return (
      <div>
        <h2 class='header'>Create an Account</h2>
        <form onSubmit={(event) => this.props.nextPage(event, this.state)}>
          Name: <input name='name' type='text' value={this.state.name} onChange={this.handleChange}/><br></br>
          Email: <input name='email' type='text' value={this.state.email} onChange={this.handleChange}/><br></br>
          Password: <input name='password' type='text' value={this.state.password} onChange={this.handleChange}/><br></br>
          <br></br>
          <input type='submit' value='Next'/>
        </form>
      </div>
    );
  }
}

//====================================== ADDRESS INFO ========================================================
class EnterAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();    
    this.setState({
      [event.target.name]: event.target.value 
    });  
  }

  render() {
    return (
      <div>
          <h2 class='header'>Enter Address</h2>
          <form onSubmit={(event) => this.props.nextPage(event, this.state)}>
            Address: <input type='text' name='address1' value={this.state.address1} onChange={this.handleChange}/><br></br>
            Address: <input type='text' name='address2' value={this.state.address2} onChange={this.handleChange}/><br></br>
            City: <input type='text' name='city' value={this.state.city} onChange={this.handleChange}/><br></br>
            State: <input type='text' name='state' value={this.state.state} onChange={this.handleChange}/><br></br>
            Zip: <input type='text' name='zip' value={this.state.zip} onChange={this.handleChange}/><br></br>
            Phone: <input type='text' name='phone' value={this.state.phone} onChange={this.handleChange}/><br></br>
            <br></br>
            <br></br>
            <input type='submit' value='Next'/>
          </form>
        </div>
    );
  }
}

//====================================== PAYMENT INFO ========================================================

class PaymentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: '',
      expiryDate: '',
      CVV: '',
      billingZipCode: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();    
    this.setState({
      [event.target.name]: event.target.value 
    });  
  }

  render() {
    return (
      <div>
          <h2 class='header'>Enter Credit Card</h2>
          <form onSubmit={(event) => this.props.nextPage(event, this.state)}>
            Credit Card Number: <input type='text' name='creditCardNumber' value={this.state.creditCardNumber} onChange={this.handleChange}/><br></br>
            Expiry Date: <input type='text' name='expiryDate' value={this.state.expiryDate} onChange={this.handleChange}/><br></br>
            CVV: <input type='text' name='CVV' value={this.state.CVV} onChange={this.handleChange}/><br></br>
            Billing Zip Code: <input type='text' name='billingZipCode' value={this.state.billingZipCode} onChange={this.handleChange}/><br></br>
            <br></br>
            <input type='submit' value='Next'/>
          </form>
        </div>
    );
  }
}

//====================================== CONFIRMATION PAGE ========================================================

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2 class='header'>Confirm Your Order</h2>
        <form>
          <div>name: {this.props.data[0].name}</div>
          <div>email: {this.props.data[0].email}</div>
          <div>password: {this.props.data[0].password}</div>
          <br></br>
          <div>address 1: {this.props.data[1].address1}</div>
          <div>address 2: {this.props.data[1].address2}</div>
          <div>city: {this.props.data[1].city}</div>
          <div>state: {this.props.data[1].state}</div>
          <div>zip code: {this.props.data[1].zip}</div>
          <div>phone: {this.props.data[1].phone}</div>
          <br></br>
          <div>credit card number: {this.props.data[2].creditCardNumber}</div>
          <div>expiry date: {this.props.data[2].expiryDate}</div>
          <div>CVV: {this.props.data[2].CVV}</div>
          <div>Billing Zip Code: {this.props.data[2].billingZipCode}</div>
          <br></br>
          <br></br>
          <input type='submit' value='Purchase'/>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));