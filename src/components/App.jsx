import { useMemo } from 'react';
import { ProjectSelect } from './projectSelect/ProjectSelect';
import { EditingInterface } from './edit/EditingInterface';
import { useSelector } from 'react-redux';
import { ModalConductor } from './edit/modals';
import { Grid, GridItem, Flex } from '@chakra-ui/react';

export const App = () => {
  const { onBoarding } = useSelector((state) => state.ui);

  const RenderInterface = useMemo(() => {
    if (onBoarding) return <ProjectSelect />;
    return <EditingInterface />;
  }, [onBoarding]);

  

  return (
    <>
      <Grid
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
          <Flex
            minHeight='100vh'
            alignItems={onBoarding ? 'center' : 'top'}
            justifyContent='center'>
            {RenderInterface}
          </Flex>
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
      ;
      <ModalConductor />
    </>
  );
};
