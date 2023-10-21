
import { Box, Button, HStack, Heading, VStack } from '@chakra-ui/react'
import SidePanel from '../Dashboard/LeftPanel';
import CategoryComponent from './Category';
import RiskPool from '../../../../contracts/hardhat/artifacts/contracts/RiskPool.sol/RiskPool.json';
import {ethers} from "ethers";
import { useEffect, useState} from 'react';

export default function Insurance() {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const riskPool = new ethers.Contract("0x5f2E44190482aB9a523D538F65F1D7fFC4ce34e1", RiskPool.abi,provider);
    const [allPolicies,setAllPolicies] = useState();
    useEffect(()=>{
        async function getPolicies(){
            const pol = await riskPool.getAllPolicies();
            const Content = pol.map((e) => {
                return {
                    id: parseInt(e[0]),
                    riskType: parseInt(e[1]),
                    asset:e[2],
                    coverPercent:parseInt(e[3]),
                    coverage:parseInt(e[4]),
                    premium:parseInt(e[5])
                }
              });
            //console.log(parseInt(pol[0][0]));
            setAllPolicies(Content);
        }
        getPolicies()
    },[allPolicies])

    return (
        <Box pt={32}>
            <VStack>
                <Box>
                    <CategoryComponent policies={allPolicies} />
                </Box>
            </VStack>
        </Box >
    )
}
