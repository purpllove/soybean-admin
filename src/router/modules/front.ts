const front: AuthRoute.Route = {
  name: 'front',
  path: '/front',
  component: 'basic',
  children: [
    {
      name: 'front_page',
      path: '/front/page',
      component: 'self',
      meta: {
        title: '图表',
        i18nTitle: 'routes.front.page',
        icon: 'mdi:chart-areaspline'
      }
    }
  ],
  meta: {
    title: '网页',
    i18nTitle: 'routes.front._value',
    icon: 'clarity:plugin-line',
    order: 4
  }
};

export default front;
