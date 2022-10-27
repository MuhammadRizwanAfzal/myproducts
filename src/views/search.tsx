import {useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import ClearIcon from '@mui/icons-material/Clear';
import Card from "../components/Card";
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import {createStyles, makeStyles} from "@mui/styles";

const SearchCnt = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 15px 160px;
  min-height: 350px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  span {
    color: #6b4eff;
  }
`;

const useStyles = makeStyles(() => createStyles({
  input: {
    width: 800,
    fontSize: 26,
    padding: 0,
  },
  clearBtn : {
      margin:"20px 0",
      cursor: "pointer"
  },
  topsuggestions: {
    fontSize: "22px !important",
    fontWeight: "600  !important",
  },
  proCnt: {
    width: "100%",
  },
  tipCnt: {
    display: "flex",
    alignItems: "center",
    padding: 60
  },
  tipTxt:{
    fontSize: "14px !important",
    marginLeft: 5
  },

  noCnt: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    margin: 60,
    padding: 10,
    minWidth: 600,
    backgroundColor: "#8080801f"
  },
  noTxt: {
    fontSize: "18px !important",
    marginBottom: "0px !important",
    fontWeight: "700 !important",

  },
  subNoTxt: {
    fontSize: "13px !important",
    marginLeft: 5
  },
  txtCnt: {
    display: "block"
  }
}))


type Values = {
  search : string,
}

type temp={};

type loading =  boolean;

type PRODUCTS =  { brand: string; model: string, sku: string }[] ;
type Filter =  [];
const Search = () => {
  const classes = useStyles();
  const [values,setValues] = useState<Values>({
    search : "",
});
const [loading, setLoading] = useState<loading>(false);
const [products, setProducts] = useState<PRODUCTS>([]);

const [productsFilter, setProductsFilter] = useState<PRODUCTS>([]);

useEffect(()=>{
  
  axios
  .get("https://62d7f6869088313935880018.mockapi.io/api/v1/catalogue?{}")
  .then((data) => {
    setProducts(data.data);
  })
  .finally(() => {
    
  });
},[]);

useEffect(()=>{
  if(values.search != ""){
    const temp = products.filter(item => {
      return item.brand.toLowerCase().includes(values.search.toLowerCase()) 
      || item.model.toLowerCase().includes(values.search.toLowerCase()) || 
      item.sku.toLowerCase().includes(values.search.toLowerCase()) 
    })

    setProductsFilter(temp);


 }
  else {
    setProductsFilter([]);
  }
},[values.search]);

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values,[event.target.name] : event.target.value});

}

const clearHandler = () => {
  setValues({...values,search : ""});
};



  return (
    <SearchCnt>
    <Title>
        Find a <span>Product</span>
    </Title>
    <OutlinedInput
      id="outlined-adornment-weight"
      value={values.search}
      name="search"
      className={classes.input}
      onChange={handleChange}
      endAdornment={values.search != "" ? <ClearIcon onClick={clearHandler} className={classes.clearBtn}  /> : ""}
      startAdornment= {<SearchIcon/>}
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        'aria-label': 'weight',
      }}
    />

    {values.search == "" &&
    <div className={classes.tipCnt}>
    <Chip label="Tip" color="primary" style={{fontSize: 14, marginRight: 10}} />
    <Typography gutterBottom className={classes.tipTxt}>
           You can search by product, brand, model, sku
    </Typography>
    </div>
    } 

{values.search != "" && productsFilter.length == 0 && 
   <div className={classes.noCnt}>
    <Chip label="!" color="primary" style={{fontSize: 14, marginRight: 10}} />
    <div className={classes.txtCnt}>
    <Typography gutterBottom className={classes.noTxt}>
           No matches found for {`"${values.search}"`}
    </Typography>
    
    <Typography gutterBottom className={classes.subNoTxt}>
           Please try searching for something else
    </Typography>
    </div>
    </div>
    } 

    {productsFilter.length != 0 &&
      <div className={classes.proCnt}>
      <Typography gutterBottom className={classes.topsuggestions}>
           {productsFilter.length} suggections
    </Typography>
    {
       productsFilter.map((val, ind) => {
        return <Card value={val} />
      } 
      )
    }</div>
     
    }
    </SearchCnt>
  );
}

export default Search;