import { useState } from "react";
import Textfield, { ITextfieldProps } from "../../atom/textfield";
import { Icon } from "@iconify/react/dist/iconify.js";

interface IShowPasswordProps extends ITextfieldProps {
  defaultShow?: boolean;
}

const ShowPassword = ({ defaultShow = false, ...textfieldProps }: IShowPasswordProps) => {
  const [showPassword, changeShowPassword] = useState(defaultShow);
  return (
    <>
      <Textfield
        {...textfieldProps}
        className="textfield-password"
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
      >
        <button 
          type="button" 
          title="Show or hide the password"
          className="btn btn-circle" 
          onClick={() => changeShowPassword(s => !s)}
        >
          <Icon icon={showPassword ? "ph:eye-slash" : "ph:eye-light"} />
        </button>
      </Textfield>
    </>
  )
}

export default ShowPassword;
