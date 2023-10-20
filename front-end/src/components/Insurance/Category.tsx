import React from 'react';
import { Box, Center, Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { Select } from '@chakra-ui/react';


interface Sublevel extends Array<string> { }

interface Level {
    level: string;
    sublevels: Sublevel[];
}

interface CategoryComponentProps {
    levels: Level[];
}

const CategoryComponent: React.FC<CategoryComponentProps> = ({ levels }) => {
    const handleSelectChange = (selectedLevel: string) => {
        const selectedLevelElement = document.getElementById(selectedLevel);
        if (selectedLevelElement) {
            selectedLevelElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <Box pt={32}>

            <Center>
                <Select
                    maxW="200px"
                    placeholder="Select a level" onChange={(e) => handleSelectChange(e.target.value)}>
                    {levels.map((level, index) => (
                        <option key={index} value={level.level}>
                            {level.level}
                        </option>
                    ))}
                </Select>
            </Center>

            <Flex direction="column" w="100%" mt={24}>
                {levels.map((level, index) => (
                    <Flex id={level.level} key={index} direction="column" marginBottom="4" w="100%">
                        <Text py={3} fontWeight="bold" marginBottom="2">
                            {level.level}
                        </Text>
                        <Flex w="100%">
                            {level.sublevels.map((sublevel, subIndex) => (
                                <List
                                    h="300px"
                                    w="300px"
                                    key={subIndex}
                                    borderWidth="1px"
                                    borderColor={"#253350"}
                                    borderRadius="md"
                                    padding="4"
                                    marginRight="4"
                                    textAlign="left"
                                    spacing={3}
                                >
                                    {sublevel.map((x: any) => (
                                        <>
                                            <ListItem>
                                                <ListIcon><FaCheckCircle /></ListIcon>
                                                {x}
                                            </ListItem>
                                        </>

                                    ))}


                                </List>
                            ))}

                        </Flex>

                    </Flex>
                ))}
            </Flex>
        </Box>

    );
};

export default CategoryComponent;
