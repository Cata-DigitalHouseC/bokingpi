import { FormControl } from '@mui/material'
import React from 'react'

const FormCategory = () => {
  return (
    <FormControl>
        <TextField required id="standard-required" label="Title" defaultValue="title...." variant="standard" />
        <TextField required id="standard-required" label="Description" defaultValue="description...." variant="standard" />
    </FormControl>
  )
}

export default FormCategory