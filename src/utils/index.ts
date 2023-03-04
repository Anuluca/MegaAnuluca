// 防抖：触发高频事件后一段时间内函数只执行最后一次的
export const debounce = (fn, time) => {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, time)
  }
}

// 节流：触发高频事件后一段时间内函数只执行最后一次的
export const reduce = (fn, time) => {
  let timer
  return function () {
    if (timer) return
    timer = true
    fn()
    setTimeout(() => {
      timer = false
    }, time)
  }
}
