import React from "react";
import { FieldError } from "react-hook-form";

interface TextAreaFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  icon?: React.ElementType;
  register: any;
  required?: boolean;
  error?: FieldError;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  name,
  label,
  placeholder,
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
        <textarea
          id={id}
          rows={6}
          placeholder={placeholder}
          {...register(name, { required })}
          className={`w-full ${
            Icon ? "pl-10" : "pl-4"
          } pr-4 py-3 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#00AEFF] focus:border-[#00AEFF] resize-none
            ${error ? "border-red-500" : "border-gray-200"}`}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default TextAreaField;
