import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {cryptocurrenciesData} = props

  return (
    <div className="crypto-currencies-list">
      <div className="table-name-list display-flex">
        <p>Coin Type</p>
        <div className="sub-table-name-list display-flex">
          <p className="column-name">USD</p>
          <p>EURO</p>
        </div>
      </div>
      <ul>
        {cryptocurrenciesData.map(eachData => (
          <CryptocurrencyItem eachData={eachData} key={eachData.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
