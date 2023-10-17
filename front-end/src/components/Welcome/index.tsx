
import { Box, Button, Center, Heading, VStack, Text } from '@chakra-ui/react'
import HeroTitle from './HeroTitle'
import Features from './FeaturesGrid'
import Tokens from './Tokens';


const featuresData = [
    {
        title: 'Strategies',
        subtitle: '',
        image: '/path/to/feature1-image.jpg',
    },
    {
        title: 'Insurance',
        subtitle: '',
        image: '/path/to/feature2-image.jpg',
    },
    // Add more features as needed
];

const logos = [
    "chainlink.svg", "usdc.svg", "bnb.svg", "bitcoin.svg", "eth.svg", "filecoin.svg", "matic.svg"
];



export default function Welcome() {
    return (
        <>
            <Box color="white" h="100%" minH="100vh" py={48}>
                <HeroTitle title={"Safe Yield Platform"} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti quidem optio sed voluptatem blanditiis saepe tempora, veniam quo, voluptas natus ut. Itaque autem sint fuga facere dolorum asperiores laborum."} />
                <Tokens logos={logos} />
                <Features features={featuresData} />
            </Box >
        </>
    )
}
