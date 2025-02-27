import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const BlogCard = ({ blog }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/blogs/${blog._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card sx={{ 
      bgcolor: 'background.paper',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      {localStorage.getItem('token') && (
        <IconButton 
          sx={{ 
            position: 'absolute', 
            right: 8, 
            top: 8, 
            color: 'error.main' 
          }}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      )}
      
      <CardMedia
        component="img"
        height="200"
        image={blog.image.url}
        alt={blog.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" color="text.primary">
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {blog.content.substring(0, 150)}...
        </Typography>
        <Button 
          component={Link} 
          to={`/edit/${blog._id}`} 
          variant="contained" 
          color="secondary"
          sx={{ mt: 2 }}
        >
          {localStorage.getItem('token') ? 'Edit Post' : 'Read More'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;