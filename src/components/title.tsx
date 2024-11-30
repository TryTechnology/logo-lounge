// components/Title.tsx
type TitleProps = {
  text: string;
  styleType?: 'primary' | 'secondary' | 'danger'; // Define possible style types
};

const Title = ({ text, styleType = 'primary' }: TitleProps) => {
  const baseClass = 'text-2xl font-bold';
  const styleMap: Record<string, string> = {
    primary: `${baseClass} text-blue-500 py-10`,
    secondary: `${baseClass} text-green-500 text-xl`,
    danger: `${baseClass} text-red-500 font-extrabold`,
  };

  const className = styleMap[styleType] || styleMap.primary; // Default to 'primary'
  return <h1 className={className}>{text}</h1>;
};

export default Title;