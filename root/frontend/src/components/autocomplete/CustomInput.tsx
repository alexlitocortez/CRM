import React, { useState } from "react";
import { Input } from "antd";

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={{ width: "30vw", marginBottom: "1rem" }}
    />
  );
};
