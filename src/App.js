import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import axios from 'axios'

const BlocTab = (props) => {

  function changeBloc(blocName) {
    props.changeSelectedBloc(props.tabName)
    props.loadCountriesFromBloc(props.tabName.toLowerCase())
  }

  return (
    <Route exact={props.exact} path={props.to} children={({ match }) => {
      return (
        <li className={`tab-title ${match ? 'active' : ''}`} >
          <Link onClick={() => changeBloc(props.tabName)} to={props.to}>{props.tabName}</Link>
        </li>
      )
    }
    } />
  )
}

class BlocView extends Component {

  componentDidMount() {
    this.props.changeSelectedBloc(this.props.match.params.bloc.toUpperCase())
    this.props.loadCountriesFromBloc(this.props.match.params.bloc.toUpperCase())
  }

  render() {
    return (
      <div>
        <div className="columns small-3 padding-top-medium leftNav">
          <ul className="tabs vertical">
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/"} tabName="HOME" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/tracking/countries"} tabName="TRACKING" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/eu"} tabName="EU" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/efta"} tabName="EFTA" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/caricom"} tabName="CARICOM" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/pa"} tabName="PA" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/au"} tabName="AU" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/usan"} tabName="USAN" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/eeu"} tabName="EEU" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/al"} tabName="AL" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/asean"} tabName="ASEAN" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/cais"} tabName="CAIS" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/cefta"} tabName="CEFTA" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/nafta"} tabName="NAFTA" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/saarc"} tabName="SAARC" />
          </ul>
        </div>
        <div className="columns small-9 padding-top-medium rightBloc">
          <div><h1>{this.props.match.params.bloc}</h1></div>
          <div>
            {this.props.countries.map((country) => <CountryCard key={country.alpha3Code} country={country} />)}
          </div>
        </div>
      </div>
    )
  }
}

const CountryCard = (props) => {
  return (
    <div className="card">
      <div>
        Name: {props.country.name}
      </div>
      <div>
        Capital: {props.country.capital}
      </div>
      <div>
        Population: {props.country.population}
      </div>
    </div>
  )
}

const HomeView = (props) => {
  return (
    <div>
      <div className="columns small-3 padding-top-medium leftNav">
        <ul className="tabs vertical">
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/"} tabName="HOME" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/tracking/countries"} tabName="TRACKING" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/eu"} tabName="EU" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/efta"} tabName="EFTA" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/caricom"} tabName="CAPRICOM" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/pa"} tabName="PA" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/au"} tabName="AU" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/usan"} tabName="USAN" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/eeu"} tabName="EEU" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/al"} tabName="AL" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/asean"} tabName="ASEAN" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/cais"} tabName="CAIS" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/cefta"} tabName="CEFTA" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/nafta"} tabName="NAFTA" />
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/saarc"} tabName="SAARC" />
        </ul>
      </div>
      <div className="columns small-9 padding-top-medium rightHome">
        You're Home!
      </div>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      blocCountries: [],
      trackedCountries: [],
      selectedCountry: undefined,
      selectedBloc: undefined,
    }
    this.loadCountriesFromBloc = this.loadCountriesFromBloc.bind(this)
    this.changeSelectedBloc = this.changeSelectedBloc.bind(this)
  }

  loadCountriesFromBloc(blocName) {
    if (blocName !== "HOME" && blocName !== "TRACKING") {
      const promise = axios.get('http://restcountries.eu/rest/v2/regionalbloc/' + blocName);

      promise.then(({ data: countries }) => {
        this.setState({ blocCountries: countries })
      }, () => { })
    }
  }

  changeSelectedBloc(blocName) {
    if (blocName !== "HOME" && blocName !== "TRACKING")
      this.setState({selectedBloc: blocName})
    else {
      this.setState({selectedBloc: undefined, blocCountries: []})
    }
      
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <HomeView loadCountriesFromBloc={this.loadCountriesFromBloc} changeSelectedBloc={this.changeSelectedBloc} />} />
            <Route exact path="/:bloc" render={({ match }) => <BlocView countries={this.state.blocCountries} changeSelectedBloc={this.changeSelectedBloc} match={match} loadCountriesFromBloc={this.loadCountriesFromBloc} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
