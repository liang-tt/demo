<template>
  <div>
    <div style="margin-bottom: 20px">
      <el-upload ref="upload" list-type="picture-card" :multiple="true" action="" :auto-upload="false" :http-request="upload" :file-list="fileLists" :on-change="onChange" :on-success="onSuccess" :on-error="onError">
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <el-button type="primary" @click="submit"><i class="iconfont icon-up-load"></i>上传</el-button>

  </div>
</template>

<script>
    export default {
      name: "attatch",
      data () {
        return {
          now : Date.parse(new Date()) / 1000,
          timestamp : Date.parse(new Date()) / 1000,
          fileLists: [],
          host : "",
          policyBase64 : "",
          accessid : "",
          signature : "",
          expire : 0,
          callbackbody : "",
          key : "",
          request:""
        }
      },
      created () {
      },
      methods: {
        onChange (file, fileList) {
          console.log(fileList)
        },
        onSuccess (response, file, fileList){
          console.log(12)
        },
        onError (err, file, fileList) {
             console.log(3333)
        },
        submit () {
          this.$refs.upload.submit();
        },
        //提交方法
        upload (item) {
          // this.getToken(item.file)
          this.get_signature(item.file);

        },
        //获取认证信息
        getToken (file) {
          console.log(file)
          this.axios.defaults.headers.token = "eyJhbGciOiJIUzUxMiJ9.eyJjcmVhdGVkIjoxNTI4MTc3NTY5MDMyLCJleHAiOjE1Mjg3ODIzNjksInVzZXJuYW1lIjoibGFuY2UifQ.JgqlM_6wyrmpYO7xTa5xJqJEyIfOBj1iDW97FRYjrygZsRBolGSZXZTdbHG4NR3ckBctHLlJvOWKJuxVSmgq6g";
          this.axios({
            method: "post",
            baseURL: "",
            url: "common/getOSSToken"
          }).then(data => {
            /*if(data.status) {
              return data.data;
            }*/

            // let obj = eval("(" + data.data + ")");
            let obj = data.data;
            this.host = obj['host']
            this.policyBase64 = obj['policy']
            this.accessid = obj['accessid']
            this.signature = obj['signature']
            this.expire = parseInt(obj['expire'])
            this.callbackbody = obj['callback']
            this.key = obj['dir']

            var suffix = this.get_suffix(file.name)
            this.g_object_name = this.key + this.random_string(10) + suffix


            //组装发送数据
            this.request = new FormData();
            this.request.append("OSSAccessKeyId", this.accessid);//Bucket 拥有者的Access Key Id。
            this.request.append("policy", this.policyBase64);//policy规定了请求的表单域的合法性
            this.request.append("Signature", this.signature);//根据Access Key Secret和policy计算的签名信息,OSS验证该签名信息从而验证该Post请求的合法性

            this.request.append("key",this.g_object_name);//文件名字,可设置路径
            this.request.append("success_action_status",'200');// 让服务端返回200,不然,默认会返回204
            this.request.append('file', file);//需要上传的文件 file

            this.request.append("callback",this.callbackbody);//回调,可有可无

            // this.axios.defaults.headers.token = "eyJhbGciOiJIUzUxMiJ9.eyJjcmVhdGVkIjoxNTI4MTc3NTY5MDMyLCJleHAiOjE1Mjg3ODIzNjksInVzZXJuYW1lIjoibGFuY2UifQ.JgqlM_6wyrmpYO7xTa5xJqJEyIfOBj1iDW97FRYjrygZsRBolGSZXZTdbHG4NR3ckBctHLlJvOWKJuxVSmgq6g";
            this.axios({
              method: "post",
              // baseURL: "",
              url: this.host,
              data: this.request
            }).then(data => {
              console.log(data)
              console.log("地址"+this.g_object_name)
            }).catch(res => {

            })

          })
        },
        get_signature (file) {
          //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
          this.now = this.timestamp = Date.parse(new Date()) / 1000;
          // if (this.expire < this.now + 3) {
            console.log(this.expire)
            this.getToken(file);

          /*}else{
            this.axios({
              method: "post",
              // baseURL: "http://t.zuul.xinchao.mobi/crm/api/",
              url: this.host,
              data: this.request
            }).then(data => {
              console.log(data)
            }).catch(res => {

            })

          }*/


        },
        random_string (len) {
          len = len || 32;
          var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
          var maxPos = chars.length;
          var pwd = '';
          for (var i = 0; i < len; i++) {
            pwd += chars.charAt(Math.floor(Math.random() * maxPos));
          }
          return pwd;
        },

        get_suffix (filename) {
          var pos = filename.lastIndexOf('.')
          var suffix = ''
          if (pos != -1) {
            suffix = filename.substring(pos)
          }
          return suffix;
        },
      }
    }
</script>

<style scoped lang="scss">
  /*@import url('//at.alicdn.com/t/font_744796_hocpf2ccgco.css');*/
</style>
