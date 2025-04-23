function Input(props) {
  return (
    <input
      className="border-slate-300 bg-white outline-slate-500 px-4 py-2 rounded-md"
      {...props} // Spread operator to pass all props to the input element
    />
  );
}

export default Input;
