import React from 'react'

const MyButton = () => {
  const buttons = () => {
    let template = ''

    switch (props.type) {
      case 'default':

      default:
        template = ''
    }
    return template
  }
  return (
    <div className='my_link'>
      {buttons()}
    </div>
  )
}
export default MyButton
