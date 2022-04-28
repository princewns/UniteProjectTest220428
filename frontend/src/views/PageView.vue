<template>
    <div>
        <h2>{{memo.title}}</h2>
        <p>{{memo.memo}}</p>
        <p>작성자 : {{memo.writer}}</p>
    </div>
</template>
<script>
export default {
    created() {
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response)=>{
            this.memo = response.data;
        });
    },
    data() {
        return {
            memo : {}
        }
    }
}
</script>