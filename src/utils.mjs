/**
 * Returns the first defined value in the given list of values.
 *
 * @param values - The list of values to check.
 * @returns The first defined value.
 * @throws {TypeError} If the list of values is empty.
 */
export function firstDefinedValue(...values) {
  if (values.length === 0) {
    throw new TypeError('values must not be empty')
  }

  const val = values.find(v => v !== null && v !== undefined)

  if (val === undefined) {
    throw new Error('No defined value found')
  }

  return val
}
