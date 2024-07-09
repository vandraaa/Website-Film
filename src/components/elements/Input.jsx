const Input = (props) => {
  const { type, placeholder, customStyle, oc, value } = props;
  return (
    <input
      type={type}
      className={`px-4 py-2 border ${customStyle} border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
      placeholder={placeholder}
      onChange={oc}
      value={value}
    />
  );
};

export default Input
