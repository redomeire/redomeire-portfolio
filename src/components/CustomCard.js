import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, ThemeProvider, Typography, useTheme } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import React from "react";
import { ColorModeContext } from "../App";

function CustomCard(props) {
    const { isDark } = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Card sx={{ maxWidth: {xs: "300", md: "100%"}, opacity: props.opacity, borderRadius: "20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", backgroundColor: isDark ? theme.palette.primary.light : '' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: props.thumbnailColor }} aria-label="recipe">
                        {props.user?.substring(0,1)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props?.user}
                subheader="September 14, 2016"
            />
            <CardContent sx={{marginTop: "-20px"}}>
                <Typography variant="h5" color="text.primary" sx={{ fontWeight: "700", marginBottom: "10px" }}>
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{marginBottom: "-20px"}}>
                   {props.body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => props.setLiked(!props.liked)} aria-label="add to favorites" sx={{color: props.liked ? "red" : ""}}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default CustomCard;