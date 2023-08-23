function observe(data, callback) {
  return new Proxy(data, {
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      if (result) {
        callback(key, value);
      }
      return result;
    },
    get(target, key, receiver) {
      const value = Reflect.get(target, key, receiver);
      console.log(target, key, receiver);
      return value;
    },
  })
}

// 使用方法
const data = observe({ name: "张三", age: 20 }, (key, value) => {
  console.log(`属性${key}的值变为${value}`);
});

data.name = "李四"; // 输出：属性name的值变为李四
data.age = 22; // 输出：属性age的值变为22
data.name
// console.log(data.name);