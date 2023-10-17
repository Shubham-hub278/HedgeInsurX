import React, { useState } from "react";
import { Flex, Box, Text, HStack, Button, useModal } from "@chakra-ui/react";
import RightPanel from "./RightPanel";            
import { useSignInModal } from "@/context/useModalContext";

const data = Array.from({ length: 3 }, (_, index) => `Strategy ${index + 1}`);

const CenterPanel = ({ selectedStrategy, setSelectedStrategy }: any) => {

  const { isModalOpen, openModal, closeModal }: any = useSignInModal();

  return (
    <Flex w="100%">
      <Box
        flex="1"
        overflowY="auto"
        bgGradient="linear-gradient(to right, #101827, #0f182a)"
        ml="252px"
        maxW="44%"
        minH="100vh"
      >
        <Box mt={20} py={1} w="100%" pr={16} pl={8}>
          <Box
            bg="rgba(21, 34, 57, 0.8)"
            border="solid 0.9px #253350"
            sx={{
              backdropFilter: "blur(15px) saturate(120%)",
            }}
            borderRadius={"12px"}
            px={4}
            py={6}
          >
            {data.map((item: any, index) => (
              <Box
                bg={selectedStrategy === item ? "#253350" : "#182942"}
                key={index}
                cursor="pointer"
                // onClick={() => { }}
                onClick={() => setSelectedStrategy(item)}
                px={4}
                py={6}
                borderRadius={"12px"}
                w="100%"
                color={selectedStrategy === item ? "white" : "whiteAlpha.500"}
                mb={8}
              >
                {item}
              </Box>
            ))}
          </Box>

          <Box py={6}>
            <Box
              border="solid 0.9px #253350"
              bg="rgba(11 3 46, 0.9)"
              sx={{
                backdropFilter: "blur(15px) saturate(120%)",
              }}
              cursor="pointer"
              px={4}
              py={6}
              borderRadius={"12px"}
              w="100%"
              color={"whiteAlpha.700"}
              mb={8}
            >
              <Button
                w="100%"
                bg="#03000f"
                _hover={{
                  bg: "#03000f",
                }}
                // isDisabled={true}
                onClick={() => openModal('Modal content goes here')}
              >
                Create Strategy
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <RightPanel />
    </Flex>
  );
};

export default CenterPanel;
