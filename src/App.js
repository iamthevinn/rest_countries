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
    this.props.loadTrackedCountries();
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
            {this.props.countries.map((country) => <CountryCard changeSelectedCountry={this.props.changeSelectedCountry} fromBloc={true} isTracked={this.props.trackedCountries.find((trackedCountry) => trackedCountry.name === country.name)} addToTrackingList={this.props.addToTrackingList} key={country.alpha3Code} country={country} />)}
          </div>
        </div>
      </div>
    )
  }
}

const CountryCard = (props) => {
  return (
    <div className="card">
      <div style={{ display: 'inline-block' }}>
        <Link onClick={() => props.changeSelectedCountry(props.country)} to={'/countries/' + props.country.name} >
          Name: {props.country.name}
        </Link>
        <div>
          Capital: {props.country.capital}
        </div>
        <div>
          Population: {props.country.population}
        </div>
      </div>
      <div style={{ display: 'inline-block', paddingLeft: '30%', verticalAlign: 'top' }}>
        <button disabled={props.isTracked && props.fromBloc} className={props.isTracked ? props.fromBloc ? "warning" : "alert" : "success"} onClick={!props.isTracked ? () => props.addToTrackingList(props.country) : () => props.removeFromTrackingList(props.country)}>Track</button>
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
          <BlocTab loadCountriesFromBloc={props.loadCountriesFromBloc} changeSelectedBloc={props.changeSelectedBloc} exact={true} to={"/caricom"} tabName="CARICOM" />
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

class TrackingView extends Component {

  componentDidMount() {
    this.props.loadTrackedCountries();
  }

  render() {
    return (
      <div>
        <div className="columns small-3 padding-top-medium leftNav">
          <ul className="tabs vertical">
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/"} tabName="HOME" />
            <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/tracking/countries"} tabName="TRACKING" />
          </ul>
        </div>
        <div className="columns small-9 padding-top-medium rightHome">
          <div>
            {this.props.trackedCountries.map((country) => <CountryCard key={country.id} isTracked={this.props.trackedCountries.find((trackedCountry) => trackedCountry.name === country.name)} addToTrackingList={this.props.addToTrackingList} removeFromTrackingList={this.props.removeFromTrackingList} country={country} />)}
          </div>
        </div>
      </div>
    )
  }
}

class CountryView extends Component {

  componentDidMount() {
    this.props.setSelectedCountry(this.props.match.params.country)
  }

  render() {
    if (this.props.selectedCountry) {
      return (
        <div>
          <div className="columns small-3 padding-top-medium leftNav">
            <ul className="tabs vertical">
              <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/"} tabName="HOME" />
              <BlocTab loadCountriesFromBloc={this.props.loadCountriesFromBloc} changeSelectedBloc={this.props.changeSelectedBloc} exact={true} to={"/tracking/countries"} tabName="TRACKING" />
            </ul>
          </div>
          <div className="columns small-9 padding-top-medium rightHome">
            <div>
              <h1>
                Name: {this.props.selectedCountry.name}
              </h1>
              <h3>
                Capital: {this.props.selectedCountry.capital}
              </h3>
              <h3>
                Population: {this.props.selectedCountry.population}
              </h3>
              <div>
                <h3>Flag:</h3>
                <img src={this.props.selectedCountry.flag} alt="flag" />
              </div>
            </div>
          </div>
        </div>
      )
    } else return <div></div>
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blocCountries: [],
      trackedCountries: [],
      selectedCountry: undefined,
      selectedBloc: undefined,
    }
    this.loadCountriesFromBloc = this.loadCountriesFromBloc.bind(this)
    this.changeSelectedBloc = this.changeSelectedBloc.bind(this)
    this.addToTrackingList = this.addToTrackingList.bind(this)
    this.loadTrackedCountries = this.loadTrackedCountries.bind(this)
    this.removeFromTrackingList = this.removeFromTrackingList.bind(this)
    this.changeSelectedCountry = this.changeSelectedCountry.bind(this)
    this.setSelectedCountry = this.setSelectedCountry.bind(this)
  }

  setSelectedCountry(countryName) {
    const promise = axios.get('http://restcountries.eu/rest/v2/');

    promise.then(({ data: countries }) => {
      this.setState({ selectedCountry: countries.find((country) => country.name === countryName) })
    }, () => { })
  }

  changeSelectedCountry(country) {
    this.setState({ selectedCountry: country })
  }

  loadTrackedCountries() {
    const promise = axios.get('http://5a860d8f085fdd0012704323.mockapi.io/countries');

    promise.then(({ data: trackedCountries }) => {
      this.setState({ trackedCountries: trackedCountries })
    }, () => { })
  }

  loadCountriesFromBloc(blocName) {
    if (blocName !== "home" && blocName !== 'tracking') {
      const promise = axios.get('http://restcountries.eu/rest/v2/regionalbloc/' + blocName);

      promise.then(({ data: countries }) => {
        this.setState({ blocCountries: countries })
      }, () => { })
    }
  }

  changeSelectedBloc(blocName) {
    if (blocName !== "HOME" && blocName !== "TRACKING")
      this.setState({ selectedBloc: blocName })
    else {
      this.setState({ selectedBloc: undefined, blocCountries: [] })
    }

  }

  addToTrackingList(country) {
    if (!this.state.trackedCountries.find((trackedCountry) => trackedCountry.name === country.name)) {
      const promise = axios.post('http://5a860d8f085fdd0012704323.mockapi.io/countries', { name: country.name, flag: country.flag, capital: country.capital, population: country.population })

      promise.then(() => {
        this.loadTrackedCountries();
      }, () => { })
    }
  }

  removeFromTrackingList(country) {
    const promise = axios.delete('http://5a860d8f085fdd0012704323.mockapi.io/countries/' + country.id)

    promise.then(() => {
      this.loadTrackedCountries();
    }, () => { })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <HomeView loadCountriesFromBloc={this.loadCountriesFromBloc} changeSelectedBloc={this.changeSelectedBloc} />} />
            <Route exact path="/:bloc" render={({ match }) => <BlocView changeSelectedCountry={this.changeSelectedCountry} loadTrackedCountries={this.loadTrackedCountries} trackedCountries={this.state.trackedCountries} addToTrackingList={this.addToTrackingList} countries={this.state.blocCountries} changeSelectedBloc={this.changeSelectedBloc} match={match} loadCountriesFromBloc={this.loadCountriesFromBloc} />} />
            <Route exact path="/tracking/countries" render={() => <TrackingView removeFromTrackingList={this.removeFromTrackingList} trackedCountries={this.state.trackedCountries} loadTrackedCountries={this.loadTrackedCountries} loadCountriesFromBloc={this.loadCountriesFromBloc} changeSelectedBloc={this.changeSelectedBloc} />} />
            <Route exact path="/countries/:country" render={({ match }) => <CountryView match={match} setSelectedCountry={this.setSelectedCountry} changeSelectedBloc={this.changeSelectedBloc} loadCountriesFromBloc={this.loadCountriesFromBloc} selectedCountry={this.state.selectedCountry} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
