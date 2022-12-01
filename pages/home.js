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