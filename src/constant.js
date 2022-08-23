export default {
    install: (app) => {
        // 全局引入工具
        app.config.globalProperties._ymdhms = 'YYYY-MM-DD HH:mm:ss'
    }
}