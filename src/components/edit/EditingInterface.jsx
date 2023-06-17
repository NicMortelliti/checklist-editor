import { TableComp } from './Table/TableComp';
import { Grid, GridItem } from '@chakra-ui/react';

export const EditingInterface = () => (
  <Grid
    minHeight='100vh'
    templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
    gridTemplateRows={'50px 1fr 30px'}
    gridTemplateColumns={'150px 1fr'}
    h='200px'
    gap='1'
    color='blackAlpha.700'
    fontWeight='bold'>
    <GridItem pl='2' bg='orange.300' area={'header'}>
      Header
    </GridItem>
    <GridItem pl='2' bg='pink.300' area={'nav'}>
      Nav
    </GridItem>
    <GridItem pl='2' bg='green.300' area={'main'}>
      <TableComp />
    </GridItem>
    <GridItem pl='2' bg='blue.300' area={'footer'}>
      Footer
    </GridItem>
  </Grid>
);
