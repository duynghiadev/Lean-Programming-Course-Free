function move(n, A, B, C) {
  if (n === 1) {
    console.log(`${A}->${C}`);
  } else {
    move(n - 1, A, C, B);
    console.log(`${A}->${C}`);
    move(n - 1, B, A, C);
  }
}

const n = 3;
move(n, "A", "B", "C");
