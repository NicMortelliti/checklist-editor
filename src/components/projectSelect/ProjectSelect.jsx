import { NewBtn } from './NewBtn';
import { ImportBtn } from './ImportBtn';
import { Text, VStack } from '@chakra-ui/react';

export const ProjectSelect = () => {
  return (
    <VStack spacing={3}>
      <ImportBtn />
      <Text fontSize='3xl'>OR</Text>
      <NewBtn />
    </VStack>
  );
};
