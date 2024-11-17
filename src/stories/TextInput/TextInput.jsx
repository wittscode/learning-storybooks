import PropTypes from "prop-types";
import { useState } from "react";

const TextInput = ({ name, label, placeholder, type = "text" }) => {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-lg font-bold mb-2 "
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 ext-gray-700 leading-tight focus:shadow-outline"
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;
