import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';

dayjs.extend(relativeTime);

const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

function VideoCard({ item }) {
  const classes = useStyles();

  return (
    <Box>
      <img src={item.thumb} alt={item.title} className={classes.img} />
      <Box display="flex" mt="1">
        <Box>
          <Avatar alt={item.authorName} src={item.authorAvatar}></Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} • ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoCard;
