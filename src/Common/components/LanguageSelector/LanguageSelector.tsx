import React from "react";
import Select from "react-select";

export interface LanguageOption {
  value: string;
  label: string;
}

interface LanguageSelectorProps {
  selectOptions: Array<LanguageOption>;
  onLanguageChange: (value: LanguageOption | null) => void;
}

export const LanguageSelector = (props: LanguageSelectorProps) => {
  const { selectOptions, onLanguageChange } = props;

  return (
    <Select
      onChange={onLanguageChange}
      defaultValue={selectOptions[0]}
      options={selectOptions}
    />
  );
};
