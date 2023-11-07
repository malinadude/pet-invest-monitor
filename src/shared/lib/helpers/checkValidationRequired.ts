export function checkValidationRequired(validatingObject: object) {
  const values = Object.values(validatingObject)

  return values.every((value: any) => {
    return value !== '' && value !== null
  })
}
