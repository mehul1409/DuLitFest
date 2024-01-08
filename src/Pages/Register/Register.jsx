import React from 'react';
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
export default function Registerform() {
  return (
    <>
      <PageHeader  bgColor="
#536976
" fgColor="
#bbd2c5"  heading="Register" />
      <RegisterForm />
      <Footer  bgColor="#536976"  />
    </>
  )
}