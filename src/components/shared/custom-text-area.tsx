interface TextAreaFieldProps {
  label: string;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
}

export const TextAreaField = ({ label, value, name, onChange, placeholder, required }: TextAreaFieldProps) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
    <textarea
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none h-36 resize-none"
    />
  </div>
);
