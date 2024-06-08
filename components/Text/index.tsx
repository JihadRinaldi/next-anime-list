import { twMerge } from 'tailwind-merge';

export interface Props {
  label: string;
  children?: React.ReactNode;
  className?: string;
}

const Text = ({ label, children, className = '' }: Props) => {
  const renderLabel = () => {
    if (children) {
      return children;
    }

    return label;
  };

  className = twMerge('text-white', className);
  return <div className={twMerge(className)}>{renderLabel()}</div>;
};

export { Text };
