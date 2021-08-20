import { Grid, Card, CardContent } from '@material-ui/core'
import React from 'react'
import ProductItem from './ProductItem';
import { names } from '../../../context/items';
import { green, grey } from '@material-ui/core/colors';

export default function Products() {
  console.log('product open')
  return (
    <>
      <Grid
        container
        style={{
          overflowY: 'scroll',
          height: 500,
          backgroundColor: grey[600],
          // scrollbar hide?
        }}
        spacing={2}
      >
        {names.map((product) => (
          <Grid
            key={product}
            item
            container
          >
            <Card style={{ backgroundColor: green[200], width: '100vw' }} >
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
