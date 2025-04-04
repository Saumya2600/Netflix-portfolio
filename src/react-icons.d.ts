import { IconType } from 'react-icons';

declare module 'react-icons' {
  export interface IconTypeProps extends React.SVGProps<SVGSVGElement> {
    children?: never;
  }
  
  export type IconType = React.ForwardRefExoticComponent<IconTypeProps>;
}