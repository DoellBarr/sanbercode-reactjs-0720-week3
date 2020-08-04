import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
      // let hari = new Date().toLocaleString(),
      //     waktu =`${hari.getFullYear()} - ${hari.getMonth() + 1} - ${hari.getDate()}`

    this.state = {
      time: 0,
      clock: new Date(),
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  currentTime()
  {
    this.setState({
      clock: new Date()
    })
  }

    componentWillMount(){
      setInterval(()=>this.currentTime(), 1000)
    }



  tick() {
    this.setState({
      time: this.state.time - 1
    });
  }

  render(){
    return(
      <>
      {
        this.state.time >= 0 &&
        <h1 style={{textAlign: "center"}}>
          sekarang jam : {this.state.clock.toLocaleTimeString()} hitung mundur : {this.state.time}
        </h1>
      }
      </>
    )
  }
}

export default Timer
