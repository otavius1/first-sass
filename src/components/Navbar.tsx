import { Button, Grid, Typography } from "@mui/material";
import Icone from '../images/icone.png';

export default function Navbar() {
    return (
        <Grid container spacing={2} display="flex" alignItems="center" justifyContent="space-around" height="12vh">
            <Grid item xs={6} display="flex" alignItems="center" justifyContent="center" fontWeight="bold">
                <img src={Icone.src} alt="Icone" style={{ width: '3rem' }} />
                <Typography variant="h1" component="span" sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', textShadow: '1px 1px 2px #000', fontFamily: '"Roboto", sans-serif' }}>
                    celebra.me
                </Typography>
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center" justifyContent="center">
                <Button variant="contained" color="success" size="small" sx={{ mr: 1, borderRadius: 5 }}>
                    PT-BR
                </Button>
                <Button variant="outlined" color="error" size="small" sx={{ borderRadius: 5 }}>
                    US-EN
                </Button>
            </Grid>
        </Grid>
    )
}
