import React from 'react'
import NewPostre from '../components/new_postre'
import NewPlatillo from '../components/new_platillos'
import NewBebida from '../components/new_bebidas'

class CreateMenu extends React.Component {
  render () {
    return (
      <>
        <NewPostre />
        <NewPlatillo />
        <NewBebida />
      </>
    )
  }
}

export default CreateMenu
