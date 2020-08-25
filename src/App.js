import React, { Component } from 'react'
import Quote from './Quote'
import Header from './Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        ranNum : 0,
        quotes: [
          {
            quotation: "Don't be hanging with no jank-ass jokers that don't help you shine.",
            author: "Will Smith",
            color: "#00D09C"
          },
          {
            quotation: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            author: "Mahatma Gandhi",
            color: "orange"
          },
          {
            quotation: "That which does not kill us makes us stronger.",
            author: "Friedrich Nietzsche",
            color: "tomato"
          },
          {
            quotation: "Do what you can, with what you have, where you are.",
            author: "Theodore Roosevelt",
            color: "#3034a6"
          },
          {
            quotation: "If you cannot do great things, do small things in a great way.",
            author: "Napoleon Hill",
            color: "#546E7A"
          },
          {
            quotation: "I haven’t failed. I’ve just found 10,000 ways that won’t work.",
            author: "Thomas Edison",
            color: "#ffea00"
          },
          {
            quotation: "A journey of a thousand leagues begins beneath one’s feet.",
            author: "Lao Tzu",
            color: "#33691E"
          },
          {
            quotation: "The difference between ordinary and extraordinary is that little extra.",
            author: "Jimmy Johnson",
            color: "#283593"
          },
          {
            quotation: "Happiness is not something ready made. It comes from your own actions.",
            author: "Dalai Lama",
            color: "#9C27B0"
          },
          {
            quotation: "The only thing worse than being blind is having sight but no vision.",
            author: "Helen Keller",
            color: "#D81B60"
          }
        ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({ranNum: Math.floor(Math.random() * 9)})
  }

  render() {
    return (
      <div>
        <Header/>
        <Quote quotes={this.state.quotes[this.state.ranNum]} handleClick={this.handleClick}/>
        <div className="foot">
          <h6>Designed &amp; Coded By :</h6>
          <h6 className="name">Abhilash Negi</h6>
        </div>
      </div>
    )
  }
}

export default App