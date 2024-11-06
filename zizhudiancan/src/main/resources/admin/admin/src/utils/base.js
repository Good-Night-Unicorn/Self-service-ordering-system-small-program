const base = {
    get() {
        return {
            url : "http://localhost:8080/zizhudiancan/",
            name: "zizhudiancan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zizhudiancan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "自助点餐系统"
        } 
    }
}
export default base
