import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An Error occured!😖";
  let message = "Something went wrong!";
  console.log(error.data);

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page";
  }
  return (
    <MainNavigation>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </MainNavigation>
  );
};

export default ErrorPage;
