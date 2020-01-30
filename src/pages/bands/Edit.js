import React from 'react';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            band: null,
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        const res = await fetch(`http://145.24.222.181:8000/bands/${id}`)
        const band = await res.json()

        this.setState({
            loading: true,
            id: band._id,
            name: band.name,
            albums: band.albums,
            genres: band.genres
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        fetch(`http://145.24.222.181:8000/bands/${this.state.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: e.target.name.value,
                albums: e.target.albums.value,
                genres: e.target.genres.value
            })
        }).then(res => {
            if (res.ok) {
            }
        })
    }

    render() {
        return (
            <div>
                <h1 style={{marginLeft: '22px'}}>Edit band</h1>
                {
                    !this.state.loading ? (
                        <div>Retrieving</div>
                    ) : (
                        <form onSubmit={this.handleSubmit} style={{ padding: '10px', margin: '10px' }}>
                            <div>
                                <label style={{marginLeft: '4px'}}>Name</label>
                                <br/>
                                <input style={{ margin: '5px' }} type="text" name="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                            </div>
                            <div>
                                <label style={{marginLeft: '4px'}}>Albums</label>
                                <br/>
                                <input style={{ margin: '5px' }} type="text" name="albums" value={this.state.albums} onChange={e => this.setState({ albums: e.target.value })} />
                            </div>
                            <div>
                                <label style={{marginLeft: '4px'}}>Genres</label>
                                <br/>
                                <input style={{ margin: '5px' }} type="text" name="genres" value={this.state.genres} onChange={e => this.setState({ genres: e.target.value })}/>
                            </div>
                            <input style={{ borderRadius: '5px', marginTop: '10px', marginLeft: '4px' }} type="submit" value="Edit"/>
                        </form>
                    )
                }
            </div>
        )
    }
}