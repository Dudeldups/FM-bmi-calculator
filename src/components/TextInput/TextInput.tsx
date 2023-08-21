import "./TextInput.less";

export default function TextInput({
  inputName,
  handleChange,
  inputData,
}: TextInputProps) {
  const getFullName = (name: string) => {
    switch (name) {
      case "height-cm":
        return "centimeter";
        break;
      case "height-ft":
        return "feet";
        break;
      case "height-in":
        return "inches";
        break;
      case "weight-kg":
        return "kilogram";
        break;
      case "weight-st":
        return "stone";
        break;
      case "weight-lbs":
        return "pounds";
        break;

      default:
        throw new Error("unknown input name");
        break;
    }
  };

  const unit = inputName.split("-")[1];
  const fullName = getFullName(inputName);

  return (
    <label htmlFor={inputName} className="text-input__label">
      <span className="sr-only">{fullName}</span>
      <input
        type="text"
        name={inputName}
        id={inputName}
        placeholder="0"
        maxLength={6}
        onChange={handleChange}
        value={inputData[inputName]}
        className="text-input__input"
      />
      <span className="text-input__unit">{unit}</span>
    </label>
  );
}
