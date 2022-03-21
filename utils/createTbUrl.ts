const url =
  'alipays://platformapi/startapp?appId=2019062465587961&page=pages%2Fhz-enjoy%2Fpass%2Findex%3FextraData%3D%7B%22templateId%22%3A%22ZMGO_TPL2022031100088265%22%2C%22partnerId%22%3A%222088931494445924%22%2C%22appId%22%3A%222021001194640142%22%2C%22outRequestNo%22%3A%221647343626194%22%7D'
const tb = 'https://render-pre.alipay.com/p/w/zmGo2tb/pass.html?'
const userId = '2088902771251835'
const tbLocal = 'xcrun simctl openurl booted "taobao://render-local.alipay.com/pass.html?'

function getParams(data: { [key: string]: any }) {
  return Object.keys(data)
    .map(key => `${key}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export function createTbUrl(apUrl = url, tbUrl = tb, args?: { [key: string]: any }) {
  const normalUrl = decodeURIComponent(apUrl)
  const pageRoute = new URL(normalUrl).searchParams.get('page')
  const pageRouteParams = new URL('http://' + pageRoute).searchParams.get(
    'extraData'
  )
  const obj = Object.assign(JSON.parse(pageRouteParams!), { userId, ...args })
  return {
    tbUrl: tbUrl + getParams(obj),
    tbLocal: `${tbLocal + getParams(obj)}"`
  }
}