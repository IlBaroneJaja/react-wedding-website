import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActions} from '@mui/material';
import {styled} from '@mui/system';
import CardActionArea from '@mui/material/CardActionArea';
import {scrollToTop} from "./ScrollUtils";
import {useEffect} from "react";


const StyledCard = styled(Card)({
    width: '100%',
    height: '100%',
    overflow: 'hidden', // Hide the overflow content
    position: 'relative', // Set position to relative
});


const StyledCardActionArea = styled(CardActionArea)({
    position: 'relative', // Set position to absolute
    bottom: 0, // Position it at the bottom
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.8)', // Optional: Add a background for better readability
    transition: 'transform 0.5s', // Adjusted transition property
    transform: 'translateY(0)', // Initial transform to avoid flickering
    '&:hover': {
        transform: 'translateY(-60px)', // Use negative translateY to push the content up
        backgroundColor: 'transparent'
    },
});

const StyledCardContent = styled(CardContent)({

});

const StyledCardMedia = styled(CardMedia)({
    position: 'relative', // Set position to relative
    zIndex: 0, // Set a higher zIndex for the image
});
const handleNavLinkClick = (target) => {
    scrollToTop(); // Scroll to top for NavLink clicks
    smoothScrollTo(target);
};

const smoothScrollTo = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        // Note: substract size of the navbar to see the first line of the section
        const offsetTop = targetElement.offsetTop - 58;

        // Using smooth scrolling animation
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });

        // If you want to update the URL with the hash after scrolling
        window.history.pushState(null, null, target);

        setTimeout(() => {
            const newOffsetTop = targetElement.offsetTop - 58;
            window.scrollTo({
                top: newOffsetTop,
                behavior: 'instant',
            });
        }, 500);
    }
};


const MultiActionAreaCard = ({title, image, content, url, isTargetBlank, customStyles}) => {
    const handleNavLinkClick = (target) => {
        scrollToTop(); // Scroll to top for NavLink clicks
        smoothScrollTo(target);
    };

    useEffect(() => {
        // Check if a hash is present in the URL
        const hash = window.location.hash;
        if (hash) {
            // Scroll to the element with the corresponding hash
            smoothScrollTo(hash);
        }
    }, []); // Run only once when the component mounts


    const target = isTargetBlank ? "_blank" : "_self";
    const screenSize = window.innerWidth;
    const height = screenSize > 768 ? 300 : 240;

    return (
        <StyledCard sx={{...customStyles, maxWidth: 500, maxHeight: 500}}>
            <StyledCardActionArea>
                <StyledCardMedia
                    component="img"
                    height={height}
                    image={image}
                    alt={title}
                />
                <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </StyledCardContent>
            </StyledCardActionArea>
            <CardActions>
                <Button href={url} size="small" color="primary" target={target} onClick={() => handleNavLinkClick("#churchHeading")}>
                    Détails
                </Button>
            </CardActions>
        </StyledCard>
    );
};
export default MultiActionAreaCard