import isLength from 'validator/lib/isLength'
import isEmail from 'validator/lib/isEmail'
import isCreditCard from 'validator/lib/isCreditCard'
import isNumeric from 'validator/lib/isNumeric'

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


  if (!values.shippingCountry) {
    errors.shippingCountry = 'Required'
  }

  if (!values.billingStreetAddress) {
    errors.billingStreetAddress = 'Required'
  }

  if (!values.billingZipCode) {
    errors.billingZipCode = 'Required'
  }


  if (!values.billingCountry) {
    errors.billingCountry = 'Required'
  }

  if (!values.cardNumber) {
    errors.cardNumber = 'Required'
  }else if(!isCreditCard(values.cardNumber)){
    errors.cardNumber = 'this is not a credit card number'
  }

  if (!values.securityCode) {
    errors.securityCode = 'Required'
  }else if(values.securityCode==111){
    alert("haha..it looks like you're hacker,LOL the police has already  known your IP")
    errors.securityCode = '111 is a bad security code'
  }

  if (!values.month) {
    errors.month = 'Required'
  }else if(!isNumeric(values.month)){
    errors.month = 'Required'
  }

  if (!values.year) {
    errors.year = 'Required'
  }else if(!isNumeric(values.year)){
    errors.year = 'Required'
  }

  return errors
}
