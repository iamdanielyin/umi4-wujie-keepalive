export default {

    // 返回值可以是数组形式
    'GET /api/menus': [
        { id: 1, name: 'HOME', url: '/home' },
        { id: 2, name: 'DOCS', url: '/docs' },
        { id: 101, name: 'SUB-HOME', url: '/home', subAppCode: 'sub-app-react', subAppHost: 'http://localhost:7070' },
        { id: 102, name: 'SUB-DOCS', url: '/docs', subAppCode: 'sub-app-react', subAppHost: 'http://localhost:7070' }
    ],

}
