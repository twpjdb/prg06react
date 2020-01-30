import React from 'react';

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch('http://145.24.222.181:8000/bands', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
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
                <h1 style={{ marginLeft: '22px' }}>Create new band</h1>
                <form onSubmit={this.handleSubmit} style={{ display: 'inline-block', padding: '10px', margin: '10px' }}>
                    <div>
                        <label>Name</label>
                        <br/>
                        <input style={{ margin: '10px' }} type="text" name="name"/>
                    </div>
                    <div>
                        <label>Albums</label>
                        <br/>
                        <input style={{ margin: '10px' }} type="text" name="albums"/>
                    </div>
                    <div>
                        <label>Genres</label>
                        <br/>
                        <input style={{ margin: '10px' }} type="text" name="genres"/>
                    </div>
                    <input style={{ margin: '10px' }} type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}