export const getDetails = async (
  mediaType,
  id,
) => {
  try {
    const response = await fetch(
      `/api/details/${mediaType}/${id}`,
    )
    if (response.ok) {
      return response.json()
    } else {
      console.error('failed to get details')
    }
  } catch (e) {
    console.error(e)
  }
  return {}
}
