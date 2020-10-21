export const privateRouter = userRole => [
    {
        path: '/articles',
        exact: true,
        component: null,
        accessLevel: [1, 2, 3],
        children: []
    },
    {
        path: '/user',
        exact: true,
        component: null,
        children: []
    }
].filter(route => userRole ? route.accessLevel.includes(userRole) : true);

export const publicRouter = [
    {
        path: '/logIn',
        exact: true,
        component: null,
        accessLevel: [1, 2, 3],
    },
    {
        path: '/registration',
        exact: true,
        component : null,
        accessLevel: [1,2,3],
    },
    {
        path: '/registration',
        exact: true,
        component : null,
        accessLevel: [1,2,3],
    },{
        path: '/registration',
        exact: true,
        component : null,
        accessLevel: [1,2,3],
    },
];
