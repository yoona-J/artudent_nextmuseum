/* eslint-disable */

import React, { useRef, useState } from 'react'
import Axios from 'axios'
import {Input, Form, Button, Icon, Avatar} from 'antd'
import ImageUploader from './ImageUploader'

const {TextArea} = Input;

function UploadPage() {

  const [Title, setTitle] = useState('')
  const [Discription, setDiscription] = useState('')
  const [Images, setImages] = useState([])
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
    setArtist(event.currentTarget.value)
  }

  const birthChangeHandler = (event) => {
    setBirth(event.currentTarget.value)
  }

  const introduceChangeHandler = (event) => {
    setIntroduce(event.currentTarget.value)
  }

  const imageChangehandler = (newImages) => {
    setImages(newImages)
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
      introduce: Introduce,
      images: Images
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
                        <ImageUploader refreshFunction={imageChangehandler}/>
                        <p>제목</p>
                        <Input 
                          placeholder="작품 제목을 입력하세요"
                          onChange={titleChangeHandler}
                          value={Title}/>
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