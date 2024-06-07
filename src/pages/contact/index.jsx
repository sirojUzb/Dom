import { Link, useOutlet, Outlet } from "react-router-dom";

const contact = () => {
  const hasChild = useOutlet();
  console.log(hasChild);
  if (hasChild) {
    return <Outlet />;
  }
  return (
    <div>
      Welcome to contact page
      <h3>
        Need our Phone number: <Link to="/contact/phone-number">Click</Link>
      </h3>
    </div>
  );
};

export default contact;
