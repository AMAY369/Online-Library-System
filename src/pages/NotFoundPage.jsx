import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const err = useRouteError();
  const message = err.error?.message;
  const statusCode = err.status;
  const statusText = err.statusText;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-9xl font-bold text-red-500">{statusCode}</h1>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          {statusText}
        </h2>
        <p className="mt-4 text-gray-600">{message}</p>
        <a
          href="/home"
          className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;