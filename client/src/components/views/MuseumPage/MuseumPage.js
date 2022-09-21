import React from 'react'
import { Card, Button } from 'antd'
import './MuseumPage.css'

const { Meta } = Card;

function MuseumPage() {
    return (
        <div style={{width: '100%', height:'100%', background: '#282828'}}>
            <div className='font' style={{width: '80%', margin: '0px auto', textAlign: 'center'}}>
                <div className='museum_category_button_padding' style={{paddingTop: '123px'}}>
                    <div className='museum_category_button' style={{width: '200px', height: '50px', borderRadius: '10px', backgroundColor: '#343434', boxShadow: '4px 8px 30px 5px rgba(0, 0, 0, 0.15)', margin: '0px auto'}}>
                        <p style={{fontWeight: '700', fontSize: '20px', letterSpacing: '0.1em', color: '#C2C2C2', paddingTop: '11px'}}>Category</p>
                    </div>
                </div>
                <div className='museum_main_div' style={{display: 'inline-flex', flexFlow: 'row wrap', justifyContent: 'center', width: '80%', gap: '115px'}}>
                    <div className='museum_card_div' style={{marginTop: '100px'}}>
                        <a href='/museum/1'>
                            <Card
                                style={{
                                    width: '300px',
                                    height: '400px',
                                    background: '#343434',
                                    border: '1px solid #343434',
                                    borderRadius: '10px',
                                    boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.2)',
                                    textAlign: 'center',
                                }}
                                cover={
                                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width: '250px', height: '250px', margin: '1rem auto'}}/>
                                }
                            >
                                <Meta title="이준원" description="가나다라" style={{letterSpacing: '0.1em'}} />
                            </Card>
                        </a>
                    </div>
                    <div className='museum_card_div' style={{marginTop: '100px'}}>
                        <Card
                            style={{
                                width: '300px',
                                height: '400px',
                                background: '#343434',
                                border: '1px solid #343434',
                                borderRadius: '10px',
                                boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                            }}
                            cover={
                                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width: '250px', height: '250px', margin: '1rem auto'}}/>
                            }
                        >
                            <Meta title="이준원" description="가나다라" style={{letterSpacing: '0.1em'}} />
                        </Card>
                    </div>
                    <div className='museum_card_div' style={{marginTop: '100px'}}>
                        <Card
                            style={{
                                width: '300px',
                                height: '400px',
                                background: '#343434',
                                border: '1px solid #343434',
                                borderRadius: '10px',
                                boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                            }}
                            cover={
                                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width: '250px', height: '250px', margin: '1rem auto'}}/>
                            }
                        >
                            <Meta title="이준원" description="가나다라" style={{letterSpacing: '0.1em'}} />
                        </Card>
                    </div>
                    <div className='museum_card_div' style={{marginTop: '100px'}}>
                        <Card
                            style={{
                                width: '300px',
                                height: '400px',
                                background: '#343434',
                                border: '1px solid #343434',
                                borderRadius: '10px',
                                boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                            }}
                            cover={
                                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width: '250px', height: '250px', margin: '1rem auto'}}/>
                            }
                        >
                            <Meta title="이준원" description="가나다라" style={{letterSpacing: '0.1em'}} />
                        </Card>
                    </div>
                    <div className='museum_card_div' style={{marginTop: '100px'}}>
                        <Card
                            style={{
                                width: '300px',
                                height: '400px',
                                background: '#343434',
                                border: '1px solid #343434',
                                borderRadius: '10px',
                                boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                            }}
                            cover={
                                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width: '250px', height: '250px', margin: '1rem auto'}}/>
                            }
                        >
                            <Meta title="이준원" description="가나다라" style={{letterSpacing: '0.1em'}} />
                        </Card>
                    </div>
                    <div className='museum_card_div' style={{marginTop: '100px'}}>
                        <Card
                            style={{
                                width: '300px',
                                height: '400px',
                                background: '#343434',
                                border: '1px solid #343434',
                                borderRadius: '10px',
                                boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                            }}
                            cover={
                                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width: '250px', height: '250px', margin: '1rem auto'}}/>
                            }
                        >
                            <Meta title="이준원" description="가나다라" style={{letterSpacing: '0.1em'}} />
                        </Card>
                    </div>
                    <div className='museum_card_div' style={{marginTop: '100px'}}>
                        <Card
                            style={{
                                width: '300px',
                                height: '400px',
                                background: '#343434',
                                border: '1px solid #343434',
                                borderRadius: '10px',
                                boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                            }}
                            cover={
                                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width: '250px', height: '250px', margin: '1rem auto'}}/>
                            }
                        >
                            <Meta title="이준원" description="가나다라" style={{letterSpacing: '0.1em'}} />
                        </Card>
                    </div>
                    <div className='museum_card_div' style={{marginTop: '100px'}}>
                        <Card
                            style={{
                                width: '300px',
                                height: '400px',
                                background: '#343434',
                                border: '1px solid #343434',
                                borderRadius: '10px',
                                boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                            }}
                            cover={
                                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width: '250px', height: '250px', margin: '1rem auto'}}/>
                            }
                        >
                            <Meta title="이준원" description="가나다라" style={{letterSpacing: '0.1em'}} />
                        </Card>
                    </div>
                    <div className='museum_card_div' style={{marginTop: '100px'}}>
                        <Card
                            className='museum_card_card'
                            style={{
                                width: '300px',
                                height: '400px',
                                background: '#343434',
                                border: '1px solid #343434',
                                borderRadius: '10px',
                                boxShadow: '3px 3px 21px 5px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                            }}
                            cover={
                                <img className='museum_card_image' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width: '250px', height: '250px', margin: '1rem auto'}}/>
                            }
                        >
                            <Meta title="이준원" description="가나다라" style={{letterSpacing: '0.1em'}} />
                        </Card>
                    </div>
                </div>
                <div className='museum_more_button' style={{padding: '113px 0px 80px 0px', margin: '0px auto'}}>
                    <Button style={{width: '140px', height: '70px', backgroundColor: '#343434', borderRadius: '10px', boxShadow: '4px 8px 30px 5px rgba(0, 0, 0, 0.15)', border: '1px solid #343434'}}>
                        <p style={{color: '#CFCFCF', fontSize: '20px', letterSpacing: '0.1em', paddingTop: '20px'}}>more</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MuseumPage