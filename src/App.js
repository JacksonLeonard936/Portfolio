import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import steam_site from "./steam_site.png";

function App() {
  return (
    <div className="App">
      <h1>
        Hello, I'm Jackson. And this is my website!
      </h1>
        <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={steam_site}
        alt="steam site"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tic Tac Toe
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Created online multiplayer application for individuals to play tic-tac-toe with their friends. Can be scaled to a variety of different games (similar to Steam).
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>  
    </div>
  //1. Personal description.
//2. Description of your school.
//3. Description of any projects you've worked on (in your Java class, the ML work, etc).
//4. List of any personal websites you find interesting/inspirational.
//5. List of Hobbies or interesting books you like, etc.
  );
}

export default App;
