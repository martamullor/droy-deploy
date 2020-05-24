import React, { Component } from 'react'
import './App.css'
import Loading from './components/droy/Loading'
import api from './services/apiClient'
import MATCH_COMPONENTS from './utils/componentsMatching'
import alias from './utils/alias'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      userLayoutObj: [],
      projectStyle: "",
      projectId: "",
      dataError: ""
    }
  }

  componentDidMount = async () => {
    const { data: { componentsConfiguration, style, _id } } = await api.get(`/projects/${window.location.hostname.split('.')[0]}`)
    this.setState({
      projectId: _id,
      userLayoutObj: componentsConfiguration,
      projectStyle: style,
      isLoading: false
    })
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
    const { isLoading } = this.state
    return (
      <div className="main-builder">
        {isLoading && <div className='loading-container'><Loading /></div>}
        {!isLoading && <div className="components-builder">{this.showUserComponents()}</div>}
      </div>
    )
  }
}

export default App
