import { Input } from "components";
export default {
  title: "accel_demo/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder8",
  variant: "OutlineGray200",
  size: "sm",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
