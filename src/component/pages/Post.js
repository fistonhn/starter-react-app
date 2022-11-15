import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png';

function Post() {
  return (
    <>
        <img src={logo} style={{ padding: '1%'}}/>
        <div style={{ color: 'white', margin: '5%' }}> 

            <Grid container spacing={2} style={{ borderBottom: '2px solid black' }}>
                <Grid xs={4} style = {{ paddingRight: '7%' }}>
                    <h2 style = {{ color: 'black' }}>BASIC DATA</h2>
                    <div style = {{display: 'block' }}>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Tunnel</h6>
                            <TextField
                                style = {{ width: '70%' }}
                                id="demo-helper-text-aligned"
                                label="Type"
                                size="small"
                            />
                        </div>
                        <div style = {{display: 'flex' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Date</h6>
                            <TextField
                                style = {{ width: '70%' }}
                                id="demo-helper-text-aligned"
                                label="Type"
                                size="small"
                            />
                        </div>
                    </div>
                </Grid>
                <Grid xs={4} style = {{ paddingRight: '7%' }}>
                    <div style = {{display: 'block' }}>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Advance Name</h6>
                            <TextField
                                style = {{ width: '70%' }}
                                id="demo-helper-text-aligned"
                                label="Type"
                                size="small"
                            />
                        </div>
                        <div style = {{display: 'flex' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', whiteSpace: 'nowrap', color: 'black', fontSize: '13px' }}>Advance Location</h6>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', color: 'black', fontSize: '13px' }}>From</h6>
                            <TextField
                                style = {{ width: '40%' }}
                                id="demo-helper-text-aligned"
                                label="Type"
                                size="small"
                            />
                            <h6 style = {{  marginLeft: '10px', marginRight: '10px', marginTop: '13px', color: 'black', fontSize: '13px' }}>To</h6>
                            <TextField
                                style = {{ width: '40%' }}
                                id="demo-helper-text-aligned"
                                label="Type"
                                size="small"
                            />
                        </div>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Depth of cover</h6>
                            <TextField
                                style = {{ width: '70%' }}
                                id="demo-helper-text-aligned"
                                label="Type"
                                size="small"
                            />
                        </div>
                        <div style = {{display: 'flex' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Drive Direction</h6>
                            <TextField
                                style = {{ width: '70%' }}
                                id="demo-helper-text-aligned"
                                label="Type"
                                size="small"
                            />
                        </div>
                    </div>
                </Grid>
                <Grid xs={4}>
                    <h2 style = {{ color: 'black' }}>EXCAVATION</h2>
                        <div style = {{display: 'flex', marginBottom:'3%' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black' }}>Excavated</h6>
                            <TextField
                                style = {{width: '70%' }}
                                id="demo-helper-text-aligned"
                                label="Type"
                                size="small"
                            />
                        </div>
                        <div style = {{display: 'flex' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black' }}>Overbreak</h6>
                            <TextField
                                style = {{ width: '70%' }}
                                id="demo-helper-text-aligned"
                                label="Type"
                                size="small"
                            />
                        </div>
                        <div style = {{display: 'flex' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black' }}>Underbreak</h6>
                            <TextField
                                style = {{ width: '70%' }}
                                id="demo-helper-text-aligned"
                                label="Type"
                                size="small"
                            />
                        </div>
                </Grid>
            </Grid>

            <div style={{ borderBottom: '2px solid black' }}>
                <h2 style = {{ color: 'black' }}>Q SYSTEM</h2>
                <div style = {{display: 'flex', width: '50%', color: 'black' }}>
                    <div>
                        <h6 style = {{ marginBottom: '6px', fontSize: '13px' }}>RQD</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '3%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Jn</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '3%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Jr</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '3%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Ja</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '3%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Jw</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '3%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>SRF</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                </div>

                <Button style={{ backgroundColor: 'black', marginTop: '20px', marginBottom: '3%' }} size="small" variant="contained">CALCULATE Q</Button>
            </div>

            <div style={{ borderBottom: '2px solid black' }}>
                <h2 style = {{ color: 'black' }}>FACEMAPPING SKETCH</h2>
                <Button
                    style = {{  marginBottom: '3%', color: 'black', backgroundColor: 'white', border: '1px dotted black', padding: '6%', width: '100%', fontSize: '12px' }}
                    variant="contained"
                    component="label"
                >
                Upload Face Mapping Sketch
                <input
                    style={{ marginBottom: '20px' }}
                    type="file"
                    hidden
                />
                </Button>
            </div>

            <Grid container spacing={2} style={{ borderBottom: '2px solid black', marginTop: '20px' }}>
                <Grid xs={6} style = {{ paddingRight: '7%' }}>
                    <h2 style = {{ color: 'black' }}>ROCK MASS DESCRIPTION</h2>
                    <div style = {{display: 'block' }}>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '20%', color: 'black', fontSize: '13px' }}>Water</h6>
                            <TextField
                                style = {{ width: '80%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                rows={3}
                            />
                        </div>
                        <div style = {{ display: 'flex', marginBottom: '10%' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '20%', color: 'black', fontSize: '13px' }}>L/min/m</h6>
                            <TextField
                                style = {{ width: '80%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                rows={3}                            
                            />
                        </div>
                    </div>
                </Grid>

                <Grid xs={6}>
                        <div style = {{display: 'flex', marginTop: '10%' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Geological Structures (dykes, veins, contacts, bedding, foliation, etc)</h6>
                            <TextField
                                style = {{width: '70%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                size="small"
                                rows={3} 
                            />
                        </div>
                </Grid>
            </Grid>

            <div style={{ borderBottom: '2px solid black' }}>
                <h2 style = {{ color: 'black' }}>JOINTS</h2>

                <div style = {{display: 'flex', color: 'black' }}>
                    <div>
                        <h6 style = {{ marginBottom: '6px', fontSize: '13px' }}>Set no.</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Type</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Dip</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Dip direction</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Roughness</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Infilling</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Weathering</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Spacing</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Aperture</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Persistence</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <h6 style = {{ marginBottom: '6px', color: 'black', fontSize: '13px' }}>Remarks</h6>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                </div>

                <div style = {{display: 'flex', color: 'black', marginTop: '1%' }}>
                    <div>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                </div>

                <div style = {{display: 'flex', color: 'black', marginTop: '1%' }}>
                    <div>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                </div>

                <div style = {{display: 'flex', color: 'black', marginTop: '1%' }}>
                    <div>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                </div>

                <div style = {{display: 'flex', color: 'black', marginTop: '1%' }}>
                    <div>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                </div>

                <div style = {{display: 'flex', color: 'black', marginTop: '1%', marginBottom: '5%' }}>
                    <div>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>

                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                    <div style={{ marginLeft: '1%' }}>
                        <TextField
                            id="demo-helper-text-aligned"
                            label="Type"
                            size="small"
                        />
                    </div>
                </div>

            </div>

            <Grid container spacing={2} style={{ borderBottom: '2px solid black', marginTop: '20px' }}>
                <Grid xs={6} style = {{ paddingRight: '7%' }}>
                    <h2 style = {{ color: 'black' }}>LITHOLOGY DESCRIPTION</h2>
                    <div style = {{display: 'block' }}>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '20%', color: 'black', fontSize: '13px' }}>Strength</h6>
                            <TextField
                                style = {{ width: '80%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                rows={3}
                            />
                        </div>
                        <div style = {{ display: 'flex', marginBottom: '10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '20%', color: 'black', fontSize: '13px' }}>Brightness</h6>
                            <TextField
                                style = {{ width: '80%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                rows={3}                            
                            />
                        </div>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '20%', color: 'black', fontSize: '13px' }}>Tincture</h6>
                            <TextField
                                style = {{ width: '80%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                rows={3}
                            />
                        </div>
                        <div style = {{ display: 'flex', marginBottom: '10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '20%', color: 'black', fontSize: '13px' }}>Colour</h6>
                            <TextField
                                style = {{ width: '80%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                rows={3}                            
                            />
                        </div>                        
                        <div style = {{display: 'flex', marginBottom: '10%' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '20%', color: 'black', fontSize: '13px' }}>Texture</h6>
                            <TextField
                                style = {{ width: '80%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                rows={3}
                            />
                        </div>
                    </div>
                </Grid>

                <Grid xs={6} style={{ marginTop: '5%'}}>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Weathering</h6>
                            <TextField
                                style = {{width: '70%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                size="small"
                                rows={3} 
                            />
                        </div>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Grain Size</h6>
                            <TextField
                                style = {{width: '70%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                size="small"
                                rows={3} 
                            />
                        </div>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Igneous Rock</h6>
                            <TextField
                                style = {{width: '70%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                size="small"
                                rows={3} 
                            />
                        </div>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Other Rock Type</h6>
                            <TextField
                                style = {{width: '70%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                size="small"
                                rows={3} 
                            />
                        </div>
                        <div style = {{display: 'flex', marginBottom:'10px' }}>
                            <h6 style = {{ marginRight: '10px', marginTop: '13px', width: '30%', color: 'black', fontSize: '13px' }}>Additional Description</h6>
                            <TextField
                                style = {{width: '70%' }}
                                id="standard-multiline-static"
                                multiline
                                label="Type"
                                size="small"
                                rows={3} 
                            />
                        </div>
                </Grid>
            </Grid>

            <div style={{ borderBottom: '2px solid black', marginTop: '5%' }}>
                <h2 style = {{ color: 'black' }}>NOTES</h2>
                <div style = {{display: 'flex', marginBottom:'5%' }}>
                    <TextField
                        style = {{ width: '50%' }}
                        id="standard-multiline-static"
                        multiline
                        label="Type notes"
                        rows={5}
                    />
                </div>
            </div>

            <div style={{ borderBottom: '2px solid black' }}>
                <h2 style = {{ color: 'black' }}>PHOTOS</h2>
                <Button
                    style = {{  marginBottom: '3%', color: 'black', backgroundColor: 'white', border: '1px dotted black', padding: '6%', width: '100%', fontSize: '12px' }}
                    variant="contained"
                    component="label"
                >
                Upload photos
                <input
                    style={{ marginBottom: '20px' }}
                    type="file"
                    hidden
                />
                </Button>
            </div>

            <Button style={{ backgroundColor: 'black', marginTop: '20px', width: '100px', fontSize: '13px' }} size="small" variant="contained">SAVE</Button>
        </div>
    </>

  );
}
export default Post;
