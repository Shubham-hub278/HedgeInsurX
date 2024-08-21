import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image, ChakraProvider, extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
    styles: {
        global: {
            '.slick-slide': {
                outline: 'none',
            },
        },
    },
});

const Tokens = ({ logos }: any) => {



    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };


    return (
        <ChakraProvider theme={theme}>
            <Box w="100%" 
            // position={"fixed"}
                // zIndex={"0"}
                bottom={0}
                overflow="hidden" py={0}>
                <Slider {...settings}>
                    {logos.map((logo: any, index: number) => (
                        <Box key={index} px={4}>
                            <Image
                                h="80px"
                                w="auto"
                                src={"/icons/" + logo} alt={`Logo ${index}`} />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </ChakraProvider>
    );
};

export default Tokens;
