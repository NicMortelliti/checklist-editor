import { TableComp } from './Table/TableComp';
import { Grid, GridItem } from '@chakra-ui/react';

export const EditingInterface = () => {
  return (
    <Grid
      minHeight='100vh'
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      overflowX='hidden'
      // gridTemplateColumns={'150px 1fr'}
      h='200px'
      rowGap='1'
      fontWeight='bold'>
      <GridItem area={'header'}>Header</GridItem>
      {/* <GridItem pl='2' bg='white' area={'nav'}>
      Nav
    </GridItem> */}
      <GridItem pl='2' area={'main'}>
        <TableComp />
      </GridItem>
      <GridItem area={'footer'}>Footer</GridItem>
    </Grid>
  );
};
