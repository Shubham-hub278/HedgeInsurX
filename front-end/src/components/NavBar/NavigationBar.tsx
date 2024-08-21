import { useTabs } from "@/context/TabsContext";
import { Box, HStack, Heading, Button, TabList, Tab } from "@chakra-ui/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function NavigationBar() {

    const { activeTab }: any = useTabs();
    const isHome = activeTab === 0 ? true : false
    const menuList = [
        "Home", "Dashboard", "Insurance"
    ]
    return (
        <Box>

            {/* overlay */}
            <Box
                h="100px"
                w="100%"
                zIndex={"tooltip"}
                top={0}
                bg="rgba(16, 24 ,39, 0.7)"
                position={"fixed"}
                sx={{
                    backdropFilter: "blur(15px)",
                }}
            />


            <Box
                w="100%"
                position={"fixed"}
                zIndex={"tooltip"}
                bg="transparent"
                py={[0, 0, 8]}
                pb={[1, 1, 4]}
                px={[0, 0, 16]}>
                <HStack
                    border={isHome ? "none" : "solid 0.9px #253350"}
                    bg={isHome ? "rgba(64, 4, 83, 0.3)" : "rgba(21, 34, 57, 0.8)"}
                    w="100%"
                    h="60px"
                    borderRadius={"10px"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    py={[1, 1, 8]}
                    boxShadow={!isHome ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : 0}
                    px={[3, 3, 12]}
                    sx={{
                        backdropFilter: "blur(15px)",
                    }}


                >
                    <Box
                    >


                        <HStack>
                            <Box
                                h="40px"
                                as="img"
                                src="logo.png"
                            />
                            <Heading
                                // opacity={}
                                color="whiteAlpha.600"
                                fontSize={"2xl"} >
                                HedgeInsurX

                            
                            </Heading>
                        </HStack>
                    </Box>

                    <TabList>
                        {menuList.map((menu: string, index: number) => (
                            <Tab
                                key={index}
                                color={activeTab === index ? "#0e76fd" : "white"}
                            >{menu}</Tab>

                        ))}

                    </TabList>

                    <Box>
                        <ConnectButton />
                    </Box>
                </HStack>
            </Box >
        </Box>
    );
}