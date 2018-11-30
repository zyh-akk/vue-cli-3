<template>
  <div class="home">
    zyh
  </div>
</template>

<script>
import {appid} from '../../utils/config.js'

export default {
  name: 'Home',
  created(){
    let scope = 'snsapi_base'
    let query = location.search
    localStorage.openId = query
    let url = encodeURIComponent(location.origin + location.pathname)
    let redirectUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${url}&response_type=code&scope=${scope}&state=STATE#wechat_redirect`
    location.href = redirectUrl
  },
  mounted(){
    console.log('========')
  }
}
</script>
