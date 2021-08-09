import { Grid, Card, CardContent } from '@material-ui/core'
import React from 'react'
import ProductItem from './ProductItem';
import { items, names } from './items.js'
import { green, grey } from '@material-ui/core/colors';

export default function Products() {
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
            <Card style={{ backgroundColor: green[200], width: 400 }}>
              <CardContent>
                <ProductItem itemData={items[product]} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
