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
      checkOutData: {
        name: '',
        email: '',
        password: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        creditCard: '',
        expDate: '',
        CVV: '',
        billingZip: ''
      }
    };
    this.displayForm1 = this.displayForm1.bind(this);
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
    
      return (
        <div>
          <h2 class='header'>Create an Account</h2>
          <form onSubmit={(event) => this.displayForm2(event)}>
            Name: <input type='text'/><br></br>
            Emal: <input type='text'/><br></br>
            Password: <input type='text'/><br></br>
            <input type='submit' value='Next'/>
          </form>
        </div>
      );
    }

    if (this.state.form2 === true) {
    
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

    if (this.state.form3 === true) {
    
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

    if (this.state.confirmation === true) {
    
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
}

ReactDOM.render(<App />, document.getElementById('root'));