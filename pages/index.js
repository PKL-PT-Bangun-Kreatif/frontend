import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {Button, Checkbox, Form, Input} from 'antd'
import logo from '../public/logo.png'
import USER from '../public/USER.png'
import Footer from "../components/Footer";
import { useState } from "react";

const handleFinish=(data)=>{
  console.log(data)
}
const Login = function({setLogin}) {
  return(
    <>
  <div className={styles.Login}>
  <h2 style={{fontWeight:'bolder'}}>LOGIN</h2>
<Form style={{marginTop:'30px'}}>
   {/*EMAIL*/}
   <Form.Item
      //  placeholder="EMAIL"
       name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input style={{height:'34px'}}  placeholder="EMAIL" />

  </Form.Item>
      {/*PASSWORD*/}
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='PASSWORD'/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
    
      <Form.Item
        wrapperCol={{
          // offset: 8,
          span: 16,
        }}
      >
      <Button type='primary'>LOGIN</Button>
      </Form.Item>
      <Form.Item>
      <div className={styles.others}>
      <a>Anda Belum Punya Akun?</a>
      <a onClick={()=> setLogin(false)}>Register</a>
      </div>
      </Form.Item>
</Form>
</div>
</>
)
}
// REGISTER PAGE
const Register = function ({setLogin}) {
  return (
  <div className={styles.formreg}>
     <Form
     onFinish={handleFinish}
     autoComplete="off"></Form> 
    <Form style={{marginTop:'30px'}}></Form>
    <h2 style={{fontWeight:'bolder'}}>REGISTER</h2>
    <Form style={{marginTop:'30px'}}></Form>
    {/*EMAIL*/}
   <Form.Item
      //  placeholder="EMAIL"
       name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  placeholder="EMAIL" />

  </Form.Item>
      
      {/* PASSWORD */}
      <Form.Item
        name="Password"
        size="70px"
        rules={[
          {
            required: true,
            message: "please input your Password!",
          },
      
        ]}>
        <Input.Password placeholder='Password'/>
      </Form.Item>
     
      {/*USERNAME*/}
   <Form.Item
      //  placeholder="USERNAME"
       name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  placeholder="USERNAME" />

  </Form.Item>
      <Form.Item>
      <Button type='primary'>DAFTAR</Button>
      </Form.Item>
      <Form.Item>
        <a>Anda Sudah Punya Akun?</a>
      <a onClick={()=> setLogin(true)}>Login</a>
      </Form.Item>
    
    </div>    
  );    
;}    

const Home =()=>{
  const [isLogin,setLogin] = useState(true)
  return (
    <>
  <Head>
    <title>Booking Lapangan</title>
  </Head>
  <div className={styles.wrapper}>
  <div className={styles.title}></div>
  <nav className={styles.nav}>
    <div>
      <Image 
      src={logo}
      width={80}
      height={20}/>
    </div>
    <div>
    <Image 
    src={USER}
    width={30}
    height={20}
    />
    </div>
    </nav>
  <div className={styles.container}>
    <div className={styles.image}>
    <Image 
    src={logo}
    width={219}
    height={60}
    />
    </div>
    <Form.Item>
      {isLogin?<Login setLogin={setLogin}/>:<Register setLogin={setLogin}/>}
    <div className={styles.others}>
      {/* <a>Anda Belum Punya Akun?</a> */}
      {/* <a onClick={()=> setLogin(false)}>Register</a> */}
      </div> 
      </Form.Item>
    </div>
  </div>
  <Footer/>
</>)}
export default Home;
