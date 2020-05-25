import React, { Component } from 'react'

export default class ImageEditable extends Component {

  handleError = (e) => {
    e.target.src = '/img/notFound.jpg'
  }

  render () {
    const { src, style } = this.props
    return (
      <div style={style}>
        <img onError={this.handleError} src={src} alt="" style={{ width: '100%', height: '100%' }}/>
      </div>
    )
  }
}
