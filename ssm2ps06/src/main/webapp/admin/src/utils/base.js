const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm2ps06/",
            name: "ssm2ps06",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm2ps06/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "校园超市销售设计"
        } 
    }
}
export default base
