
import React from 'react';
import { Box, Center, Flex, Grid, List, ListIcon, ListItem, Text} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { Select } from '@chakra-ui/react';
import RiskPool from '../../../../contracts/hardhat/artifacts/contracts/RiskPool.sol/RiskPool.json';
import {ethers} from "ethers";
import { useEffect, useState} from 'react';
import { BigNumberish } from 'ethers';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'

interface Sublevel extends Array<string> { }

interface Policy {
    id: string;
    riskType: string;
    asset:string;
    coverPercent: string;
    coverage:string;
    premium:string;
}

interface CategoryComponentProps {
    policies: Policy[];
}

function getRiskType(string){
    if(string=="0"){
        return "Low Risk";
    }
    else if(string=="1"){
        return("Medium Risk");
    }
    else if(string=="2"){
        return("High Risk");
    }
}

function getMonths(string){
    return string/(24*60*60);
}

function getAmount(string){
    return ethers.formatUnits(string,6);
}

const optionStyle = { backgroundColor: "#09162e" };
const riskArrays = ["0","1","2"];
console.log(process.env.RPC_URL)
const CategoryComponent: React.FC<CategoryComponentProps> = ({ policies }) => {
    const handleSelectChange = (selectedLevel: string) => {
        const selectedLevelElement = document.getElementById(selectedLevel);
        if (selectedLevelElement) {
            selectedLevelElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    console.log(policies);
    if(!policies){
        return <Spinner />;
    }
    return (
        <Box pt={32}>
            <Center>
                <Select
                    maxW="200px"
                    style={optionStyle}
                    placeholder="Select Risk Category" onChange={(e) => handleSelectChange(e.target.value)}>
                    {riskArrays.map((index) => (
                        <option style={optionStyle} key={index} value={index}> 
                             {getRiskType(index)}
                        </option>

                    ))}
                </Select>
            </Center>
             <Flex direction="column" w="100%" mt={24}>
                {policies.map((policy, index) => (
                    <Flex id={policy.riskType} key={index} marginBottom="4" w="100%">
                        <Text py={3} fontWeight="bold" marginBottom="2">
                            {getRiskType(policy.riskType)}
                        </Text>
                        <Flex w="100%" >
                                <List 
                                    h="300px"
                                    w="300px"
                                    key={policy.riskType}
                                    borderWidth="1px"
                                    borderColor={"#253350"}
                                    borderRadius="md"
                                    padding="4"
                                    marginRight="4"
                                    textAlign="left"
                                    spacing={3}
                                >
                                    <>
                                        <ListItem>
                                            <ListIcon><FaCheckCircle /></ListIcon>
                                            {getRiskType(policy.riskType)} type Policy.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon><FaCheckCircle /></ListIcon>
                                            Covers upto {policy.coverPercent}% of your loss on any protocol.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon><FaCheckCircle /></ListIcon>
                                            Valid upto {getMonths(policy.coverage)} days.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon><FaCheckCircle /></ListIcon>
                                            Total premium to be paid is just {getAmount(policy.premium).split(".")[0]} USDC.
                                        </ListItem>
                                    </>
                                    <Box display="flex" alignItems = "center" justifyContent="center"
                                    marginTop="10px">
                                    <Button >Get Quote</Button>
                                    </Box>
                                </List>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
</Box>
     );
 };

export default CategoryComponent;
