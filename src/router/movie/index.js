export default{
    path:"/movie",//路径
    component : () => import('@/views/Movie'),//按需载入组件
    // 这里的path：city或nowPlaying等在views-movie-index.vue里被router-link用到
    children :[
        {
            path:'city',
            component : () => import('@/components/City')
        },
        {
            path:'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path:'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path:'search',
            component : () => import('@/components/Search')
        },
        {
            path: '/movie',
            redirect: '/movie/nowPlaying'
        }
           
    ]
}