import { Button } from "@mui/material";
import { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";

const LikeButton = () => {
  const [liked, setLike] = useState(false);

  return (
    <div>
      {liked ? (
        <Button
          onClick={() => setLike(!liked)}
          startIcon={<NotInterestedOutlinedIcon />}
          variant="contained"
          color="secondary"
        >
          Unlike
        </Button>
      ) : (
        <Button
          onClick={() => setLike(!liked)}
          startIcon={<FavoriteOutlinedIcon />}
          variant="outlined"
          color="secondary"
        >
          Like
        </Button>
      )}
      <Button
        startIcon={<AddOutlinedIcon />}
        variant="outlined"
        color="secondary"
        sx={{ margin: 1 }}
      >
        Watchlist
      </Button>
    </div>
  );
};

export default LikeButton;
