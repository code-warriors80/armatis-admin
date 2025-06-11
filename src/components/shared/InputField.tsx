interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField = ({
  label,
  placeholder,
  value,
  type = "text", // default to text if no type is provided
  name,
  onChange,
  required = false
}: InputFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-[#EE2A55] focus:border-[#EE2A55] transition-all"
        value={value}
        name={name}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
