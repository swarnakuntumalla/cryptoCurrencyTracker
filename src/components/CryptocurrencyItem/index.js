import './index.css'

const CryptocurrencyItem = props => {
  const {eachData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachData

  return (
    <li className="each-item display-flex">
      <div className="display-flex">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </div>
      <div className="display-flex">
        <p className="column">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
