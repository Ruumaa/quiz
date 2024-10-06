const Divider = ({ text }: { text?: string }) => {
  return (
    <div className="flex items-center my-4">
      <div className="flex-grow border-t border-gray-300" />
      <span className="mx-4 text-gray-500 font-semibold text-xs md:text-sm">
        {text}
      </span>
      <div className="flex-grow border-t border-gray-300" />
    </div>
  );
};

export default Divider;
