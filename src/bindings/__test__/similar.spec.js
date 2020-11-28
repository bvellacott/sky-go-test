import { getSimilar } from '../similar'

describe('getSimilar action', () => {
  let response

  beforeEach(() => {
    window.fetch = jest.fn(async () => response)
    console.error = jest.fn()
  })

  describe('success', () => {
    beforeEach(() => {
      response = {
        ok: true,
        json: async () => ('mock similar')
      }
    })

    it('should call the correct endpoint and return details', async () => {
      const details = await getSimilar('movie', '123')
      expect(window.fetch).toHaveBeenCalledWith(
        '/api/similar/movie/123'
      )
      expect(details).toEqual('mock similar')
    })
  })

  describe('failure', () => {
    beforeEach(() => {
      response = {
        ok: false,
      }
    })

    it('should log an error if search fails', async () => {
      const details = await getSimilar('movie', '123')
      expect(window.fetch).toHaveBeenCalledWith(
        '/api/similar/movie/123'
      )
      expect(console.error).toHaveBeenCalledWith('failed to get similar titles')
      expect(details).toEqual({})
    })

    it('should log an error if something unknown happens', async () => {
      window.fetch = jest.fn(async () => { throw 'unknown error' })
      const details = await getSimilar('movie', '123')
      expect(window.fetch).toHaveBeenCalledWith(
        '/api/similar/movie/123'
      )
      expect(console.error).toHaveBeenCalledWith('unknown error')
      expect(details).toEqual({})
    })
  })
})
