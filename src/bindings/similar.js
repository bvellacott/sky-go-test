export const getSimilar = async (
  mediaType,
  id,
) => {
  try {
    const response = await fetch(
      `/api/similar/${mediaType}/${id}`,
    )
    if (response.ok) {
      return response.json()
    } else {
      console.error('failed to get similar titles')
    }
  } catch (e) {
    console.error(e)
  }
  return {}
}
