export interface NotFoundProps {
  history?: any;
}

export interface NotFoundState {}

function NotFound(props: NotFoundProps) {
  function handleBack() {
    props.history.replace("/");
  }

  return (
    <>
      <h3>Page Not Found</h3>
      <button className="btn btn-primary" onClick={handleBack}>
        Home
      </button>
    </>
  );
}

export default NotFound;
