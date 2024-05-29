interface IPerson {
  name?: string;
  color?: string;
}

function Person({ name, color }: IPerson) {
  const style = { background: color };

  if (name) {
    return <h1 style={style}>{name}</h1>;
  }
  return <h1 style={style}>Ai đó</h1>;
}

export default function Home() {
  return (
    <main>
      <h1>Hello, </h1>
      <Person name="Nghĩa" color="red" />
      <Person name="Duy Nghia Dev" color="purple" />
      <Person color="yellow" />
    </main>
  );
}
