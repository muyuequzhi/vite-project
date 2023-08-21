export const longpress = {
  beforeMount(el, binding) {
    const cb = binding.value
    if (typeof cb !== 'function') return console.warn('v-longpress指令必须接收一个回调函数')
    let timer = null

    // 取消计时器
    const cancel = () => {
      if (timer !== null) {
        clearTimeout(timer)
        timer = null
      }
    }

    el.addEventListener('mousedown', (e) => {
      // 排除右键情况
      // event.button: 0-左键  2-右键
      if (e.button !== 0) return
      e.preventDefault()
      if (timer === null) {
        timer = setTimeout(() => {
          cb()
          timer = null
        }, 2000)
      }
    })
    el.addEventListener('mouseup', cancel)
  },
  unmounted(el) {
    el.removeEventListener('mousedown', () => {})
    el.removeEventListener('mouseup', () => {})
  },
}
