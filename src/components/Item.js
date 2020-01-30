import React from 'react';
import { Link } from "react-router-dom";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            band: this.props.band
        }
    }

    render() {
        return (
            <div style={{ display: 'inline-block', padding: '20px', margin: '20px', borderRadius: '25px', backgroundColor: 'whitesmoke'}}>
                <h2>{this.state.band.name}</h2>
                <div style={{ padding: '5px', marginBottom: '5px' }}>
                    <Link to={`/bands/${this.state.band._id}/show`} style={{textDecoration: 'none'}}>Detail</Link>
                </div>
                <div style={{ padding: '5px', marginBottom: '5px' }}>
                    <Link to={`/bands/${this.state.band._id}/edit`} style={{textDecoration: 'none'}}>Edit</Link>
                </div>
                <div style={{ padding: '5px' }}>
                    <Link onClick={
                        () => this.props.onDelete(this.state.band)
                    } style={{textDecoration: 'none'}}>Delete</Link>
                </div>
            </div>
        )
    }
}