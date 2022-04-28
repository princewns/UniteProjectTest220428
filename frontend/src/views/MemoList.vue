<template>
    <div>
        <table>
            <tr>
                <td>번호</td>
                <td>제목</td>
            </tr>
            <tr v-for="(memo, i) in memo" :key="i">
                <td>{{memo.id}}</td>
                <td @click="$router.push(`/list/${memo.id}`)">{{memo.title}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return{
            memo : []
        }
    },
    created() {
        this.$http.get('/api/memo').then((response)=>{
            console.log(response.data);
            this.memo = response.data;
        });
    }
}
</script>