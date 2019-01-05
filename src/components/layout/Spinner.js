import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div class="row align-items-center justify-content-center" style={{height:'80vh', width:'100%'}}>
        <div className="col-10 text-center">
          <img src="/img/spinner.gif" alt="loading...."></img>
        </div>
      </div>
    )
  }
}
