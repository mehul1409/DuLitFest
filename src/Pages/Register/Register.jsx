import React from 'react';
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
export default function Registerform() {
  return (
    <>
      <PageHeader heading="Register" />
      <RegisterForm />
      <Footer />
    </>
  )
}