import piggy from '../porco.png'
import React, { Component } from 'react'
import Detail from './Detail.js'
import TileContainer from './TileContainer.js'


class Tile extends Component {

  render(){
    // console.log(this.props)
  	return (
      <div>
        {this.props.singleHogData.name}
      </div>
  	)
  }
}

export default Tile
