import { NewBtn } from './NewBtn';
import { ImportBtn } from './ImportBtn';
import { Flex, Text, VStack } from '@chakra-ui/react';

export const ProjectSelect = () => {
  return (
    <Flex minHeight='100vh' alignItems='center' justifyContent='center'>
      <VStack spacing={3}>
        <ImportBtn />
        <Text fontSize='3xl'>OR</Text>
        <NewBtn />
      </VStack>
    </Flex>
  );
};
