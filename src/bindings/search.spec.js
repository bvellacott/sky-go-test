import { search } from './search';

describe('search action', () => {
  let response;

  beforeEach(() => {
    window.fetch = jest.fn(async () => response);
    console.error = jest.fn();
  })

  describe('success', () => {
    beforeEach(() => {
      response = {
        ok: true,
        json: async () => ({ results: 'mock results' })
      };
    });

    it('should call the correct endpoint and return results', async () => {
      const feed = await search('multi', 'alf')
      expect(window.fetch).toHaveBeenCalledWith(
        `/api/search/multi?query=alf`
      )
      expect(feed).toEqual({ results: 'mock results' })
    });
  });

  describe('failure', () => {
    beforeEach(() => {
      response = {
        ok: false,
      };
    });

    it('should log an error if search fails', async () => {
      const feed = await search('multi', 'alf')
      expect(window.fetch).toHaveBeenCalledWith(
        `/api/search/multi?query=alf`
      )
      expect(console.error).toHaveBeenCalledWith('failed to get results')
      expect(feed).toEqual({})
    });

    it('should log an error if something unknown happens', async () => {
      window.fetch = jest.fn(async () => { throw 'unknown error'; });
      const feed = await search('multi', 'alf')
      expect(window.fetch).toHaveBeenCalledWith(
        `/api/search/multi?query=alf`
      )
      expect(console.error).toHaveBeenCalledWith('unknown error')
      expect(feed).toEqual({})
    });
  });
});
