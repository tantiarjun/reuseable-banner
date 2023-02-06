import './index.css'

const BannerCardItem = props => {
  const {eachBanner} = props
  const {headerText, description, className} = eachBanner
  return (
    <li className={className}>
      <div className="card">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
