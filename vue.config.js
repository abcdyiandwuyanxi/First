module.exports ={
    devServer:{
        proxy:{
            '/api':{
 // 此处如果是https接口，需要配置secure参数，secure：false或者true
target:'https://getman.cn/mock',
// secure:'true'
changeOrigin:'true'
            }
        }
    }
}
// devServer作用：配置开发环境（后端服务器），proxy作用是反向代理
// 代理以ajax开头的请求，ajax这个name取自后端api服务器，
// 如猫眼电影的movieOnInfoList?token:Request URL为 https://m.maoyan.com/ajax/movieOnInfoList?token=...，ajax是虚拟目录名
// target，接口的域名；changeOrigin,是否跨域
// 反向代理的原理：（二手房东）反向代理拦截以ajax开头（租客）的请求，并把这些请求全部转向后端API服务器（房主），相当于反过来让你借用的那台服务器帮你干活
// Nginx是比较常用的反向代理服务器，可以实现动静分离的负载均衡，需要配置Nginx
// 正向代理的对象是客户端，反向代理的对象是服务端，正向代理隐藏真实客户端，反向代理隐藏真实服务器端

// ajax请求会涉及一个跨域访问问题
// module.exports提供了暴露接口的方法，声明这个模块对外暴露什么内容
// 跨域问题来源于JavaScript的同源策略，即只有 协议+主机名+端口号 (如存在)相同，则允许相互访问。也就是说JavaScript只能访问和操作自己域下的资源，不能访问和操作其他域下的资源。
// 跨域问题是针对JS和ajax的，html本身没有跨域问题，比如a标签、script标签、甚至form标签
