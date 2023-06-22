import { TableComp } from './Table/TableComp';
import { Grid, GridItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export const EditingInterface = () => {
  const {
    uiColors: { primary, secondary, accent, white },
  } = useSelector((state) => state.ui);

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
      color={white}
      fontWeight='bold'>
      <GridItem bg={secondary} color={accent} area={'header'}>
        Header
      </GridItem>
      {/* <GridItem pl='2' bg='white' area={'nav'}>
      Nav
    </GridItem> */}
      <GridItem pl='2' bg={primary} area={'main'}>
        <TableComp />
      </GridItem>
      <GridItem bg={secondary} color={accent} area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );
};
