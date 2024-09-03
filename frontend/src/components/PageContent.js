import { useRouteError } from "react-router-dom";
import classes from "./pageContent.module.css";

function PageContent({ title, children }) {
  const error = useRouteError();

  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
