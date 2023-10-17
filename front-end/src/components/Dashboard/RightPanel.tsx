import React, { useState } from 'react';
import { Box, Text, HStack, Button } from '@chakra-ui/react';

const RightPanel = ({ selectedStrategy }: any) => {


    return (
        <>
            <Box
                mt={20}
                py={12}
                position="fixed"
                right={"20"}
                top="0"
                w="500px"
                bg="#0f182a"
                minH="100vh"
                px={4}
                overflowY="auto"

            >
                <HStack
                    w="100%"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >       <Text fontWeight="bold">Balance: $0.00</Text>

                    <Text mt={2}>{selectedStrategy}</Text></HStack>
                <HStack py={3}>
                    <Button
                        bg="#03000f"
                        _hover={{
                            bg: "#03000f"
                        }}
                    >Withdraw</Button>
                    <Button
                        bg="#03000f"
                        _hover={{
                            bg: "#03000f"
                        }}
                    >Claim</Button>
                </HStack>

                <Box
                    border="solid 0.9px #253350"
                    mt={4}
                    bg="#132036"
                    borderRadius={"12px"}
                    px={4}
                    py={6}
                    minH={"400px"}

                />

            </Box>
        </>
    );
};

export default RightPanel;
