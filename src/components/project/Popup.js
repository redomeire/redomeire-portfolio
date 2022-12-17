import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { ColorModeContext } from "../../App";

import React from "react";
import { useContext } from "react";
import Checkbox from '@mui/material/Checkbox';

const Popup = ({
    project,
    id,
    setId
}) => {

    const { isDark } = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <div style={{ position: 'fixed', top: '0', left: '0', zIndex: '3', backgroundColor: 'rgba(50, 50, 93, 0.55)', minHeight: '100vh', width: '100%', display: id.isOpen && id.id === project.id ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
            <div style={{ backgroundColor: isDark ? theme.palette.primary.main : 'white', borderRadius: '20px', width: '100%', height: '85vh', padding: '25px', overflow: 'auto', position: 'relative', color: isDark ? theme.palette.secondary.main : 'black' }}>
                <IconButton onClick={() => setId({ id: '', isOpen: false })} size="medium" sx={{ position: 'absolute', right: '20px', top: '20px' }}>
                    <CloseIcon sx={{ color: isDark ? theme.palette.secondary.main : 'black' }} />
                </IconButton>
                <Typography variant="h4" fontWeight={600} textAlign='center' marginBottom='50px'>Project Showcase</Typography>
                <div
                    style={{
                        backgroundImage: `url(${process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT + project?.imageUrl})`,
                        backgroundSize: 'cover',
                        width: '80%',
                        minHeight: '500px',
                        marginBottom: '20px',
                        borderRadius: '20px',
                        margin: 'auto'
                    }}
                />
                <Box display='flex' width='100%' sx={{ justifyContent: { md: 'space-between', sm: 'flex-start' }, flexDirection: { md: 'row', xs: 'column' } }}justifyContent='space-between'>
                    <Box sx={{ width: { md: '60%', xs: '100%' } }}>
                        <Typography variant="h5" fontWeight={500} marginTop='50px' marginBottom='30px'>{project?.name}</Typography>
                        <Typography variant="body1" fontWeight={400} marginTop='10px'>
                            {project?.description}
                        </Typography>
                    </Box>
                        <Box sx={{ width: { md: '30%', xs: '100%' } }}>
                            <Typography variant="h5" fontWeight={500} marginTop='50px' marginBottom='10px'>Visit URL</Typography>
                            <Typography variant="body2" fontWeight={400} marginTop='10px' marginBottom='30px'>you can visit webpage url <a rel="noreferrer" target='_blank' style={{ color: isDark ? theme.palette.secondary.main : 'blue' }} href={project?.url}>Here</a></Typography>
                            
                            <Typography variant="h5" fontWeight={500} marginTop='50px' marginBottom='30px'>Tech Stacks</Typography>
                            {
                                project.techStack.map((item, idx) => {
                                    return(
                                        <Box key={idx} display="flex" flexDirection="row" alignItems='center' sx={{ marginY: '10px' }}>
                                            <Checkbox
                                            // defaultChecked
                                            color={isDark ? "secondary" : "primary"}
                                            checked
                                            />
                                            <Typography variant="body2" fontWeight={500} marginLeft={'10px'}>{item}</Typography>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                </Box>
            </div>
        </div>
    );
}

export default Popup;