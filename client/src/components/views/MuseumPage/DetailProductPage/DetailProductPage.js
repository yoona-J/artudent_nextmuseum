/* eslint-disable */

import React, { useState } from 'react'
import {Button, Carousel, Modal, Tabs} from 'antd'
import './DetailProductPage.css'
import test from './img/test.png'

function DetailProductPage() {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const tab = (key) => {
        console.log(key)
    }

    const [Open, setOpen] = useState(false);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: '#282828'
            }}>
            <div
                className='font'
                style={{
                    width: '80%',
                    margin: '0px auto',
                    textAlign: 'center'
                }}>
                <div
                    className='detail_full_div'
                    style={{
                        padding: '59px 0px 59px 0px'
                    }}>
                    <div
                        className='detail_main_div'
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '30px',
                            background: '#343434',
                            boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.15)',
                            margin: '0px auto'
                        }}>
                        <div
                            className='detail_main_div_padding'
                            style={{
                                padding: '99px 177px 111px 175px'
                            }}>
                            <div
                                className='detail_sub_div'
                                style={{
                                    display: 'inline-flex',
                                    color: '#fff',
                                    alignItems: 'center',
                                    gap: '140px'
                                }}>
                                <Carousel afterChange={onChange}>
                                    <div className='detail_carousel_div'>
                                        <img
                                            src={test}
                                            alt='carousel'
                                            style={{
                                                width: '500px',
                                                height: '500px'
                                            }}/>
                                    </div>
                                </Carousel>
                                <div className='detail_text_div'>
                                    <p
                                        className='detail_title'
                                        style={{
                                            fontSize: '24px',
                                            letterSpacing: '0.3em',
                                            marginBottom: '35px'
                                        }}>가나다라</p>
                                    <p
                                        className='detail_letter'
                                        style={{
                                            fontSize: '16px',
                                            letterSpacing: '0.1em',
                                            lineHeight: '23px',
                                            marginBottom: '35px'
                                        }}>
                                        흙으로 벌레는 별들을 쓸쓸함과 별 새겨지는 있습니다. 이런 동경과 아름다운 위에 나는 아직 노루, 까닭입니다. 쓸쓸함과 별들을 남은 우는
                                        소녀들의 까닭이요, 이름을 까닭입니다. 슬퍼하는 하나에 내 하나의 까닭이요, 내 때 어머님, 있습니다. 이름을 까닭입니다. 슬퍼하는 하나에 내
                                        하나의 까닭이요, 내 때 어머님, 있습니다. 이름을 까닭입니다. 슬퍼하는 하나에 내 하나의 까닭이요, 내 때 어머님, 있습니다. 이름을
                                        까닭입니다. 슬퍼하는 하나에 내 하나의 까닭이요, 내 때 어머님, 있습니다.
                                    </p>
                                    <Button
                                        className='detail_button'
                                        onClick={showModal}
                                        style={{
                                            width: '109px',
                                            height: '49px',
                                            background: '#575757',
                                            borderRadius: '10px',
                                            boxShadow: '4px 8px 30px 5px rgba(0, 0, 0, 0.15)',
                                            border: 0,
                                            fontSize: '16px',
                                            color: '#fff',
                                            marginRight: '81px'
                                        }}>B U Y</Button>
                                        <Modal
                                            title='작품 구매 연락처 안내'
                                            // centered
                                            visible={isModalOpen}
                                            // onOk={handleOk}
                                            onCancel={handleCancel}
                                            width={500}>
                                                <div>
                                                    <p>artudent는 작품 위탁 판매를 진행하지 않고 있습니다.</p>
                                                    <p>따라서 실물 작품 구매는 작가 개인 연락처로 연락부탁드립니다.</p>
                                                    <p>이준원 작가 : leejw@artudent.co.kr</p>
                                                </div>
                                            </Modal>
                                    <Button
                                        style={{
                                            width: '109px',
                                            height: '49px',
                                            background: '#575757',
                                            borderRadius: '10px',
                                            boxShadow: '4px 8px 30px 5px rgba(0, 0, 0, 0.15)',
                                            border: 0,
                                            fontSize: '16px',
                                            color: '#fff'
                                        }}>N F T</Button>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '110px'
                                }}>
                                <Tabs
                                    defaultActiveKey="1"
                                    centered="centered"
                                    onChange={tab}
                                    style={{
                                        width: '600px',
                                        color: '#fff'
                                    }}>
                                    {/* <Tabs.TabPane tab="Property" key='1'>작품 정보</Tabs.TabPane> */}
                                    <Tabs.TabPane tab="Artist" key='1'>
                                        <table
                                            style={{
                                                textAlign: 'left',
                                                margin: '1rem auto',
                                                width: '300px'
                                            }}>
                                            <tbody>
                                                <tr>
                                                    <td>이름</td>
                                                    <td>이준원</td>
                                                </tr>
                                                <tr>
                                                    <td>출생</td>
                                                    <td>1998.06.17</td>
                                                </tr>
                                                <tr>
                                                    <td>소개</td>
                                                    <td>바다코끼리에 대한 작품을 만듭니다.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Information" key='2'>
                                        <table
                                            style={{
                                                textAlign: 'left',
                                                margin: '1rem auto',
                                                width: '300px'
                                            }}>
                                            <tbody>
                                                <tr>
                                                    <td>제작 연도</td>
                                                    <td>2021년</td>
                                                </tr>
                                                <tr>
                                                    <td>작품 크기</td>
                                                    <td>1000 * 1000</td>
                                                </tr>
                                                <tr>
                                                    <td>작품 소재</td>
                                                    <td>캔버스에 유화</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Tabs.TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProductPage