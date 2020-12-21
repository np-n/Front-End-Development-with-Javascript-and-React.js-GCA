import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import FormExample from './form';
 

export default class GridExample extends Component {
    render() {
        return (
            <div>
                <Grid container  spacing={2}>
                    {[0, 1, 2,4,5].map((value) => (
                        <Grid key={value} item xs="12" sm="4">
                            <FormExample/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}
