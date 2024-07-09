import { children } from "react";

const CardMovieList = (props) => {
  const { children } = props;
  return (
    <div className="w-[35vh] h-full">
      {children}
    </div>
  );
};

const CardImage = (props) => {
  const { MovieImage, MovieTitle } = props;
  return (
    <img
      src={ MovieImage }
      alt={ MovieTitle }
      className="w-full rounded-2xl object-cover"
    />
  );
};

const CardText = (props) => {
    const { MovieTitle, MovieRelease } = props;
    const formatDate = (dateString) => {
        const options = { month: "short", day: "numeric", year: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
      };
    return (
        <div className="flex flex-col justify-between p-2 h-[120px]">
        <div className="">
          <h3 className="text-base font-bold">{ MovieTitle }</h3>
          <p className="text-sm font-medium">
            {formatDate(MovieRelease)}
          </p>
        </div>
      </div>
    )
}

CardMovieList.Header = CardImage
CardMovieList.Body = CardText

export default CardMovieList;
