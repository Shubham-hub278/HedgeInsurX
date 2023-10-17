
import { Box, Center, VStack, Text, HStack, Button } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { FaChartBar } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';
import SidePanel from '../components/Dashboard/LeftPanel';
import StragtegiesGrid from '../components/Dashboard/Strategies';

export default function Dashboardlayout({ children }: any) {
    return (
        <Box color="white" h="100%" minH="100vh" pt={[4, 4, 0]}
            px={[0, 0, 12]}
            w="100%"
            bg="#101827"
        >
            <HStack w="100%"
                justifyContent={"left"}
                pt={[1, 1, 8]}
                h="100%"
            >
                {children}

            </HStack>
        </Box>
    )
}
