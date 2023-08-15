import { Icon } from "@iconify/react/dist/iconify.js";
import useModal from "../../stores/useModal";
import NewUserModal from "../components/modal/NewUserModal";
import Select from "../../components/molecule/select";
import ShowPassword from "../../components/molecule/textfield/ShowPassword";
import Textfield from "../../components/atom/textfield";
import UserModal from "../components/modal/UserModal";
import Chart from "../../components/atom/chart";
import UserChart from "../components/chart/UserChart";

const items = [
  {
    img: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4385.jpg?w=2000",
    name: "José",
    age: 20,
  },
  {
    img: "https://p1.hiclipart.com/preview/48/402/542/facebook-login-user-profile-avatar-computer-network-chart-eyewear-cartoon-head-png-clipart.jpg",
    name: "Maria",
    age: 18,
  },
  {
    img: "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000",
    name: "Caio",
    age: 27,
  },
  {
    img: "https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg",
    name: "Thiago",
    age: 22,
  },
  {
    img: "https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg",
    name: "Marcos",
    age: 22,
  },
  {
    img: "https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg",
    name: "Iago",
    age: 22,
  },
];

const Login = () => {
  const { openModal, closeModal } = useModal();

  return (
    <div className="container h-screen center bg-primary">
      <div className="container row">
        <form
          className="form container container-lg rounded-box bg-base-200 shadow-md"
          onSubmit={(e) => {
            e.preventDefault();

            const data = new FormData(e.target as HTMLFormElement);

            console.log(Object.fromEntries(data));
            (e.target as HTMLFormElement).classList.add("invalid");
          }}
        >
          <div className="divider">
            <h2>Comuniki</h2>
          </div>
          <div className="group rounded-box">
            <label htmlFor="test" className="bg-primary">
              Test
            </label>
            <input
              id="test"
              name="test"
              defaultValue="Supreme"
              className="input input-neutral"
            />
          </div>
          <Textfield icon="bxs:user" id="name" />
          <Textfield icon="ic:round-mail" type="email" id="email" />
          <ShowPassword
            id="password"
            icon="mdi:password"
            type="password"
            invalidText="Password was incorrect"
          />
          <div className="group rounded-box">
            <label className="bg-primary">User</label>
            <Select
              items={items}
              name="user"
              selector="name"
              keyExtractor={({ img, age, name }) => (
                <div className="container row gap-xs">
                  <img
                    src={img}
                    height={16}
                    width={16}
                    className="rounded-full"
                  />
                  <span>{"-"}</span>
                  <span>
                    {name}, {age} yo
                  </span>
                </div>
              )}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <Icon icon="mdi:password" />
            <span>Sign in</span>
          </button>
        </form>
        <UserChart />
      </div>
      <div className="container row">
        <button
          type="button"
          className="btn btn-neutral"
          onClick={() => openModal("new-user")}
        >
          Sign up
        </button>
        <button
          type="button"
          className="btn btn-neutral"
          onClick={() => openModal("user")}
        >
          Sign in
        </button>
      </div>
      <NewUserModal closeModal={closeModal} />
      <UserModal closeModal={closeModal} />
    </div>
  );
};

export default Login;
