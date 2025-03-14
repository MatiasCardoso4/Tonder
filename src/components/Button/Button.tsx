interface Props {
  buttonText: string;
  likePerson: () => void;
}

export const Button = ({buttonText,likePerson}:Props) => {
  return (
    <div className="flex justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={likePerson}>
        {buttonText}
      </button>
    </div>
  );
};
