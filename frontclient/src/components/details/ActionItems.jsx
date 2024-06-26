import { Box,Button,styled } from "@mui/material";
import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";



const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image=styled('img')({
    width:"95%",
    padding:'15px'
})

const StyledButton=styled(Button)`
margin-top:10px;
width:47.5%;
height: 50px;
border-radius:2px;
`

const ActionItems=({product})=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [quantity,setQuantity]=useState(1);

    const {id}=product;

    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');

    }

    return(
        <LeftContainer>
            <Box style={{padding:'15px 20px',
    border: '1px solid #f0f0f0',width:'90%'}}>
            <Image src={product.detailUrl}/>
            </Box>
            <StyledButton variant="contained" onClick={()=> addItemToCart()} style={{marginRight: 10,background:'#ff9f00'}}><Cart/>Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{background:'#fb541b'}}><Flash/>Buy Now</StyledButton>
        </LeftContainer>

    )
}

export default ActionItems;