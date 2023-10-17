
import { Box, Heading, VStack, Text } from '@chakra-ui/react'


export default function HeroTitle({ title, subtitle }: any) {
    return (
        <>
            <VStack h="100%"
                justifyContent={"center"}
                alignItems={"center"}>
                <Box>
                    <Heading> {title}</Heading>
                </Box>
                <Box
                    px={3}
                    maxW={"400px"}
                    textAlign={"center"}
                >
                    <Text
                        color={"whiteAlpha.600"}
                    > {subtitle} </Text>

                </Box>
            </VStack>
        </>
    )
}
