import { Grid } from '@material-ui/core'
import React, { createContext } from 'react'
import Status from './rightUp/Status'
import Products from './rightDown/Products'
import { ProductsContext } from '../../context/items';

export default function RightBlock() {
  console.log('rightBlock open')
  const ItemsContext = createContext();

  return (
    <>
      <ItemsContext.Provider value={ProductsContext}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Status />
          <Products />
        </Grid>
      </ItemsContext.Provider>
    </>
  )
}
