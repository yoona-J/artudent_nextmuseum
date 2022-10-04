import React, {useState, useRef} from 'react'
import Axios from 'axios'

function ImageUpload(props) {

    const [Images, setImages] = useState([])
    const fileInput = useRef(null)
    const onChange = (files) => {

        let formData = new FormData();

        const config = {
            header: {
                'content-type': 'multipart/form-data'
            }
        }
        formData.append("file", files[0])

        Axios
            .post('/api/upload/image', formData, config)
            .then(response => {
                //불러오는 사진 정보를 가져온다.
                if (response.data.success) {
                    console.log(response.data)

                    setImages([
                        ...Images,
                        response.data.filePath
                    ])
                    props.refreshFunction([
                        ...Images,
                        response.data.filePath
                    ])

                } else {
                    alert('파일을 저장하는데 실패했습니다.')
                }
            })

    }
  return (
    <div>
        <label htmlFor='image-button'>
            사진 첨부하기
        </label>
        <input
            type='file'
            id='image-button'
            style={{
                display: 'none'
            }}
            accept='image/jpg, image/png, image/jpeg'
            name='story_img'
            onChange={onChange}
            ref={fileInput}/>
            <div
                style={{
                    display: 'flex',
                    width: '350px',
                    height: '240px',
                    overflowX: 'scroll'
                }}>

                {
                    Images.map((image, index) => (
                        <div key={index}>
                            <img
                                style={{
                                    minWidth: '300px',
                                    width: '300px',
                                    height: '240px'
                                }}
                                alt='img'
                                src={`http://localhost:5000/${image}`}/>
                        </div>
                    ))
                }

            </div>
    </div>
  )
}

export default ImageUpload