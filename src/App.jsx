import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myerr: {} };
  }
  doValidation(){
    var isValid = true
    var temperr = {}
    var { txt1, txt2, txt3, txt4, txt5, txt6, txt7 } = this.state
    if(!txt1){
      temperr.txt1 = "Enter Your Name"
      isValid = false
    }
    if(!txt2){
      temperr.txt2 = "Enter Your Gender"
      isValid = false
    }
    if(!txt3){
      temperr.txt3 = "Enter Your Hobby"
      isValid = false
    }
    if(!txt4){
      temperr.txt4 = "Enter Your Mobile"
      isValid = false
    }
    if(!txt5){
      temperr.txt5 = "Enter Your E_Mail"
      isValid = false
    }
    if(!txt6){
      temperr.txt6 = "Enter Your Password"
      isValid = false
    }
    if(!txt7){
      temperr.txt7 = "Enter Your Age"
      isValid = false
    }
    this.setState({myerr : temperr})
    return isValid
  }
  render() {
    return (
      <div>
        Name:- <input type='text' name='txt1' onChange={(e) => this.setState({txt1:e.target.value})}/><br/>
        <p style={{color: "red"}}>{this.state.myerr.txt1}</p><br/>
        Gender:- <input type='radio' name='txt2' value='Male' onChange={(e) => this.setState({txt2:e.target.value})}/>Male
                 <input type='radio' name='txt2' value='Female' onChange={(e) => this.setState({txt2:e.target.value})}/>Female<br/>
        <p style={{color: "red"}}>{this.state.myerr.txt2}</p><br/>
        Hobby:- <input type='checkbox' name='txt3' value='Sports' onChange={(e) => this.setState({txt3:e.target.value})}/>Powerlifting
                <input type='checkbox' name='txt3' value='Singing' onChange={(e) => this.setState({txt3:e.target.value})}/>Singing
                <input type='checkbox' name='txt3' value='Traveling' onChange={(e) => this.setState({txt3:e.target.value})}/>Traveling
                <input type='checkbox' name='txt3' value='Art' onChange={(e) => this.setState({txt3:e.target.value})}/>Art<br/>
                <input type='checkbox' name='txt3' value='Trading' onChange={(e) => this.setState({txt3:e.target.value})}/>Trading
                <input type='checkbox' name='txt3' value='Teaching' onChange={(e) => this.setState({txt3:e.target.value})}/>Teaching
                <input type='checkbox' name='txt3' value='Others' onChange={(e) => this.setState({txt3:e.target.value})}/>Others
        <p style={{color: "red"}}>{this.state.myerr.txt3}</p><br/>
        Mobile:- <input type='text' name='txt4' onChange={(e) => this.setState({txt4:e.target.value})}/><br/>
        <p style={{color: "red"}}>{this.state.myerr.txt4}</p><br/>
        E_Mail:- <input type='text' name='txt5' onChange={(e) => this.setState({txt5:e.target.value})}/><br/>
        <p style={{color: "red"}}>{this.state.myerr.txt5}</p><br/>
        Password:- <input type='text' name='txt6' onChange={(e) => this.setState({txt6:e.target.value})}/><br/>
        <p style={{color: "red"}}>{this.state.myerr.txt6}</p><br/>
        Age:- <select name='txt7' onChange={(e) => this.setState({txt7:e.target.value})}><br/>
                    <option value='0-16'>0-16</option>
                    <option value='18-28'>18-28</option>
                    <option value='29-35'>29-35</option>
                    <option value='36-40'>36-40</option>
                    <option value='41-45'>41-45</option>
                    <option value='46-50'>46-50</option>
                    <option value='Above 50'>Above 50</option>
                    </select>
        <p style={{color: "red"}}>{this.state.myerr.txt1}</p><br/>
        <input type='button' value='Click Me' onClick={this.doValidation.bind(this)}/><br/>
        <p>{this.state.txt1}<br/>
           {this.state.txt2}<br/>
           {this.state.txt3}<br/>
           {this.state.txt4}<br/>
           {this.state.txt5}<br/>
           {this.state.txt6}<br/>
           {this.state.txt7}<br/>
        </p>
      </div>
    );
  }
}

export default App;