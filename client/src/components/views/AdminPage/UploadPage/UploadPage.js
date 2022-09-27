import React, { useRef, useState } from 'react'
import Axios from 'axios'
import {Input, Form, Button, Icon, Avatar} from 'antd'

const {TextArea} = Input;

function UploadPage() {

  const [Title, setTitle] = useState('')
  const [Discription, setDiscription] = useState('')
  const [Artist, setArtist] = useState('')
  const [Birth, setBirth] = useState('')
  const [Introduce, setIntroduce] = useState('')

  //이미지 업로더 생성
  const [FileName, setFileName] = useState('')
  const [File, setFile] = useState([])
  const [Name, setName] = useState('')

  const fileInput = useRef(null)

  const onChange = (event) => {
    if (event.target.files[0]) {
      console.log('event.target.files[0]', event.target.files[0])
      setName(event.target.files[0].name)
      const targetFile = event.target.files[0];
      const name = (event.target.files[0].name) + (event.target.files[0].lastModified)
      const type = event.target.files[0].type
      ///https://velog.io/@mimi0905/Presigned-URL%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-S3%EB%A1%9C-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C
      Axios
        .post(`https://artudent-nft.s3.us-east-1.amazonaws.com/upload/${name}`)
        .then(response => {
          console.log('response', response)
        })

    }
  }

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

  // const presignedUrl = () => {
  //   //https://artudent-nft.s3.amazonaws.com/antiquity-3069912_1920.png
  // }



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
                          <label htmlFor='image-button'>
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
                                </div>
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