interface InputProps {
    label: string
    type?: "text" | "password" | "email"
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }

  const Input: React.FC<InputProps> = ({ label, type = "text", placeholder, value, onChange }) => {
    return (
      <div className="flex flex-col mb-4">
        <label className="font-bold mb-1">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="rounded-md p-2"
        />
      </div>
    )
  }

export default Input