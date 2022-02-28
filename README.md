# react-vk-auth-window

> Component React для авторизации в vk


## Getting Started

`yarn add react-vk-auth` or `npm i react-vk-auth`

## Пример использования готовой кнопки

```js
import React from 'react';
import VKAuthButton from 'react-vk-auth-window'

function App() {

  const testFun = (data) =>{
       console.log(data)
  }
  

  return(
      <div>
        <VKAuthButton vkId="#####" callBack={testFun} />
        <VKAuthButton vkId="#####" callBack={testFun} >Lorem text</VKAuthButton>
      </div>
  )
  
}

```

## Пример кнопки с возможной кастомизацией

```js
import React from 'react';
import {VKAuthButtonCustom} from 'react-vk-auth-window'

function App() {

  const testFun = (data) =>{
       console.log(data)
  }
  

  return(
      <div>
        <VKAuthButtonCustom vkId="#####" callBack={testFun}>
          <div>
            <button>213</button>
          </div>
        </VKAuthButtonCustom>
      </div>
  )
  
}

```

параметр `apiId` - токен для работы с приложениями <a href="https://vk.com/apps?act=manage">vk api</a> 
