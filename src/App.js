import { Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as types from './redux/actionType'

import Header from './components/common/Header'

import Visual from './components/main/Visual'
import Content from './components/main/Content'

import Department from './components/sub/Department'
import Community from './components/sub/Community'
import Gallery from './components/sub/Gallery'
import Youtube from './components/sub/Youtube'
import Location from './components/sub/Location'
import Members from './components/sub/Members'

import './scss/style.scss'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: types.FLICKR.start,
      Opt: { type: 'interest' },
    })

    dispatch({ type: types.YOUTUBE.start })
  }, [])

  return (
    <>
      <Header />

      <Route exact path="/">
        <Visual />
        <Content />
      </Route>

      <Route path="/department" component={Department} />
      <Route path="/community" component={Community} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/location" component={Location} />
      <Route path="/members" component={Members} />
    </>
  )
}

export default App
