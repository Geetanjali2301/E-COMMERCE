import { Typography,Box,styled,Button } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from "./GroupedButton";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";



const Component=styled(Box)`
border-top:1px solid #f0f0f0;
display:flex;
background:#fff;
`

const LefComponent=styled(Box)`
margin:20px;
display:flex;
flex-direction:column;

`

const SmallText=styled(Typography)`
color:#878787;
font-sizr:14px;
margin-top:10px;
`

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const CartItem=({item})=>{

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch=useDispatch();

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id));

    }
    return(
        <Component>
            <LefComponent>
                <img src={item.url} alt="product" style={{height:110}}/>
                <GroupedButton/>
            </LefComponent>
            <Box style={{margin:'20px'}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                <Box component="span"><img src={fassured} alt="flipkart" style={{width:50,marginLeft:10}}/></Box>
                </SmallText>
                <Typography style={{margin:'20px 0'}}>
                    <span style={{ fontWeight: 600,fontSize:'18px' }}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                    <span style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>
            </Typography>
            <Remove onClick={()=>removeItemFromCart(item.id)}>REMOVE</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;