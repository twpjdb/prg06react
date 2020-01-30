import React from 'react';

export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            band: null
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        const uri = `http://145.24.222.181:8000/bands/${id}`
        const res = await fetch(uri)

        this.setState({
            band: await res.json()
        })
    }

    render() {
        return (
            <div> 
                {
                    !this.state.band ? ( 
                        <div>Retrieving</div>
                    ) : (
                        <div>
                            <h1 style={{marginLeft: '22px'}}>Name: {this.state.band.name}</h1>
                            <table style={{marginLeft: '22px'}}>
                                <td>
                                    <tr style={{fontWeight: 'bold'}}>Albums: {this.state.band.albums}</tr>
                                    <br/>
                                    <tr style={{fontWeight: 'bold'}}>Genres: {this.state.band.genres}</tr>
                                </td>
                            </table>
                        </div>
                    )
                } 
            </div>
        )
    }
}