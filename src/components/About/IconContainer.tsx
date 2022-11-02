import { styled, useTheme } from "@mui/material/styles"
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon'
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { useMediaQuery } from "@mui/material"


const IconContainer = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
    const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'))

    const Title = styled(Typography)({
        fontSize: 38,
        marginBottom: 32,
        [theme.breakpoints.down("lg")]: {
            fontSize: 34,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 30,
            marginBottom: 15,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 26,
        },
    });


    const IconBackground = styled(Paper)(({ theme }) => ({
        width: "100%",
        padding: "8px 0",
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }

    }))

    const TechnoIcon = styled(Icon)(({ theme }) => ({
        width: "100%",
        height: "100%",

        color: theme.palette.fontColor.main,
    }))

    const IconLabel = styled(Typography)(({
        textAlign: "center",
        fontWeight: 700,
    }))

    return (
        <Box sx={{ width: 1 }}>
            <Title variant="h2">My toolbox</Title>


            <Grid container columns={isMobile ? 2 : 3} columnSpacing={1} rowSpacing={3} sx={{ width: 1, m: 0 }}  >
                <Grid item xs={1} >
                    <IconBackground  >
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="html 5"><SiHtml5 /></TechnoIcon>
                        <IconLabel>HTML5</IconLabel>
                    </IconBackground>
                </Grid>

                <Grid item xs={1} >
                    <IconBackground>
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="css 3"> <SiCss3 /></TechnoIcon>
                        <IconLabel>CSS3</IconLabel>
                    </IconBackground>
                </Grid>

                <Grid item xs={1} >
                    <IconBackground>
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="sass"><SiSass /></TechnoIcon>
                        <IconLabel>SASS</IconLabel>
                    </IconBackground>
                </Grid>

                <Grid item xs={1} >
                    <IconBackground>
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="javascript"><SiJavascript /></TechnoIcon>
                        <IconLabel>Javascript</IconLabel>
                    </IconBackground>
                </Grid>

                <Grid item xs={1} >
                    <IconBackground>
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="typescript"><SiTypescript /></TechnoIcon>
                        <IconLabel>Typescript</IconLabel>
                    </IconBackground>
                </Grid>

                <Grid item xs={1} >
                    <IconBackground>
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="react"><SiReact /></TechnoIcon>
                        <IconLabel>React</IconLabel>
                    </IconBackground>
                </Grid>

                <Grid item xs={1} >
                    <IconBackground>
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="next js"><SiNextdotjs /></TechnoIcon>
                        <IconLabel>NextJS</IconLabel>
                    </IconBackground>
                </Grid>

                <Grid item xs={1} >
                    <IconBackground>
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="mui"><SiMaterialui /></TechnoIcon>
                        <IconLabel>MUI</IconLabel>
                    </IconBackground>
                </Grid>

                <Grid item xs={1} >
                    <IconBackground>
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="node js"><SiNodedotjs /></TechnoIcon>
                        <IconLabel>NodeJS</IconLabel>
                    </IconBackground>
                </Grid>

                <Grid item xs={1} >
                    <IconBackground>
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="github"><SiGithub /></TechnoIcon>
                        <IconLabel>Github</IconLabel>
                    </IconBackground>
                </Grid>

                <Grid item xs={1} >
                    <IconBackground>
                        <TechnoIcon fontSize={isTablet ? "medium" : "large"} aria-label="figma"> <SiFigma /></TechnoIcon>
                        <IconLabel>Figma</IconLabel>
                    </IconBackground>
                </Grid>
            </Grid>
        </Box >

    );
};

export default IconContainer;