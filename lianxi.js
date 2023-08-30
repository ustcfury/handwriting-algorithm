function classifyStrings(strs) {
  const map = new Map();
  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (map.has(key)) {
      map.get(key).add(str);
    } else {
      map.set(key, new Set([str]));
    }
  }
  return map.size;
}
console.log(classifyStrings(['abc','bcaa']));