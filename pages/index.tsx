import type { NextPage } from "next";
import { Field } from "../components/field/Field";
import { Timer } from "../components/timer/Timer";

const Home: NextPage = () => {
  return (
    <>
      <Timer />
      <Field />
    </>
  );
};

export default Home;
