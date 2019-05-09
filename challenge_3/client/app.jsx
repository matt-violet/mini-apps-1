class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 1,
    };
    this.nextPage = this.nextPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  nextPage(event) {
    this.setState({
      display: this.state.display + 1
    });
    event.preventDefault();    
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value 
    });  
    event.preventDefault();    
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
      return (<AcctInfo nextPage={this.nextPage} handleChange={this.handleChange}/>)
    }
    if (this.state.display === 3) {
      return (<AddressInfo nextPage={this.nextPage} handleChange={this.handleChange}/>);
    }
    if (this.state.display === 4) {
      return (<PaymentInfo nextPage={this.nextPage} handleChange={this.handleChange}/>);
    }  
    if (this.state.display === 5) {
      return (<Confirmation nextPage={this.nextPage} handleChange={this.handleChange}/>);
    }  
  }
}

//====================================== Acct Info ========================================================
class AcctInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <div>
        <h2 class='header'>Create an Account</h2>
        <form onSubmit={(event) => this.props.nextPage(event)}>
          Name: <input name='name' type='text' value={this.state.name} onChange={this.props.handleChange}/><br></br>
          Email: <input name='email' type='text' value={this.state.email} onChange={this.props.handleChange}/><br></br>
          Password: <input name='password' type='text' value={this.state.password} onChange={this.props.handleChange}/><br></br>
          <input type='submit' value='Next'/>
        </form>
      </div>
    );
  }
}

//====================================== Address Info ========================================================
class AddressInfo extends React.Component {
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
  }
  render() {
    return (
      <div>
          <h2 class='header'>Enter Address</h2>
          <form onSubmit={(event) => this.props.nextPage(event)}>
            Address: <input type='text'/><br></br>
            Address: <input type='text'/><br></br>
            City: <input type='text'/><br></br>
            State: <input type='text'/><br></br>
            Zip: <input type='text'/><br></br>
            Phone: <input type='text'/><br></br>
            <input type='submit' value='Next'/>
          </form>
        </div>
    );
  }
}

//====================================== Payment Info ========================================================

class PaymentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: '',
      expiryDate: '',
      CVV: '',
      billingZipCode: ''
    };
  }
  render() {
    return (
      <div>
          <h2 class='header'>Enter Credit Card</h2>
          <form onSubmit={(event) => this.props.nextPage(event)}>
            Credit Card Number: <input type='text'/><br></br>
            Expiry Date: <input type='text'/><br></br>
            CVV: <input type='text'/><br></br>
            Billing Zip Code: <input type='text'/><br></br>
            <input type='submit' value='Next'/>
          </form>
        </div>
    );
  }
}

//====================================== Confirmation Page ========================================================

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
          Order Summary: <br></br>
          Item 1 <br></br>
          Item 2 <br></br>
          Item 3 <br></br>
          <input type='submit' value='Purchase'/>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));