type InputData = {
  "height-cm": string;
  "height-ft": string;
  "height-in": string;
  "weight-kg": string;
  "weight-st": string;
  "weight-lbs": string;
};

type InputName = keyof InputData;

type NumberInputProps = {
  inputName: InputName;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputData: InputData;
};

type ResultProps = {
  inputData: InputData;
  unit: string;
  convertKgToStoneAndPounds: (kg: number) => {
    stone: number;
    pounds: number;
  };
};
