import React from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  icon?: React.ElementType;
  register: any;
  required?: boolean;
  error?: FieldError;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  icon: Icon,
  register,
  required,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[#034E72] mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, { required })}
          className={`w-full ${
            Icon ? "pl-10" : "pl-4"
          } pr-4 py-3 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#00AEFF] focus:border-[#00AEFF]
            ${error ? "border-red-500" : "border-gray-200"}`}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
