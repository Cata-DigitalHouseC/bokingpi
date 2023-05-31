import { Button, FormControl, Modal } from '@material-ui/core'
import React from 'react'
import mockStates from '../mockStates'
import mockCities from '../mockCities'
import mockCategories  from '../mockCategories'
import mockProducts from '../mockProduct'
import mockAddress from '../mockAddress'


const FormProduct = () => {
  const [stateSelected, setStateSelected]=useSate(1);
  const [stateIdSelected, setStateIdSelected]=useSate(1);
  const [product, setProduct] = useState({
    id_product: mockProducts.length,
    url_image: "",
    name:"",
    description:"",
    price:0,
    availability:0,
    category_id:"",
    notAvailableStart: "",
    notAvailableEnd: "",
    address_id:""
    })

    const [address, setAddress] = useState({
        address_id:mockAddress.length,
        street:"",
        number:"",
        city_id:""
        })

        const handleSubmitAddress = (e) =>{
            e.preventDefault();
            address.city=cityIdSelected;
            mockAddress.concat(address)
        }

    const handleSubmit = (e) =>{
        e.preventDefault();
        product.address_id=mockAddress.length;
        product.category_id = categoryIdSelected;
        mockProducts.concat(product)
    }

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

  const [categorySelected, setCategorySelected]=useSate(1);
  const [categoryIdSelected, setCategoryIdSelected]=useSate(1);
  const changeRadioCategory= e=>{
    setCategorySelected(e.taget.value);
  }
  mockCategories
  .filter((cat)=>cat.title==categorySelected)
  .map((cat)=>setCategoryIdSelected(cat.id_category));


  return (
    <FormControl>
        <TextField required id="standard-required" label="name" defaultValue="name..." variant="standard" onChange={(e)=>setProduct({...product,name:e.target.valkue})}/>
        <TextField required id="standard-required" label="description" defaultValue="description...." variant="standard" onChange={(e)=>setProduct({...product,description:e.target.valkue})}/>

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
            <TextField required id="standard-required" label="street" defaultValue="Street...." variant="standard" onChange={(e)=>setAddress({...address,street:e.target.value})}/>
            <TextField required id="standard-required" label="number" defaultValue="Number...." variant="standard" onChange={(e)=>setAddress({...address,number:e.target.value})}/>
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
            <Button type="Submit" variant="outlined" onSubmit={handleSubmitAddress}>Confirm Address</Button>
        </Box>
        </Modal>
        
        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="selected"
            name="radio-buttons-group"
        >
            <FormControlLabel value="selected" disabled  control={<Radio />} label="None" />
            {
            mockCategories.map((cat)=>{
                return <FormControlLabel value={cat.title} control={<Radio />} label={cat.title} onChange={changeCategory}/>
            })
            }
            
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

        <Button type="Submit" variant="outlined" onSubmit={handleSubmit}>Agregar Producto</Button>
        </FormControl>
  )
}

export default FormProduct