import {
  getImageForResult,
  getMediaType,
} from '../utils'

describe('utils', () => {
  describe('getImageForResult', () => {
    it('should return profile path primarily', () => {
      const path = getImageForResult({
        profile_path: '/profile.png',
        backdrop_path: '/backdrop.png',
        poster_path: '/poster.png',
        known_for: [{
          backdrop_path: '/known_for_backdrop.png',
        }],
      })
      expect(path).toEqual('/profile.png')
    })

    it('should return backdrop path secondarily', () => {
      const path = getImageForResult({
        backdrop_path: '/backdrop.png',
        poster_path: '/poster.png',
        known_for: [{
          backdrop_path: '/known_for_backdrop.png',
        }],
      })
      expect(path).toEqual('/backdrop.png')
    })

    it('should return poster path thirdly', () => {
      const path = getImageForResult({
        poster_path: '/poster.png',
        known_for: [{
          backdrop_path: '/known_for_backdrop.png',
        }],
      })
      expect(path).toEqual('/poster.png')
    })

    it('should return known for item backdrop path lastly', () => {
      const path = getImageForResult({
        known_for: [{
          backdrop_path: '/known_for_backdrop.png',
        }],
      })
      expect(path).toEqual('/known_for_backdrop.png')
    })
  })

  describe('getMediaType', () => {
    it('should return media type primarily', () => {
      const mediaType = getMediaType({
        media_type: 'tv',
        known_for_department: 'defined',
      })
      expect(mediaType).toEqual('tv')
    })

    it('should return person if media type not found but has known_for_department', () => {
      const mediaType = getMediaType({
        known_for_department: 'defined',
      })
      expect(mediaType).toEqual('person')
    })

    it('should return movie if nothing else found', () => {
      const mediaType = getMediaType({})
      expect(mediaType).toEqual('movie')
    })
  })
})
