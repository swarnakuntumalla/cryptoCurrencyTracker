import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrenciesData()
  }

  updateCryptocurrencyData = data => ({
    id: data.id,
    currencyLogo: data.currency_logo,
    currencyName: data.currency_name,
    euroValue: data.euro_value,
    usdValue: data.usd_value,
  })

  getCryptocurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem =>
      this.updateCryptocurrencyData(eachItem),
    )
    this.setState({cryptocurrenciesData: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciesData, isLoading} = this.state
    return (
      <div className="crypto-currency-tracker-app display-properties">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="display-properties">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="Cryptocurrency Tracker"
              className="cryptocurrency-img"
            />

            <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
