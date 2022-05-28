import { useEffect, useState } from 'react'
import Card from './components/card'
import Page from './views/page'

import { Provider } from 'react-redux'
import { fetchHotRecommend } from '@/store/music'
import store, { useAppDispatch } from '@/store'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    // 请求热榜推荐歌曲的数据
    dispatch(fetchHotRecommend())
  }, [dispatch])

  // page是否显示
  const [pageActive, setPageActive] = useState(false)
  return (
    <>
      <Card changePageActive={() => setPageActive(!pageActive)} />
      <Page />
    </>
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
