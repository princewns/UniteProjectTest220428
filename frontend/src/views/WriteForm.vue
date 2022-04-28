<template>
    <div>
        <label>제목 : </label><input type="text" v-model="title"><br>
        <label>내용 : </label><textarea cols="30" rows="10" v-model="memo"></textarea><br>
        <label>작성자 : </label><input type="text" v-model="writer"><br>
        <button @click="addmemo">전송</button>
    </div>
</template>
<script>
export default {
    data() {
        return{
            title : '',
            memo : '',
            writer : ''
        }
    },
    methods : {
        addmemo() {
            this.$http.post('/api/memo', {
                data : {
                    title : this.title,
                    memo : this.memo,
                    writer : this.writer
                }
            }).then((response)=> console.log(response.data));
            this.$router.push('/')
        }
    }
}
</script>