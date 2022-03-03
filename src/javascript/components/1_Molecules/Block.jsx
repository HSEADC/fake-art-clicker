import React, { Component } from 'react'
import Picture from '../0_Atoms/Picture.jsx'

export default class Block extends Component {
  constructor(props) {
    super(props)
  }
  pictureRender = () => {
    const pictures = this.props.pictures
    const onPress = this.props.onPress
    let pictureItems = []
    for (var i = 0; i < pictures; i++) {
      pictureItems.push(<Picture key={i} onPress={onPress} />)
    }
    return pictureItems
  }

  render() {
    return (
      <div className="Block">
        <h1>{this.props.title}</h1>
        {this.pictureRender()}
      </div>
    )
  }
}
