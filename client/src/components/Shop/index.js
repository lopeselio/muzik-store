import React, { Component } from 'react'
import PageTop from '../utils/page_top';
import { connect } from 'react-redux'

class Shop extends Component {
  render() {
    return (
      <div>
        shop
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.prop
  }
}
export default connect()(Shop)