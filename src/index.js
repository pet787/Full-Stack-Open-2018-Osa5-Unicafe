import React from 'react'
import ReactDOM from 'react-dom'
import store from './components/reducer'

store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})


class App extends React.Component {


  render() {

    const klik = (nappi) => () => {
      store.dispatch({type: nappi })
    }
      
    const Statistiikka = ( stats ) => {
      const palautteita = store.getState().counter
      if (palautteita === 0) {
        return (
          <div>
            <h2>stataistiikka</h2>
            <div>ei yhtään palautetta annettu</div>
          </div>
        )
      }
    
      return (
        <div>
          <h2>statistiikka</h2>
          <table>
            <tbody>
              <tr>
                <td>hyvä</td>
                <td>{store.getState().good}</td>
              </tr>
              <tr>
                <td>neutraali</td>
                <td>{store.getState().ok}</td>
              </tr>
              <tr>
                <td>huono</td>
                <td>{store.getState().bad}</td>
              </tr>
              <tr>
                <td>keskiarvo</td>
                <td>{store.getState().average}</td>
              </tr>
              <tr>
                <td>positiivisia</td>
                <td>{store.getState().positive} %</td>
              </tr>
            </tbody>
          </table>
    
          <button onClick={klik('ZERO')}>nollaa tilasto</button>
        </div >
      )
    }

    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={klik('GOOD')}>hyvä</button>
        <button onClick={klik('OK')}>neutraali</button>
        <button onClick={klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)