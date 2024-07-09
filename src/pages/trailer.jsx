import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideo } from "../services/getMovie";

const TrailerPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    getVideo(id).then((video) => setMovie(video));
  }, [id]);
  console.log(video)
  return <div>test</div>;
};

export default TrailerPage;
