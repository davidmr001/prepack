let a = global.__abstract ? __abstract("boolean", "(false)") : false;
let b = global.__abstract ? __abstract("string", "(\"bar\")") : "bar";
let obj = { foo: 123 };
obj[b] = 456;
global.early = obj; // assignments to intrinsics are emitted in chronological order via the generator
if (a) {
  obj.f = Date.now(); // calls to Date.now() are also emitted along the same timeline, so this comes later
  obj.g = 8;
} else {
  obj.f = -1;
  obj.g = 9;
}
inspect = function() { return obj.f < 0 && obj.foo === 123 && obj.bar === 456 && obj.g === 9; }
