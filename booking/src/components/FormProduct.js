import { FormControl, Modal } from '@material-ui/core'
import React from 'react'
import mockStates from '../mockStates'
import mockCities from '../mockCities'


const FormProduct = () => {
  const [stateSelected, setStateSelected]=useSate(1);
  const [stateIdSelected, setStateIdSelected]=useSate(1);
  const changeRadioState= e=>{
    setStateSelected(e.taget.value);
  }
  mockStates
    .filter((state)=>state.name==stateSelected)
    .map((state)=>setStateIdSelected(state.id_state));

  const [citySelected, setCitySelected]=useSate(1);
  const [cityIdSelected, setCityIdSelected]=useSate(1);
  const changeRadioCity= e=>{
    setCitySelected(e.taget.value);
  }
  mockCities
  .filter((city)=>city.name==citySelected)
  .map((city)=>setCityIdSelected(city.id_city));

  return (
    <FormControl>
        <TextField required id="standard-required" label="Name" defaultValue="name..." variant="standard" />
        <TextField required id="standard-required" label="Description" defaultValue="description...." variant="standard" />

        <Button onClick={handleOpen}>Fill in Address</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
        <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Address Form</h2>
            <p id="parent-modal-description">
            Please, fill in the following information
            </p>
            <FormControl>
            <TextField required id="standard-required" label="Street" defaultValue="Street...." variant="standard" />
            <TextField required id="standard-required" label="Number" defaultValue="Number...." variant="standard" />
            </FormControl>
            <ChildModal>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Select a state</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="disabled"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="Select"/>
                    {
                    mockStates.map((state)=>{
                        return <FormControlLabel value={state.name} checked = {stateSelected==state.name?true:false} control={<Radio />} label={state.name} onChange={changeRadioState}/> 
                    })
                    }
                    
                </RadioGroup>
                </FormControl>
            </ChildModal>

            <ChildModal>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Select a city</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="disabled"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="Select"/>
                    {
                    mockCities
                        .filter((city)=>city.state_id==stateIdSelected)
                        .map((city)=>{
                        return <FormControlLabel value={city.name} checked = {citySelected==city.name?true:false} control={<Radio />} label={city.name} onChange={changeRadioCity}/> 
                    })
                    }
                </RadioGroup>
                </FormControl>
            </ChildModal>
        </Box>
        </Modal>
        
        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
        >
            <FormControlLabel value="category1" control={<Radio />} label="cat1" />
            <FormControlLabel value="category2" control={<Radio />} label="cat2" />
            <FormControlLabel value="category3" control={<Radio />} label="cat3" />
        </RadioGroup>

        <input
            accept="image/*"
            className={classes.input}
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
        />
        <label htmlFor="raised-button-file">
        <Button variant="raised" component="span" className={classes.button}>
                Upload
            </Button>
            </label> 
        </FormControl>
  )
}

export default FormProduct