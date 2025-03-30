# Project-Camping

**Project-Camping** เป็นระบบจองที่พักสำหรับแคมป์ปิ้ง โดยมีฟีเจอร์หลักในการเพิ่ม ลบ แก้ไขข้อมูลแคมป์ปิ้ง ระบบล็อกอิน, ระบบชำระเงิน, ตารางชำระเงิน และสามารถพิมพ์ใบเสร็จในรูปแบบ PDF

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/): JavaScript library for building user interfaces
  - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework
  - [DaisyUI](https://daisyui.com/): Tailwind CSS component library
  - [Clerk](https://clerk.dev/): User authentication and management
  - [Zod](https://github.com/colinhacks/zod): TypeScript-first schema validation
  
- **Backend:**
  - [Node.js](https://nodejs.org/): JavaScript runtime
  - [Express](https://expressjs.com/): Web framework for Node.js
  
- **Database:**
  - [Prisma](https://www.prisma.io/): ORM for Node.js and TypeScript
  - [MySQL](https://www.mysql.com/): Relational database management system

- **Payment:**
  - [Stripe](https://stripe.com/): Payment processing platform

- **State Management:**
  - [Zustand](https://github.com/pmndrs/zustand): State management for React

## Features

- **User Authentication:**
  - ระบบล็อกอินและลงทะเบียนผู้ใช้
  - รองรับการใช้งานด้วย [Clerk](https://clerk.dev/)

- **Camping Management:**
  - เพิ่ม ลบ แก้ไข ข้อมูลแคมป์ปิ้ง
  - แสดงข้อมูลแคมป์ปิ้งทั้งหมดในตาราง

- **Payment System:**
  - ระบบชำระเงินผ่าน [Stripe](https://stripe.com/)
  - รองรับการจ่ายผ่านบัตรเครดิต/เดบิต

- **Payment Schedule:**
  - ตารางแสดงรายการการชำระเงินที่ทำไปแล้ว
  - รองรับการตั้งเวลาและกำหนดวันชำระเงิน

- **PDF Receipt:**
  - สามารถพิมพ์ใบเสร็จการชำระเงินในรูปแบบ PDF

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/Project-Camping.git
   cd Project-Camping
