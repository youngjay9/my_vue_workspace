<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change My Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- 傳送參數：myName 給 child component: UserDetail -->
                <app-user-detail v-bind:myName="myName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from "./UserDetail.vue";

    import UserEdit from "./UserEdit.vue";

    export default {
        data: function(){
            return {
                myName: 'Jay'
            }    
        },
        methods: {
            changeName: function(){
                this.myName = 'Ping';    
            }
        },
        // User component 裡面有 UserDetail、UserEdit component
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
            
    }
</script>