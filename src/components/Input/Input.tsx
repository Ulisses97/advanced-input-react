import { InputHTMLAttributes, forwardRef, useId } from "react";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string | any;
};

// Genericos: Tipo da referencia,  Tipagem do componente
// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, name = "", type = "text", ...props }, ref) => {
    const inputId = useId();
    return (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={inputId}
            className="text-md text-gray-600 capitalize "
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={`transition-all duration-200 ease-in-out w-full mt-2 outline-none text-xl placeholder:text-gray-400 focus:border-[#3B3BF4] border-b-2
           ${helperText ? "border-red-400" : "border-gray-400"}
          `}
          type={type}
          name={name}
          {...props}
          ref={ref}
        />
        {helperText && (
          <span className="text-red-600 text-sm mt-2">{helperText}</span>
        )}
      </div>
    );
  }
);
