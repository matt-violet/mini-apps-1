// Build your UI using ReactJS and pre-compile your views using Babel
// MUST place all of your React components into one file, app.jsx

/* 
F1 collects name, email, and password for account creation.
F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
F3 collects credit card #, expiry date, CVV, and billing zip code.
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      form1: false,
      form2: false,
      form3: false,
      confirmation: false,
    };
    this.displayForm1 = this.displayForm1.bind(this);
    this.displayForm2 = this.displayForm2.bind(this);
    this.displayForm3 = this.displayForm3.bind(this);
    this.displayConfirmation = this.displayConfirmation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  displayForm1(event) {
    this.setState({
      home: false,
      form1: true,
      form2: false,
      form3: false,
      confirmation: false
    });
    event.preventDefault();
  }

  displayForm2(event) {
    this.setState({
      home: false,
      form1: false,
      form2: true,
      form3: false,
      confirmation: false
    });
    event.preventDefault();
  }

  displayForm3(event) {
    this.setState({
      home: false,
      form1: false,
      form2: false,
      form3: true,
      confirmation: false
    });
    event.preventDefault();
  }

  displayConfirmation(event) {
    this.setState({
      home: false,
      form1: false,
      form2: false,
      form3: false,
      confirmation: true
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      event.target.name: event.target.value 
    });  
    event.preventDefault();
  }



  //======================  RENDER  ================================

  render() {
    if (this.state.home === true) {
      return (
        <div>
          <h2 class='header'>Shopping List</h2>
          <form onSubmit={(event) => this.displayForm1(event)}>
            <input type='submit' value='Check Out'/>
          </form>
        </div>
      );
    }
    if (this.state.form1 === true) {
      return (<AcctInfo />)
    }
    if (this.state.form2 === true) {
      return (<AddressInfo />);
    }
    if (this.state.form3 === true) {
      return (<PaymentInfo />);
    }  
    if (this.state.confirmation === true) {
      return (<Confirmation />);
    }  
  }
}
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
        <form onSubmit={(event) => this.displayForm2(event)}>
          Name: <input name='name' type='text' value={this.state.name} onChange={this.handleChange}/><br></br>
          Email: <input name='email' type='text' value={this.state.email} onChange={this.handleChange}/><br></br>
          Password: <input name='password' type='text' value={this.state.password} onChange={this.handleChange}/><br></br>
          <input type='submit' value='Next'/>
        </form>
      </div>
    );
  }
}
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
          <form onSubmit={(event) => this.displayForm3(event)}>
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
          <form onSubmit={(event) => this.displayConfirmation(event)}>
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