import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petsArray = this.props.pets.map(pet => (
      <Pet
        pet={pet}
        key={pet.id}
        onAdoptPet={this.props.onAdoptPet}
      />
    ))

    return <div className="ui cards">{petsArray}</div>
  }
}

export default PetBrowser
