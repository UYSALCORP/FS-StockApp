import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";
import useStockCall from "../../hook/useStockCall";
import { useEffect } from "react";
import { modalStyle } from "../../styles/globalStyles";

export default function BrandModal({ open, handleClose ,initialState }) {
  const { createStockData ,updateStockData } = useStockCall();
  const [info, setInfo] = useState({
    name: "",
    adress: "",
    phone: "",
    image: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id){
      updateStockData("brands",info)
    }else{

      createStockData("brands", info);
    }
    handleClose()
  };

  useEffect(()=>{setInfo(initialState)},[initialState])

  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit}

            sx={{display:"flex", flexDirection:"column", gap:2}}
          >
            <TextField
              label="Brand Name"
              name="name"
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={info.name}
              required
            />
           
            <TextField
              label="Brand Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained">SUBMIT MODAL</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
