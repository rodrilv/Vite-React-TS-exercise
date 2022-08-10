import { FC } from 'react';

interface Props {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export const ButtonSize: FC<Props> = ({ selectedSize, onSizeChange }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  return (
    <div>
      {sizes.map((size) => (
        <button onClick={() => onSizeChange(size)}>{size}</button>
      ))}
    </div>
  );
};
