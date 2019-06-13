import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class DogBreedImages extends Component {
  render() {
    return (
      <div className="dog-breed-images">
        <h1>Dogs Breed Images</h1>

        <p>This page will show images of the <b>{ this.props.breed}</b> a specific dog breed.</p>
        <br></br>
        
        <Link to="/">Go back to the index</Link>

        <br></br>
        <br></br>
        <div>
          { this.props.images && this.props.images.map(url => <img src={ url } alt="Dog" />) }
          { !this.props.images && 'Loading...' }
        </div>

      </div>
    )
  }
}
