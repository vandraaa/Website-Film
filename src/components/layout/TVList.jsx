import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardTVList from "../fragments/CardTVList";
import { imageBaseUrl } from "../../services/api";

const TVList = ({ getTVs, title }) => {
  const [TVs, setTVs] = useState([]);

  useEffect(() => {
    getTVs().then((TVs) => setTVs(TVs));
  }, [getTVs]);

  console.log(TVs)

  return (
    <>
      <h2 className="text-3xl font-semibold text-left my-8">{ title }</h2>
      <div className="flex justify-center max-w-screen mb-8 items-center flex-wrap gap-x-8 gap-y-5 ">
        {TVs ? (
          TVs.length > 0 &&
          TVs.slice(0, 5).map((TV) => (
            <Link
              to={`/tv-detail/${TV.id}/${encodeURIComponent(TV.name)}`}
              key={TV.id}
            >
              <CardTVList key={TV.id}>
                <CardTVList.Header
                  TVImage={`${imageBaseUrl}${TV.poster_path}`}
                  TVTitle={TV.name}
                />
                <CardTVList.Body
                  TVTitle={TV.name}
                  TVRelease={TV.first_air_date}
                />
              </CardTVList>
            </Link>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </>
  );
};

export default TVList;