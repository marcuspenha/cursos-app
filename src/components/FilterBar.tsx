import React from "react";

interface FilterBarProps {
  filtro: string;
  onChangeFiltro: (valor: string) => void;
}

export default function FilterBar({
  filtro,
  onChangeFiltro,
}: FilterBarProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChangeFiltro(event.target.value);
  }

  return (
    <div style={{ marginBottom: 16 }}>
      <label>
        Filtrar por título:
        <input
          type="text"
          value={filtro}
          onChange={handleChange}
          style={{ marginLeft: 8 }}
        />
      </label>
    </div>
  );
}
