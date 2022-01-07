import React from 'react'

class Atributo extends React.Component {
    render() {

        const { datatestid, tipoAtrib } = this.props 

        return (
            <>
                <label htmlFor={datatestid}>{tipoAtrib}: </label>
                <input type="number" data-testid={datatestid} id={datatestid}></input>
            </>
        )
    }
}

export default Atributo