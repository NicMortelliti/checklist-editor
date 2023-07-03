import { NewBtn } from './NewBtn';
import { ImportBtn } from './ImportBtn';
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

import { IconButton } from '@chakra-ui/react';
import { RxCross1 } from 'react-icons/rx';

export const ProjectSelect = () => {
  return (
    <Flex minHeight='100vh' alignItems='center' justifyContent='center'>
      <VStack spacing={3}>
        <IconButton
          icon={<RxCross1 />}
          size='xs'
          variant='blue'
          onClick={(e) => console.log(e)}
        />
        <HStack mb='8px'>
          <Text fontSize='4xl' fontFamily={theme.fonts.heading}>
            Welcome to
          </Text>
          <Text fontSize='4xl' variant='accent'>
            CheckMan
          </Text>
        </HStack>
        <NewBtn />
        <Text fontSize='1xl'>OR</Text>
        <ImportBtn />
      </VStack>
    </Flex>
  );
};
