import React from 'react'
import ReactDOM from 'react-dom'
import Icon from "./icon/icon";

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target)
}

ReactDOM.render(<div>
    <Icon name='wechat'
          onMouseEnter={() => { console.log('enter') }}
          onClick={fn}
    />
    <Icon name='alipay'/>
</div>, document.getElementById('root'))

