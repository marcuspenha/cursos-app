interface FilterBarProps {
  filtro: string;
  onChangeFiltro: (valor: string) => void;
}

export default function FilterBar({ filtro, onChangeFiltro }: FilterBarProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label>
        Filtrar por título:
        <input
          type="text"
          value={filtro}
          onChange={(e) => onChangeFiltro(e.target.value)}
          style={{ marginLeft: 8 }}
        />
      </label>
    </div>
  );
}
