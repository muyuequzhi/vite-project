export const isArray = function (o) {
  return Object.prototype.toString.call(o) == '[object Array]'
}
// 格式化银行卡号
export const formatCardNumber = function (number) {
  number = number.toString() || ''
  // 18位本行借记卡
  if (number.startsWith('6223') && number.length === 18) {
    number = number.slice(4)
  }
}
