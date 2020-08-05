import React, {Component} from 'react'

class Jam extends Component{
  constructor(props){
    super(props)
      // let hari = new Date().toLocaleString(),
      //     waktu =`${hari.getFullYear()} - ${hari.getMonth() + 1} - ${hari.getDate()}`

    this.state = {
      time: 0,
      clock: new Date(),
    }
  }

  currentTime()
  {
    this.setState({
      clock: new Date()
    })
  }

  componentDidMount(){
      setInterval(()=>this.currentTime(), 1000)
    }


  render(){
    return(
      <>
      {
        
        <h1 style={{textAlign: "center"}}>
           {this.state.clock.toLocaleTimeString()} 
        </h1>
      }
      </>
    )
  }
}

export default Jam