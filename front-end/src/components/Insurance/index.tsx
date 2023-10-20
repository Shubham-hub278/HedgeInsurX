
import { Box, Button, HStack, Heading, VStack } from '@chakra-ui/react'
import CategoryComponent from './Category';

const levels = [
    {
        level: 'low Risk',
        sublevels: [
            ['50% discount', 'Free advice', 'Startbus'],
            ['Another discount', 'Another advice', 'Another bus'],
            ['Yet another discount', 'Yet another advice', 'Yet another bus'],
        ],
    },
    {
        level: 'Medium Risk',
        sublevels: [
            ['50% discount', 'Free advice', 'Startbus'],
            ['Another discount', 'Another advice', 'Another bus'],
            ['Yet another discount', 'Yet another advice', 'Yet another bus'],
        ],
    },
    {
        level: 'High Risk',
        sublevels: [
            ['50% discount', 'Free advice', 'Startbus'],
            ['Another discount', 'Another advice', 'Another bus'],
            ['Yet another discount', 'Yet another advice', 'Yet another bus'],
        ],
    },
];

export default function Insurance() {
    return (
        <Box pt={32}>
            <VStack>
                <Box>
                    <CategoryComponent levels={levels} />
                </Box>
            </VStack>
        </Box >
    )
}
