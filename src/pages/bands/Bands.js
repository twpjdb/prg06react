import React from 'react';
import Item from '../../components/Item';

export default class Bands extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bands: null
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    async componentDidMount() {
        
        const res = await fetch('http://145.24.222.181:8000/bands')
        const data = await res.json()
        
        this.setState({ 
            bands: data['items']
        })
    }

    handleDelete = band => {
        const bandId = band._id
        const bands = this.state.bands

        fetch(`http://145.24.222.181:8000/bands/${bandId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {           
            }
        })

        this.setState({
            bands: bands.filter(band => band._id !== bandId)
        });
    }

    render() {
        return (
            <div>
                <h1 style={{marginLeft: '21px'}}>Bands</h1>
                {
                    !this.state.bands ? (
                        <div>Retrieving</div>
                    ) : (
                        <div>
                            {
                                this.state.bands.map(band => <Item onDelete={this.handleDelete} key={band._id} band={band}></Item>)
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}