import React, { Component } from 'react'

export default class LinkEditable extends Component {

  goToLink = () => {
    const { info } = this.props
    if(info.toNewPage) window.open(info.href)
    else window.location = info.href
  }

  render () {
    let { info, style, contentAttrStyle } = this.props
    const dataId = this.props['data-id']
    style = Object.assign({}, style, contentAttrStyle)
    return <button type="button" onClick={this.goToLink} data-id={dataId} style={style}>{info.text}</button>
  }
}
