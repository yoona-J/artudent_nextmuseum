import React from 'react'
import { Input, Form, Button } from 'antd'

const { TextArea } = Input;

function UploadPage() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#282828', padding: '50px'}}>
      <div style={{ width: '80%', height: '100%', background: '#343434', margin: '0px auto', padding: '50px', borderRadius: '30px'}}>
        <div style={{ padding: '100px', color: '#FFF'}}>
          <p style={{fontSize: '30px', textAlign: 'center'}}>NFT UPLOAD PAGE</p>
          <Form style={{color: '#fff'}}>
            <p>제목</p>
            <Input placeholder="Basic usage" />
            <p>내용</p>
            <TextArea placeholder="Basic usage" />
            <p>작품 사진</p>
            {/* https://velog.io/@mimi0905/Presigned-URL%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-S3%EB%A1%9C-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C */}
            <div style={{ width: '100px', background: '#cccccc'}}>
              <label htmlFor='image-button'>사진 첨부하기</label>
              <input
                  type='file'
                  id='image-button'
                  style={{
                      display: 'none'
                  }}
                  accept='image/jpg, image/png, image/jpeg'
                  name='story_img'
                  // onChange={onChange}
                  // ref={fileInput}
                  />
            </div>
            <p>작가 이름</p>
            <Input placeholder="Basic usage" />
            <p>작가 출생</p>
            <Input placeholder="Basic usage" />
            <p>작가 소개</p>
            <Input placeholder="Basic usage" />
            <Button>UPLOAD</Button>
            <Button>CANCEL</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default UploadPage