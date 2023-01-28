import React from 'react'
import styled from 'styled-components'
import '../components/main/MainPage.css'
import $ from 'jquery'

const MainPage = () => {
  const listHTML = $('.Title').html()
  const listItems = listHTML.split('<br>')
  $('.Title').html('')
  $.each(listItems, function (i, v) {
    const item =
      '<div class="Title-mask"><span class="Title-line">' + v + '</span></div>'
    $('.Title').append(item)
  })
  return (
    <h1 data-linecount="3" className="Title">
      The spectacle
      <br> before us was</br>
      <br>
        indeed
        <span className="Title-cursive">sublime</span>
        <span className="Title-dot">.</span>
      </br>
    </h1>
  )
}

export default MainPage
