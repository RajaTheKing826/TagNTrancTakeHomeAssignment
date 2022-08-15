import React from "react";
import Select from "react-select";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectComponentProps {
  selectOptions: Array<SelectOption>;
  onOptionChange: (value: SelectOption | null) => void;
  defaultValue?: SelectOption;
}

export const CommonSelectorComponent = (props: SelectComponentProps) => {
  const { selectOptions, onOptionChange, defaultValue } = props;

  return (
    <Select
      onChange={onOptionChange}
      defaultValue={defaultValue}
      options={selectOptions}
    />
  );
};
