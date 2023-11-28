import { MapBrazil } from "react-brazil-map";

export const Map: React.FC = () => {
  return (
    <MapBrazil
      width={500}
      height={500}
      bg="rgba(173, 255, 77, 1)"
      fill="#34C759"
    />
  );
};
