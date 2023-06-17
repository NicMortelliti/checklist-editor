import { NewBtn } from './NewBtn';
import { ImportBtn } from './ImportBtn';
import { AbsoluteCenter, Text, VStack } from '@chakra-ui/react';

export const ProjectSelect = () => {
  return (
    <AbsoluteCenter>
      <VStack spacing={3}>
        <ImportBtn />
        <Text fontSize='3xl'>OR</Text>
        <NewBtn />
      </VStack>
    </AbsoluteCenter>
  );
};
