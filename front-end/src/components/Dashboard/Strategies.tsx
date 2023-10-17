import React, { useState } from 'react';
import { Flex, Box, Text, HStack, Button } from '@chakra-ui/react';
import RightPanel from './RightPanel';
import CenterPanel from './CenterPanel';

const data = Array.from({ length: 3 }, (_, index) => `Strategy ${index + 1}`);

const StragtegiesGrid = () => {
    const [selectedStrategy, setSelectedItem] = useState<number | null>(null);

    return (
        <Flex w="100%">
            <CenterPanel
                setSelectedStrategy={setSelectedItem}
                selectedStrategy={Boolean}
            />
            <RightPanel
                selectedStrategy={selectedStrategy}
            />
        </Flex>
    );
};

export default StragtegiesGrid;
