import { IconType } from 'react-icons';

interface IconWrapperProps {
  Icon: IconType; // Rename to `Icon` to avoid confusion with React elements
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ Icon, className = '' }) => {
  return <Icon className={className} />;
};

export default IconWrapper;
