import {Component} from 'react'
import TimeBox from './Components/TimeBox'
import DetailCard from './Components/DetailCard'
import './App.css'

const List = ['Ish', 'Shiv', 'Shrav', 'Shanthi', 'Poo']

class App extends Component {
  state = {
    time: [
      {id: 0, value: '0:00'},
      {id: 1, value: '1:00'},
      {id: 2, value: '2:00'},
      {id: 3, value: '3:00'},
      {id: 4, value: '4:00'},
      {id: 5, value: '5:00'},
      {id: 6, value: '6:00'},
      {id: 7, value: '7:00'},
      {id: 8, value: '8:00'},
      {id: 9, value: '9:00'},
      {id: 10, value: '10:00'},
      {id: 11, value: '11:00'},
      {id: 12, value: '12:00'},
      {id: 13, value: '13:00'},
      {id: 14, value: '14:00'},
      {id: 15, value: '15:00'},
      {id: 16, value: '16:00'},
      {id: 17, value: '17:00'},
      {id: 18, value: '18:00'},
      {id: 19, value: '19:00'},
      {id: 20, value: '20:00'},
      {id: 21, value: '21:00'},
      {id: 22, value: '22:00'},
      {id: 23, value: '23:00'},
    ],
    isError: false,
    timeBox: false,
    detailBox: false,
    userInput: '',
    Ish: [],
    Shiv: [],
    Shanthi: [],
    Poo: [],
    Shrav: [],
  }

  onUsernameChange = event => {
    this.setState({userInput: event.target.value})
  }

  onTimeUpdate = id => {
    const {time, Ish, Shiv, Shanthi, Poo, Shrav, userInput} = this.state
    const timeFind = time.find(eachTime => eachTime.id === id)
    const updatedTime = time.filter(eachItem => eachItem.id !== id)
    if (userInput === 'Ish') {
      if (Ish.length < 5) {
        const totalList = [...Ish, timeFind]
        this.setState({Ish: totalList, time: updatedTime, detailBox: true})
      }
    } else if (userInput === 'Shiv') {
      if (Shiv.length < 5) {
        const totalList = [...Shiv, timeFind]
        this.setState({Shiv: totalList, time: updatedTime, detailBox: true})
      }
    } else if (userInput === 'Shanthi') {
      if (Shanthi.length < 5) {
        const totalList = [...Shanthi, timeFind]
        this.setState({Shanthi: totalList, time: updatedTime, detailBox: true})
      }
    } else if (userInput === 'Shrav') {
      if (Shrav.length < 5) {
        const totalList = [...Shrav, timeFind]
        this.setState({Shrav: totalList, time: updatedTime, detailBox: true})
      }
    } else if (userInput === 'Poo') {
      if (Poo.length < 5) {
        const totalList = [...Poo, timeFind]
        this.setState({Poo: totalList, time: updatedTime, detailBox: true})
      }
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userInput} = this.state
    const detailValue = List.find(eachName => eachName === userInput)
    if (detailValue !== undefined) {
      this.setState({timeBox: true, isError: false})
    } else {
      this.setState({isError: true, timeBox: false})
    }
  }

  render() {
    const {
      time,
      timeBox,
      Ish,
      Shiv,
      Shanthi,
      Poo,
      Shrav,
      detailBox,
      userInput,
      isError,
    } = this.state
    console.log(Ish)
    return (
      <div className="bg-container">
        <div className="user-container">
          <form onSubmit={this.onSubmitForm} className="input-container">
            <label className="label-text" htmlFor="username">
              Username
            </label>
            <input
              onChange={this.onUsernameChange}
              id="username"
              className="input-design"
              placeholder="Enter Your Name"
              value={userInput}
            />
            {isError && <p className="error-text">Enter a valid name</p>}
            <button className="btn-design" type="submit">
              Login
            </button>
          </form>
        </div>
        {timeBox && (
          <div className="time-slot-container">
            <li className="list-container">
              {time.map(each => (
                <TimeBox
                  onTimeUpdate={this.onTimeUpdate}
                  key={each.id}
                  details={each}
                />
              ))}
            </li>
          </div>
        )}
        {detailBox && (
          <div className="details-box">
            {Ish.length > 0 && (
              <div className="box-1">
                <p>Ish meetings</p>
                <li className="card-container">
                  {Ish.map(name => (
                    <DetailCard key={name.id} details={name} />
                  ))}
                </li>
              </div>
            )}
            {Shiv.length > 0 && (
              <div className="box-1">
                <p>Shiv meetings</p>
                <li className="card-container">
                  {Shiv.map(name => (
                    <DetailCard key={name.id} details={name} />
                  ))}
                </li>
              </div>
            )}
            {Shanthi.length > 0 && (
              <div className="box-1">
                <p>Shanthi meetings</p>
                <li className="card-container">
                  {Shanthi.map(name => (
                    <DetailCard key={name.id} details={name} />
                  ))}
                </li>
              </div>
            )}
            {Shrav.length > 0 && (
              <div className="box-1">
                <p>Shrav meetings</p>
                <li className="card-container">
                  {Shrav.map(name => (
                    <DetailCard key={name.id} details={name} />
                  ))}
                </li>
              </div>
            )}
            {Poo.length > 0 && (
              <div className="box-1">
                <p>Poo meetings</p>
                <li className="card-container">
                  {Poo.map(name => (
                    <DetailCard key={name.id} details={name} />
                  ))}
                </li>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default App
