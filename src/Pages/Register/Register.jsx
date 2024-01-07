import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import "./Register.scss";

const Register = () => {
  return (
    <>
      <PageHeader heading="Register" />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default Register;
