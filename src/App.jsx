import { estados } from "./estados";

const App = () => {
  return (
    <div>
      <select>
        {estados.map(({ id, value, nome }) => (
          <option key={id} value={value}>
            {nome}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
