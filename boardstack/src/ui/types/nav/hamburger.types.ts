export type IsOpen = boolean;
export type SetIsOpen = React.Dispatch<React.SetStateAction<boolean>>;

export interface props {
  isOpen: IsOpen;
  setIsOpen: SetIsOpen;
}
