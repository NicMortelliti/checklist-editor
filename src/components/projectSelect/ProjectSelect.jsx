import { NewBtn } from './NewBtn';
import { ImportBtn } from './ImportBtn';
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

export const ProjectSelect = () => {
  return (
    <Flex minHeight='100vh' alignItems='center' justifyContent='center'>
      <VStack spacing={3}>
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
