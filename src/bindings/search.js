export const search = async (
  searchType,
  qyery,
) =>  {
  try {
    const response = await fetch(
      `/api/search/${searchType}?query=${qyery}`,
    )
    if (response.ok) {
      return response.json()
    } else {
      console.error('failed to get results')
    }
  } catch (e) {
    console.error(e)
  }
  return {}
}
