export default {

    // 返回值可以是数组形式
    'GET /api/menus': [
        { id: 1, name: 'HOME', url: '/home' },
        { id: 2, name: 'DOCS', url: '/docs' },
        { id: 11, name: 'APP1-HOME', url: '/home', subAppCode: 'sub-app1', subAppHost: 'http://localhost:7071' },
        { id: 12, name: 'APP1-DOCS', url: '/docs', subAppCode: 'sub-app1', subAppHost: 'http://localhost:7071' },
        { id: 21, name: 'APP2-HOME', url: '/home', subAppCode: 'sub-app2', subAppHost: 'http://localhost:7072' },
        { id: 22, name: 'APP2-DOCS', url: '/docs', subAppCode: 'sub-app2', subAppHost: 'http://localhost:7072' }
    ],

    // 返回值可以是数组形式
    'GET /api/users': [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' }
    ],

    // 返回值也可以是对象形式
    'GET /api/users/1': { id: 1, name: 'foo' },

}
