import { getDetails } from './details';

describe('getDetails action', () => {
  let response;

  beforeEach(() => {
    window.fetch = jest.fn(async () => response);
    console.error = jest.fn();
  })

  describe('success', () => {
    beforeEach(() => {
      response = {
        ok: true,
        json: async () => ('mock details')
      };
    });

    it('should call the correct endpoint and return details', async () => {
      const details = await getDetails('person', 'depp')
      expect(window.fetch).toHaveBeenCalledWith(
        '/api/details/person/depp'
      )
      expect(details).toEqual('mock details')
    });
  });

  describe('failure', () => {
    beforeEach(() => {
      response = {
        ok: false,
      };
    });

    it('should log an error if search fails', async () => {
      const details = await getDetails('person', 'depp')
      expect(window.fetch).toHaveBeenCalledWith(
        '/api/details/person/depp'
      )
      expect(console.error).toHaveBeenCalledWith('failed to get details')
      expect(details).toEqual({})
    });

    it('should log an error if something unknown happens', async () => {
      window.fetch = jest.fn(async () => { throw 'unknown error'; });
      const details = await getDetails('person', 'depp')
      expect(window.fetch).toHaveBeenCalledWith(
        '/api/details/person/depp'
      )
      expect(console.error).toHaveBeenCalledWith('unknown error')
      expect(details).toEqual({})
    });
  });
});
