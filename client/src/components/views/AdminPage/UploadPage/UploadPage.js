/* eslint-disable */

import React, { useRef, useState } from 'react'
import Axios from 'axios'
import {Input, Form, Button, Icon, Avatar} from 'antd'  
// import ImageUploader from './ImageUploader';

const {TextArea} = Input;

function UploadPage() {

  const [Title, setTitle] = useState('')
  const [Discription, setDiscription] = useState('')
  const [Image, setImage] = useState('')
  const [Artist, setArtist] = useState('')
  const [Birth, setBirth] = useState('')
  const [Introduce, setIntroduce] = useState('')

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value)
  }

  const discriptionChangeHandler = (event) => {
    setDiscription(event.currentTarget.value)
  }

  const artistChangeHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const birthChangeHandler = (event) => {
    setBirth(event.currentTarget.value)
  }

  const introduceChangeHandler = (event) => {
    setIntroduce(event.currentTarget.value)
  }

  const fileNameHandler = (event) => {
    setFileName(event.target.value)
  }

  const updateImage = (newImages) => {
    setImage(newImages)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Title || !Discription || !Artist || !Birth || !Introduce) {
      return alert("모든 값을 입력해야 합니다.")
    }

    const body = {
      title: Title,
      discription: Discription,
      name: Artist,
      birth: Birth,
      introduce: Introduce
    }

    console.log(body)

    Axios
      .post('/api/upload', body)
      .then(response => {
        console.log('response', response)
      })
  }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: '#282828',
                padding: '50px'
            }}>
            <div
                style={{
                    width: '80%',
                    height: '100%',
                    background: '#343434',
                    margin: '0px auto',
                    padding: '50px',
                    borderRadius: '30px'
                }}>
                <div
                    style={{
                        padding: '100px',
                        color: '#FFF'
                    }}>
                    <p
                        style={{
                            fontSize: '30px',
                            textAlign: 'center'
                        }}>NFT UPLOAD PAGE</p>
                    <Form
                        style={{
                            color: '#fff'
                        }}
                        onSubmitCapture={submitHandler}>
                        <p>제목</p>
                        <Input 
                          placeholder="작품 제목을 입력하세요"
                          onChange={titleChangeHandler}
                          value={Title}/>
                          {/* <label htmlFor='image-button'>
                            <Icon
                                type="camera"
                                style={{
                                    fontSize: "15px",
                                    marginRight: '8px'
                                }}/>
                            사진 첨부하기</label>
                        <input
                            type='file'
                            id='image-button'
                            style={{
                                display: 'none'
                            }}
                            accept='image/jpg, image/png, image/jpeg'
                            name='upload_img'
                            onChange={onChange}
                            ref={fileInput}/>
                            <div
                            style={{
                                width: '350px',
                                height: '75px',
                                border: '1px solid',
                                color: 'gray',
                                borderRadius: '11px',
                                margin: '16px 20px 0px 11px',
                                padding: '9px',
                                display: 'flex',
                            }}>
                            <Avatar
                                shape="square"
                                size={55}
                                src={FileName}
                                onChange={fileNameHandler}
                                value={FileName}/>
                                </div> */}
                                {/* <ImageUploader refreshFunction = {updateImage} /> */}
                        <p>내용</p>
                        <TextArea 
                          placeholder="작품 설명을 입력하세요"
                          onChange={discriptionChangeHandler}
                          value={Discription}/>
                        <p>작가 이름</p>
                        <Input 
                          placeholder="작가 이름을 입력하세요"
                          onChange={artistChangeHandler}
                          value={Artist}/>
                        <p>작가 출생</p>
                        <Input
                          placeholder="작가 생년월일을 입력하세요"
                          onChange={birthChangeHandler}
                          value={Birth}
                          type='number'/>
                        <p>작가 소개</p>
                        <Input 
                          placeholder="작가 한줄 소개를 입력하세요"
                          onChange={introduceChangeHandler}
                          value={Introduce}/>
                        <Button htmlType='submit'>UPLOAD</Button>
                        <Button>CANCEL</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default UploadPage