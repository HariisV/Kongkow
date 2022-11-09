interface ChildProps {
  color: string;
  children: JSX.Element;
  onClick: () => void;
}
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hi {color}
      <button onClick={onClick}>Click Here</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Here</button>
    </div>
  );
};

// ChildAsFC.displayName
