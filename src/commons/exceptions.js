/**
 * Module that exports exception templates.
 */

export const commonException = (code, message=null, ...others) => {
  return Object.assign(
    new Error(message),
    {
      code,
      ...others
    }
  )
}