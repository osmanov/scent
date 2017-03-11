import isLength from 'validator/lib/isLength'
import isEmail from 'validator/lib/isEmail'

//TODO Required checker is super weird,but now I don't have enough time for thinking,sorry for that
export const validate = values => {
  const errors = {}

  if (!values.password) {
    errors.password = 'Required'
  }else if(!isLength(values.password,{min:10, max: undefined})){
    errors.password = '10 characters minimum for password'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!isEmail(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  if (!values.shippingStreetAddress) {
    errors.shippingStreetAddress = 'Required'
  }

  if (!values.shippingZipCode) {
    errors.shippingZipCode = 'Required'
  }

  if (!values.shippingCity) {
    errors.shippingCity = 'Required'
  }

  if (!values.shippingState) {
    errors.shippingState = 'Required'
  }

  if (!values.shippingCountry) {
    errors.shippingCountry = 'Required'
  }

  if (!values.billingStreetAddress) {
    errors.billingStreetAddress = 'Required'
  }

  if (!values.billingZipCode) {
    errors.billingZipCode = 'Required'
  }

  if (!values.billingCity) {
    errors.billingCity = 'Required'
  }

  if (!values.billingState) {
    errors.billingState = 'Required'
  }
  if (!values.billingCountry) {
    errors.billingCountry = 'Required'
  }

  return errors
}
