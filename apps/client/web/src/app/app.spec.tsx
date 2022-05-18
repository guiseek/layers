import { render } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import App from './app'

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App title='Welcome client-web' />
      </BrowserRouter>
    )

    expect(baseElement).toBeTruthy()
  })

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App title='Welcome client-web' />
      </BrowserRouter>
    )

    expect(getByText(/Welcome client-web/gi)).toBeTruthy()
  })
})
