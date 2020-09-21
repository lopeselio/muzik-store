
export const validate = (element, formdata = []) => {
  let error = [true, '']

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value)
    const message = `${!valid ? 'Must be a valid email' : ''}`
    error = !valid ? [valid, message] : error
  }

  if (element.validation.confirm) {
    const valid = element.value.trim() === formdata[element.validation.confirm].value
    const message = `${!valid ? 'Passwords do not match' : ''}`
    error = !valid ? [valid, message] : error
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== ''
    const message = `${!valid ? 'This field is required' : ''}`
    error = !valid ? [valid, message] : error
  }

  return error
}

export const update = (element, formdata, formName) => {
  const newFormdata = {
    ...formdata
  }
  const newElement = {
    ...newFormdata[element.id]
  }

  newElement.value = element.event.target.value

  if (element.blur) {
    const validData = validate(newElement, formdata)
    newElement.valid = validData[0]
    newElement.validationMessage = validData[1]
  }

  newElement.touched = element.blur
  newFormdata[element.id] = newElement

  return newFormdata
}

export const generateData = (formdata, formName) => {
  const dataToSubmit = {}

  for (const key in formdata) {
    if (key !== 'confirmPassword') {
      dataToSubmit[key] = formdata[key].value
    }
  }

  return dataToSubmit
}

export const isFormValid = (formdata, formName) => {
  let formIsValid = true

  for (const key in formdata) {
    formIsValid = formdata[key].valid && formIsValid
  }
  return formIsValid
}
