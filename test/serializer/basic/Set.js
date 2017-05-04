var m = new Set(["a", "b"]);
m.foo = 123;

z = m;

inspect = function() { return m instanceof Set && m.foo === 123 &&
   m.has("a") === 1 && m.has("b") === 2 && m.size === 2; }
