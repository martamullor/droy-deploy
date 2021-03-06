import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageEditable from '../../droy/ImageEditable'

const optionsContainer = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: '50px',
  backgroundColor: 'white',
  fontFamily: "'Roboto Mono', monospace"
}

const container4options = {
  display: 'flex'
}

const twosections = {
  margin: '10px 20px'
}

const textOptionsContainer = {
  display: 'flex',
  textAlign: 'left',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#2a2c2a',
  width: '100%',
  fontFamily: "'Roboto', sans-serif",
  marginBottom: '15px'
}

const titleSection = {
  margin: '5px 0px',
  padding: ' 0px 30px',
  color: '#30374d',
  textAlign: 'left'
}

const imageContainer = {
  minWidth: '70px',
  maxWidth: '70px',
  padding: '10px 20px'
}

const subtitleSection = {
  fontWeight: '800',
  maxWidth: '100%',
  overflow: 'hidden',
  color: '#30374d'
}

const textSection = {
  color: '#7d818f',
  maxHeight: '50px'
}

class Modern4Options extends Component {
  render () {
    const { userStyle, info, changeImage, children: optionsBar, openChangeModal } = this.props
    return (
      <div style={Object.assign({}, optionsContainer, userStyle)}>
        {optionsBar}
        <h1 style={Object.assign({}, titleSection, info.text5.style)} data-id="text5" onDoubleClick={openChangeModal}>{info.text5.text}</h1>
        <div style={container4options}>
          <div style={twosections}>
            <div style={textOptionsContainer}>
              <div style={imageContainer}>
                <ImageEditable data-id="image1" src={info.image1.src} changeImage={changeImage} />
              </div>
              <div>
                <h2 style={Object.assign({}, subtitleSection, info.text1.style)} data-id="text1" onDoubleClick={openChangeModal}>{info.text1.text}</h2>
                <p style={Object.assign({}, textSection, info.text6.style)} data-id="text6" onDoubleClick={openChangeModal}>{info.text6.text}</p>
              </div>
            </div>
            <div style={textOptionsContainer}>
              <div style={imageContainer}>
                <ImageEditable data-id="image2" src={info.image2.src} changeImage={changeImage} />
              </div>
              <div>
                <h2 style={Object.assign({}, subtitleSection, info.text2.style)} data-id="text2" onDoubleClick={openChangeModal}>{info.text2.text}</h2>
                <p style={Object.assign({}, textSection, info.text7.style)} data-id="text7" onDoubleClick={openChangeModal}>{info.text7.text}</p>
              </div>
            </div>
          </div>
          <div style={twosections}>
            <div style={textOptionsContainer}>
              <div style={imageContainer}>
                <ImageEditable data-id="image3" src={info.image3.src} changeImage={changeImage} />
              </div>
              <div>
                <h2 style={Object.assign({}, subtitleSection, info.text3.style)} data-id="text3" onDoubleClick={openChangeModal}>{info.text3.text}</h2>
                <p style={Object.assign({}, textSection, info.text8.style)} data-id="text8" onDoubleClick={openChangeModal}>{info.text8.text}</p>
              </div>
            </div>
            <div style={textOptionsContainer}>
              <div style={imageContainer}>
                <ImageEditable data-id="image4" src={info.image4.src} changeImage={changeImage} />
              </div>
              <div>
                <h2 style={Object.assign({}, subtitleSection, info.text4.style)} data-id="text4" onDoubleClick={openChangeModal}>{info.text4.text}</h2>
                <p style={Object.assign({}, textSection, info.text9.style)} data-id="text9" onDoubleClick={openChangeModal}>{info.text9.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modern4Options.propTypes = {
  info: PropTypes.object,
  changeInfo: PropTypes.func,
  optionsBar: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  code: PropTypes.string,
  userStyle: PropTypes.object,
  changeImage: PropTypes.func,
  openChangeModal: PropTypes.func
}

export default Modern4Options
