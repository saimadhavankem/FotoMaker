import './index.css'

const TimeBox = props => {
  const {details, onTimeUpdate} = props
  const {id, value} = details
  const onButtonClick = () => {
    onTimeUpdate(id)
  }
  return (
    <button onClick={onButtonClick} className="btn-design" type="button">
      {value}
    </button>
  )
}

export default TimeBox
