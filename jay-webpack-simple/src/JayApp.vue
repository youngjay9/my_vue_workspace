<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <app-uploadFile></app-uploadFile>
            </div>
        </div>
    </div>
</template>

<script>
    import User from "./components/User.vue";
    import UploadFile from "./components/UploadFile.vue"
    
    //import User component
    export default{
        components: {
            appUser: User,
            appUploadFile: UploadFile
        }
    }

</script>



