import './index.css'

const DetailCard = props => {
  const {details} = props
  const {value} = details
  return <p className="card">{value}</p>
}

export default DetailCard
