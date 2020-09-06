<template>
    <div class="component">
         <h1>The UploadFile Component</h1>
         <label>
             執行動作
             <select v-model="bindingCheckInfoAction">
                <option disabled value="">請選擇</option>
                <option>add</option>
                <option>update</option>                
            </select>
            <input type="file" id="checkInfoFile" ref="checkInfoFile" v-on:change="handleFileUpload()"/>
         </label>
          <label>
              add、update 檔案格式:
              {
                channelId: CPC,
                startDate: 2020/10/23 00:00:00,
                endDate: 2020/10/31 23:59:59,
                openFlag: 1,
                afinityCodes: 8515,
                idNoList:[F126257786]	
              }
              
              <br/>
              <button v-on:click="uploadCheckInfoFile()">上傳檔案</button>
          </label>
        
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function(){
            return {
                bindingCheckInfoAction: '',
                checkInfoFile:''
            }
        },
        methods: {
            handleFileUpload() {
                this.checkInfoFile = this.$refs.checkInfoFile.files[0];
            },
            uploadCheckInfoFile() {
                if(this.bindingCheckInfoAction == ''){
                     alert('請選擇執行動作!!');
                     return;
                }

                let checkInfoUploadUrl = 'http://localhost:10021/bindingCard/addingCheckInfo';
                if(this.bindingCheckInfoAction == 'update'){
                    checkInfoUploadUrl = 'http://localhost:10021/bindingCard/updatingCheckInfo';
                }

                
                let formData = new FormData();
                
                formData.append('file', this.checkInfoFile);
                
                axios.post(checkInfoUploadUrl,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(res){
                    console.log('SUCCESS!!');
                })
                .catch(function(res){
                    console.log('res error:'+res);
                });
            }
        }
    }
</script>