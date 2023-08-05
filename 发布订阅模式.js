// 调度中心
class EventBus {
  constructor() {
    // 事件集
    this.handles = {};
  }

  // 订阅事件
  on(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType] = [];
    }
    if (typeof handle == "function") {
      this.handles[eventType].push(handle);
    } else {
      throw new Error("缺少回调函数");
    }
    return this; // 实现链式操作
  }

  // 发布事件
  emit(eventType, ...args) {
    if (this.handles.hasOwnProperty(eventType)) {
      this.handles[eventType].forEach((item, key, arr) => {
        item.apply(null, args);
      });
    } else {
      throw new Error(eventType + "事件未注册");
    }
    return this; // 实现链式操作
  }

  // 取消订阅
  off(eventType, handle) {
    if (!this.handles.hasOwnProperty(eventType)) {
      throw new Error(eventType + "事件未注册");
    } else {
      this.handles[eventType].forEach((item, key, arr) => {
        if (item == handle) {
          arr.splice(key, 1);
        }
      });
    }
    return this; // 实现链式操作
  }
}

let eventBus = new EventBus();

// 发布者
class Publisher {
  constructor() {}

  lowPrice(price) {
    // 发布lowPrice事件
    eventBus.emit("lowPrice", price);
  }
}

// 订阅者
class Subscriber {
  constructor() {}

  lowPriceHandle(price) {
    console.log("目前最低价是：" + price + "元");
  }

  getLowPrice() {
    // 订阅lowPrice事件
    eventBus.on("lowPrice", this.lowPriceHandle);
  }

  offLowPrice() {
    eventBus.off("lowPrice", this.lowPriceHandle);
  }
}

// 订阅者订阅了关于某个商品最新促销价的消息
const subscriber = new Subscriber();
subscriber.getLowPrice();

// 发布者发布了某个商品的最新促销价
const publisher = new Publisher();
publisher.lowPrice(100); // test.html:76 目前最低价是：100元

// 订阅者取消订阅
subscriber.offLowPrice();
publisher.lowPrice(200);
