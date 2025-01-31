let baseUrl = ''

switch (process.env.VUE_APP_ENV) {
    case 'serve':
        //开发环境url
        // baseUrl = "https://vervet-closing-swan.ngrok-free.app"
        // baseUrl = "https://welcomed-guiding-hippo.ngrok-free.app"
        baseUrl = "http://localhost:8085"
        break
    case 'built':
        baseUrl = "http://localhost:8085/"   //生产环境url
        break
}

export default baseUrl;