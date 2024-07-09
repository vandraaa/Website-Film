import errorImage from "../assets/img/404.jpg";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <img src={errorImage} alt="404" className="w-[400px]" />
      <h1 className="text-4xl font-bold mt-8">Page Not Found</h1>
      <a
        href="/"
        className="mt-3 flex items-center font-medium"
      >
        <svg
          className="h-3 w-3 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        Back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
