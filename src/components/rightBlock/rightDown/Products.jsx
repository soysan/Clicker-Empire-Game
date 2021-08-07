import { Grid, Card, CardContent, } from '@material-ui/core'
import React from 'react'
import ProductItem from './ProductItem';
import { items } from './items.js'
import { green } from '@material-ui/core/colors';

export default function Products() {
  const products = ["ETF Stock", "ETF Bonds", "Lemonade Stand", "Ice Cream Truck", "House", "TownHouse", "Mansion", "Industrial Space", "Hotel Skyscraper", "Bullet-Speed Sky Railway"]

  return (
    <>
      <Grid
        container
        direction="column"
        style={{ overflow: true, height: 400 }}
        spacing={0}
      >
        {products.map((product) => (
          <Grid key={product} item xs={1}>
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
