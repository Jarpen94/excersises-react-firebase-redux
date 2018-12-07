import React from 'react'

import Counter from './Counter'
import PassingProps from './PassingProps'
import FetchUsers from './FetchUsers'

export const routes = [
  {
    component: Counter,
    exact: true,
    path: '/',
    label: 'Home',
    key: '1234'
  },
  {
    component: Counter,
    path: '/counter',
    label: 'Counter',
    key: '23456'
  },
  {
    component: () => <Counter startValue={15} />,
    path: '/counter-with-start-value',
    label: 'Counter 15',
    key: '34567'
  },
  {
    component: PassingProps,
    path: '/passing-props',
    label: 'Passing Props',
    key: '45678'
  },
  {
    component: () => <Counter startValue={101} />,
    path: '/counter-with-101-value',
    label: 'Counter 101',
    key: '56789'
  },
  {
    component: FetchUsers,
    path: '/fetch-users',
    label: 'Fetch Users',
    key: '67890'
  },
]