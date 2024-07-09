const CardTVList = (props) => {
  const { children } = props;
  return <div className="w-[35vh] h-full">{children}</div>;
};

const CardImage = (props) => {
  const { TVImage, TVTitle } = props;
  return (
    <img
      src={TVImage}
      alt={TVTitle}
      className="w-full rounded-2xl object-cover"
    />
  );
};


const CardText = (props) => {
    const { TVTitle, TVRelease } = props;
    const formatDate = (dateString) => {
        const options = { month: "short", day: "numeric", year: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
      };
    return (
        <div className="flex flex-col justify-between p-2 h-[120px]">
        <div className="">
          <h3 className="text-base font-bold">{TVTitle}</h3>
          <p className="text-sm font-medium">
            {formatDate(TVRelease)}
          </p>
        </div>
      </div>
    )
}

CardTVList.Header = CardImage
CardTVList.Body = CardText

export default CardTVList