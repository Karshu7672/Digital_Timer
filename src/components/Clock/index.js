import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()} /* modern approach */

  /* constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor  called')
  }
  */

  componentDidMount() {
    console.log('componentDidMountCalled')
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called')
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('Render Called', date)
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
