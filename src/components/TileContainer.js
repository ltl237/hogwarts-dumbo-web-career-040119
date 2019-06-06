import piggy from '../porco.png'
import React, { Component } from 'react'
import Tile from './Tile.js'
// import hogs from '../porkers_data.js'

class TileContainer extends Component {



  render(){
    console.log(this.props.hogData)
  	return (
      <div className="tile-container">
        {this.props.hogData.map(hog => {
          return <Tile singleHogData = {hog}/>
        })}
      </div>
    )
  }

}


export default TileContainer
