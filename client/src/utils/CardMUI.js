import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActions} from '@mui/material';
import {styled} from '@mui/system';
import CardActionArea from '@mui/material/CardActionArea';


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


const MultiActionAreaCard = ({title, image, content, url, isTargetBlank, customStyles}) => {
    const target = isTargetBlank ? "_blank" : "_self";

    return (
        <StyledCard sx={{...customStyles, maxWidth: 500, maxHeight: 500}}>
            <StyledCardActionArea>
                <StyledCardMedia
                    component="img"
                    height="300"
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
                <Button href={url} size="small" color="primary" target={target}>
                    Détails
                </Button>
            </CardActions>
        </StyledCard>
    );
};
export default MultiActionAreaCard