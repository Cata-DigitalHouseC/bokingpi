import { Button, FormControl } from '@mui/material'
import {useState}  from 'react'
import mockCategories from '../mockCategories'

const FormCategory = () => {
    const [category, setCategory] = useState({
        id_category: mockCategories.length,
        url_image: "",
        title: "",
        description:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        mockCategories.concat(category)
    }
  return (
    <FormControl>
        <TextField required id="standard-required" label="Title" defaultValue="title...." variant="standard" onChange={(e)=>setCategory({...category,title:e.target.value})} />
        <TextField required id="standard-required" label="Description" defaultValue="description...." variant="standard"  onChange={(e)=>setCategory({...category,description:e.target.value})} />
        
        <Button type="Submit" variant="outlined" onSubmit={handleSubmit}>Agregar Categoria</Button>
    </FormControl>
  )
}

export default FormCategory;