import { Button, Grid, Typography } from "@mui/material";
import Icone from '../images/gift.png';

export default function Home() {
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={2} sx={{ width: '60vw' }} >
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', marginTop: '16vh' }}>
          <Typography className="titulo-home">
            Esse é o texto do título 
          </Typography>
          <Typography sx={{ color: '#fff', fontWeight: '600', textAlign: 'left' }}>
            Esse texto aqui serve para ser uma descrição do conteúdo que será apresentado
          </Typography>
          <Button variant="contained">
            Clique aqui para fazer sua homenagem
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <img src={Icone.src} alt="Imagem da Home" style={{ width: '90%' }} />
        </Grid>
      </Grid>
    </Grid>
  );
}
