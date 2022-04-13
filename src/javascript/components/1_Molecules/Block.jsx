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
    for (var i = 0; i < pictures.length; i++) {
      if (pictures[i].status != 11) {
        pictureItems.push(
          <Picture
            key={i}
            id={i}
            data={pictures[i]}
            onPress={onPress}
            changeblock={this.props.changeblock}
          />
        )
      }
    }
    return pictureItems
  }

  render() {
    return (
      <div className="Block">
        <h1>{this.props.title}</h1>
        <div className="pictures_collection">
          <div className="pictures">{this.pictureRender()}</div>
        </div>
      </div>
    )
  }
}