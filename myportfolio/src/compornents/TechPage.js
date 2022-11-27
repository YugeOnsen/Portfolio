import React from 'react'
import awsImage from "../Images/aws.png"
import portfolioImage from "../Images/portfolio.png"
const TechPage = () => {
  return (
    <div className='container text-center'>
      <div class = 'title'>
        やってみたこと
      </div>
      <div class='row text-center'>
          <div class ='col-md-12 services'>
            <img src={awsImage} />
            <h4>awsでarkサーバーを立ててみた</h4>
            <p>そのときの実行画面</p>
          </div>
      </div>
      <div class='row text-center'>
          <div class ='col-md-12 services'>
            <img src={portfolioImage} />
            <h4>このサイト</h4>
            <p>react+firebaseで作成した</p>
          </div>
      </div>
    </div>
  )
}

export default TechPage