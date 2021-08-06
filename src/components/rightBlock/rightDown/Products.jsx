import { Grid, Popper } from '@material-ui/core'
import React from 'react'
import ProductItem from './ProductDetail';

export default function Products() {
  const products = ["ETF Stock","ETF Bonds", "Lemonade Stand", "Ice Cream Truck", "House", "TownHouse", "Mansion", "Industrial Space", "Hotel Skyscraper", "Bullet-Speed Sky Railway"]
  return (
    <>
      <Grid
        container
      >
        <Popper
          placement="top-start"
          disablePortal={false}
        >
          {products.map((product) => (
            <ProductItem key={product} name={product} />
          ))}
        </Popper>
      </Grid>
    </>
  )
}
