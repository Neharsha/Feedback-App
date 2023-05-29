// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="main-container">
        <h1 className="heading">
          How Satisfied are you with our customer support performance
        </h1>
        <ul className="ul-container">
          {emojis.map(emoj => (
            <li key={emoj.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img src={emoj.imageUrl} alt={emoj.name} className="img-love" />
                <br />
                <span className="span">{emoj.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankuScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <img src={loveEmojiUrl} alt="love emoji" className="img" />
        <h1 className="thanku-text"> Thank You!</h1>
        <p className="p">
          We Will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderThankuScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
