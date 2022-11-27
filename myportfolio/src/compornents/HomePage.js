import React from 'react'

const HomePage = () => {
  return (
    <div className='container text-center'>
        <div class='title'>
            経歴
        </div>
        <p>
        2016年4月津山工業高等専門学校総合理工学科入学<br></br>
        2021年4月津山工業高等専門学校専攻科入学
        </p>
        <div class='title'>
          触ったことのあるプログラミング言語
        </div>
        <div class='row text-center'>
          <h4>C</h4>
          <p>授業で触ったことがある</p>
          <h4>Java</h4>
          <p>趣味で触ったことがある</p>
          <h4>Python</h4>
          <p>卒業研究で触ったことがある</p>
        </div>
    </div>
  )
}

export default HomePage