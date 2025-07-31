 import React, { Fragment,useState} from 'react'
// import * as React from 'react';

//  import Tooltip from '@mui/material/Tooltip';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
 import Rating from '@mui/material/Rating';
 import { images } from '../../Controls/AppControl';
import Tooltip from '@mui/material/Tooltip';
import { useEffect } from 'react';
 

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
})); 

 





 const columns = [
  { field: 'id', headerName: 'ID', width: 12 },
  { field: 'email', headerName: 'email',   },
  { field: 'pass word', headerName: 'pass',  },
  {
    field: 'dob',
    headerName: 'DoB',
    type: 'number',
    width: 90,
  } 
];

 

const paginationModel = { page: 0, pageSize: 5 };



// funtion start-------------------------------->
 function MUIpage() {
const [roz,uproz]=useState();

const localdata=()=>{
axios.get("http://localhost:5700/akjson").then((d)=>
{
  console.log(d);
  uproz(d.data);
})
}

useEffect(()=>{
  localdata();
},[])






const [favorites, setFavorites] = React.useState({});

const handleFavoriteClick = (id) => {
  setFavorites((prev) => ({
    ...prev,
    [id]: !prev[id], // toggle favorite status
  }));
};
  const [value, setValue] = React.useState(2);

      const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }; 

      const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
 

  const DrawerList = (
             <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
   return (
    <Fragment>
         <div>
    
    </div>
   <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
 
 <Box sx={{ flexGrow: 0 }}>
      <Grid container spacing={2}>
        <Grid size={1}>
          <Item><Button onClick={toggleDrawer(true)}>{<MenuIcon/>}</Button>
<Drawer open={open} onClose={toggleDrawer(false)}>
  {DrawerList}
</Drawer>
</Item>
        </Grid> <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={3}>
          <Item>  <Box display="flex" alignItems="center" gap={1}> <Avatar alt="Remy Sharp" src=" /ak.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /></Box></Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
   

{/* code for card */}
<Box sx={{ display: 'flex', overflowX: 'auto', gap: 3, padding: 4 }}>
 {images.map((d)=>(                    // images can import from appcontrol
       <Card  sx={{ maxWidth: 345 }}>
      <CardHeader 
        avatar={
                // <IconButton>
            <Tooltip key={d.url} title={d.alt}>
          <Avatar src={d.url} sx={{ bgcolor: red[500] }} aria-label="recipe">
           
          </Avatar>
          </Tooltip>
        //   </IconButton>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={d.url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <IconButton
  aria-label="add to favorites"
  onClick={() => handleFavoriteClick(d.id)}
>
  <FavoriteIcon color={favorites[d.id] ? "error" : "inherit"} />
</IconButton>

        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 1 }}>title:</Typography>
          <Typography sx={{ marginBottom: 3 }}>
            {d.alt}
            {/* Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes. */}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            {/* Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. */}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            {/* Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.) */}
          </Typography>
          <Typography>
            {/* Set aside off of the heat to let rest for 10 minutes, and then serve. */}
          </Typography>
          
        </CardContent>
      </Collapse>
        <Typography component="legend" sx={{pl:2}}>Review</Typography>
      <Rating  sx={{pl:1}}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Card>))}
    </Box  >
    
  <Paper sx={{ height: 400, width: '100%'  }}>
      <DataGrid
        rows={roz}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
       sx={{
  border: 0
  
}}
      />
    </Paper>


















    
    </Fragment>
   )
 }
 
 export default MUIpage
 