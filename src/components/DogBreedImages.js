import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class DogBreedImages extends Component {
  render() {
    return (
      <div className="dog-breed-images">
        <h1>Dogs Breed Images</h1>

        This page will show images of a specific dog breed.
          <br></br>
        <Link to="/">Go back to the index</Link>
      </div>
    )
  }
}
