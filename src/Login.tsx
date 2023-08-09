import { Icon } from "@iconify/react/dist/iconify.js";
import Textfield from "./components/atom/textfield";
import ShowPassword from "./components/molecule/textfield/ShowPassword";
import Select from "./components/molecule/select";

const Login = () => {
  return (
    <div className="container h-screen center bg-primary">
      <form
        className="form container container-lg rounded-box bg-base-200 shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
          (e.target as HTMLFormElement).classList.add("invalid");
        }}
      >
        <div className="divider">
          <h2>Comuniki</h2>
        </div>
        <Textfield icon="bxs:user" id="name" />
        <Textfield icon="ic:round-mail" type="email" id="email" />
        <ShowPassword
          id="password"
          icon="mdi:password"
          type="password"
          invalidText="Password was incorrect"
        />
        <Select
          items={["José", "Adriano", "Maria", "Caio"]}
          currentSelected={"José"}
        />
        <button type="submit" className="btn btn-primary">
          <Icon icon="mdi:password" />
          <span>Sign in</span>
        </button>
      </form>
    </div>
  );
};
export default Login;
