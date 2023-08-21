import "./NumberInput.less";

export default function NumberInput({
  inputName,
  handleChange,
  inputData,
}: NumberInputProps) {
  const unit = inputName.split("-")[1];

  const getFullName = () => {
    switch (unit) {
      case "cm":
        return "centimeter";
        break;
      case "ft":
        return "feet";
        break;
      case "in":
        return "inches";
        break;
      case "kg":
        return "kilogram";
        break;
      case "st":
        return "stone";
        break;
      case "lbs":
        return "pounds";
        break;

      default:
        throw new Error("unknown input name");
        break;
    }
  };

  const fullName = getFullName();

  return (
    <label htmlFor={inputName} className="number-input__label">
      <span className="sr-only">{fullName}</span>
      <input
        type="number"
        name={inputName}
        id={inputName}
        placeholder="0"
        maxLength={6}
        onChange={handleChange}
        value={inputData[inputName]}
        className="number-input__input"
      />
      <span className="number-input__unit">{unit}</span>
    </label>
  );
}
