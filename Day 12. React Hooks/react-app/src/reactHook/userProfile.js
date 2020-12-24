import React from 'react'
import {useState} from 'react'
import { Card, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

export default function UserProfile() {
    const [userProfile,setUserProfile] = useState({name:"",email:"",address:"",sex:""})

    function handleChange(event){
        userProfile[event.target.id] = event.target.value
        // ... -> spread operator
        // spread operator copy the array
        setUserProfile({...userProfile,userProfile})

    }

    return (
        <div style={{marginTop:20}}>
            < Grid container  spacing={2}>
                        <Grid  item xs="12" sm="4">
                        <TextField
                            style={{marginBottom:20}}
                            id="name"
                            label="Enter name"
                            variant ="outlined"
                            value ={userProfile.name}
                            placeholder="Enter name"
                            helperText="Please Enter valid Name"
                            error ={false}
                            disabled ={false}
                            fullWidth={true}
                            onChange={handleChange}
                            />
                        </Grid>

                        <Grid  item xs="12" sm="4">
                        <TextField
                            style={{marginBottom:20}}
                            id="email"
                            label="Enter email"
                            variant ="outlined"
                            value ={userProfile.email}
                            placeholder="Enter email"
                            helperText="Please Enter valid email"
                            error ={false}
                            disabled ={false}
                            fullWidth={true}
                            onChange={handleChange}
                            />
                        </Grid>
            

                        <Grid  item xs="12" sm="4">
                            <TextField
                                style={{marginBottom:20}}
                                id="address"
                                label="Enter address"
                                variant ="outlined"
                                value ={userProfile.address}
                                placeholder="Enter address"
                                helperText="Please Enter valid address"
                                error ={false}
                                disabled ={false}
                                fullWidth={true}
                                onChange={handleChange}
                                />
                        </Grid>

                        <Grid  item xs="12 " sm="4">
                            <TextField
                                style={{marginBottom:20}}
                                id="sex"
                                label="Enter sex"
                                variant ="outlined"
                                value ={userProfile.sex}
                                placeholder="Enter sex"
                                helperText="Please Enter valid sex"
                                error ={false}
                                disabled ={false}
                                fullWidth={true}
                                onChange={handleChange}
                                />
                        </Grid>
                    
                </Grid>
            <hr/>
            <Card>
            < Grid container  spacing={2}>
                <Grid  item xs="12" sm="4">Name</Grid>
                <Grid  item xs="12" sm="4">{userProfile.name}</Grid>   
            </ Grid>

            < Grid container  spacing={2}>
                <Grid  item xs="12" sm="4">Email</Grid>
                <Grid  item xs="12" sm="4">{userProfile.email}</Grid>   
            </ Grid>

            < Grid container  spacing={2}>
                <Grid  item xs="12" sm="4">Address</Grid>
            <Grid  item xs="12" sm="4">{userProfile.address}</Grid>   
            </ Grid>

            < Grid container  spacing={2}>
                <Grid  item xs="12" sm="4">Sex</Grid>
             <Grid  item xs="12" sm="4">{userProfile.sex}</Grid>   
            </ Grid>
            </Card>
        </div>
    )
}
