import { useState } from "react";

const LikeButton = () => {
  const [liked, setLike] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(liked + 1)}>Like</button>
      {liked ? <p>{liked}</p> : <></>}
      <button>Watchlist</button>
    </div>
  );
};

export default LikeButton;
