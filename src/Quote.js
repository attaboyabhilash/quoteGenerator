import React from 'react'
import './index.css'
import {FaTwitter} from 'react-icons/fa'

class Quote extends React.Component {
    render(){
        const quote = this.props.quotes.quotation
        const author = this.props.quotes.author
        const link = `https://twitter.com/intent/tweet?text=${quote} -${author}`
        const color = this.props.quotes.color
        return (
            <div id="quote-box" style={{borderLeft: `5px solid ${color}`}}>
                <h3 id="text">"{quote}"</h3>
                <p id="author">- {author}</p>
                <a target="__blank" href={link} id="tweet-quote" style={{background:color}}><FaTwitter/><span className="board">Tweet this Quote</span></a>
                <button id="new-quote" onClick={this.props.handleClick} style={{background:color}}>New Quote</button>
            </div>
        )
    }
}

export default Quote