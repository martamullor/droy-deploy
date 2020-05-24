import React, { Component } from 'react'
import './App.css'
import Loading from './components/droy/Loading'
import api from './services/apiClient'
import MATCH_COMPONENTS from './utils/componentsMatching'
import alias from './utils/alias'
import Error from './components/droy/Error'

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
} 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: STATUS.LOADING,
      userLayoutObj: [],
      projectStyle: "",
      projectId: "",
      dataError: ""
    }
  }

  componentDidMount = async () => {
    try {
      const projectId = window.location.hostname.split('.')[0]
      const { data: { componentsConfiguration, style, _id } } = await api.get(`/projects/${projectId}`)
      this.setState({
        projectId: _id,
        userLayoutObj: componentsConfiguration,
        projectStyle: style,
        status: STATUS.LOADED
      })
    } catch (error) {
      this.setState({
        status: STATUS.ERROR
      })
    }
  }

  showUserComponents = () => {
    const { userLayoutObj } = this.state
    return userLayoutObj.map((c,i) => {
      const UserComp = MATCH_COMPONENTS[c.code]
      const { info, componentUserOverrideStyle } = alias.findByCode(userLayoutObj, c.code)
      return <UserComp key={i} info={info} userStyle={componentUserOverrideStyle} mode='view'/>
    })
  }

  render() {
    const { status } = this.state
    return (
      <div className="main-builder">
        {status === STATUS.LOADING && <div className='loading-container'><Loading /></div>}
        {status === STATUS.LOADED && <div className="components-builder">{this.showUserComponents()}</div>}
        {status === STATUS.ERROR && <Error/>}
      </div>
    )
  }
}

export default App
