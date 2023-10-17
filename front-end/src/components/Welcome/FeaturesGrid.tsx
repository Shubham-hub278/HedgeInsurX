import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const FeaturesComponent = ({ features }: any) => {
    return (
        <Box mt={[8, 8, 16]} w="100%" px={32} py={3}>
            {features.map((feature: any, index: number) => (
                <Flex
                    // w="100%"
                    key={index}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                    width="100%"
                    mb={8}
                >
                    <Box width={{ base: '100%', md: '50%' }} pr={{ md: index % 2 === 0 ? 4 : 0 }}>
                        <Heading color="lightpink" fontWeight="bold" mb={1}>
                            {feature.title}
                        </Heading>
                        <Text mb={4}>{feature.subtitle.length > 1 ? feature.subtitle :
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, nihil. Sed ut omnis consequatur ab molestiae fugit esse ratione voluptatem ex mollitia. Impedit delectus laboriosam repudiandae cupiditate quos! Accusantium, veniam?"
                        }</Text>
                    </Box>
                    <Box
                        maxW="300px"
                        h="300px"
                        borderRadius={"15px"}
                        width={{ base: '100%', md: '50%' }} bg="whiteAlpha.500">
                        <Image src={feature.image} alt={feature.title} />
                    </Box>
                </Flex>
            ))}
        </Box>
    );
};

export default FeaturesComponent;
