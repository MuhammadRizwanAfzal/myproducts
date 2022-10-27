import { FC, useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => createStyles({
  mainCnt: {
    padding: 20,
    width: "100%",
  },
  productCnt: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },

    title: {
        fontSize: "14px !important",
        fontWeight: "900  !important"
    },
    subTxt: {
        fontSize: "16px !important",

    },
}))

interface Props {
  value: Object;
}

const ProductCard: FC<Props> = (props: any) => {
  const {value} = props;

 const classes = useStyles();

  return (
    <div className={classes.mainCnt}>
    
    <Card className={classes.productCnt} variant="outlined">
    <Grid container>
        <Grid xs={3}>
        <Typography gutterBottom className={classes.title}>
            Product
          </Typography>
          <Typography className={classes.subTxt}>
            {value?.brand + " " + value.model }
          </Typography>
        </Grid>
        <Grid xs={3}>
        <Typography gutterBottom className={classes.title}>
            Specs
          </Typography>
          <Typography className={classes.subTxt}>
            {value.capacity+"GB" + "/" + value.color}
          </Typography>
        </Grid>
        <Grid xs={3}>
        <Typography gutterBottom className={classes.title}>
            SKU
          </Typography>
          <Typography className={classes.subTxt}>
            {value.sku}
          </Typography>
        </Grid>
        <Grid xs={3}>
        <Typography gutterBottom className={classes.title}>
            Price
          </Typography>
          <Typography className={classes.subTxt}>
            {value.price + value.currency}
          </Typography>
        </Grid>
    </Grid>
    </Card>
    </div>
  );
}

const defaultProps = {
  value: {price:""},
};

ProductCard.defaultProps = defaultProps;


export default ProductCard;