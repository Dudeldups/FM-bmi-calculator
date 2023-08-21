type InputData = {
  "height-cm": string;
  "height-ft": string;
  "height-in": string;
  "weight-kg": string;
  "weight-st": string;
  "weight-lbs": string;
};

type InputName = keyof InputData;

type TextInputProps = {
  inputName: InputName;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputData: InputData;
};
