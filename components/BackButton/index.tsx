import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
  const { back } = useRouter();
  return (
    <button
      onClick={back}
      className="flex items-center text-blue-500 hover:text-blue-700 cursor-pointer"
    >
      <FaArrowLeft className="mr-2" />
    </button>
  );
};

export { BackButton };
