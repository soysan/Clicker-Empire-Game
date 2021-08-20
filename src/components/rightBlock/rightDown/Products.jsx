import { Grid, Card, CardContent } from '@material-ui/core'
import React from 'react'
import ProductItem from './ProductItem';
import { names } from '../../../context/items';
import { theme } from '../../../color';

export default function Products() {
  console.log('product open')
  return (
    <>
      <Grid
        container
        style={{
          overflowY: 'scroll',
          height: 500,
          backgroundColor: theme.palette.primary.main,
          borderRadius: '5px',
        }}
        spacing={2}
      >
        {names.map((product) => (
          <Grid
            key={product}
            item
            container
          >
          <Card
              style={{
                backgroundColor: theme.palette.secondary.main,
                width: '100vw',
              }} >
              <CardContent>
                <ProductItem name={product} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
