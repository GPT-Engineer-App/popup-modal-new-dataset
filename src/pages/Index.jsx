import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Grid, Box } from "@chakra-ui/react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent minWidth="560px">
          <ModalHeader bg="blue.100">Important Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateRows="repeat(4, 1fr)" gap={4}>
              {}
              <Box border="1px" borderColor="gray.200" p={3} borderRadius="md">
                Section 1 content goes here...
              </Box>
              {}
              <Box border="1px" borderColor="gray.200" p={3} borderRadius="md">
                Section 2 content goes here...
              </Box>
              {}
              <Box border="1px" borderColor="gray.200" p={3} borderRadius="md">
                Section 3 content goes here...
              </Box>
              {}
              <Box border="1px" borderColor="gray.200" p={3} borderRadius="md">
                Section 4 content goes here...
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Index;
