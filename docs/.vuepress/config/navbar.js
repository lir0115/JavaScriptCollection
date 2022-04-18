/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2022-04-09 23:17:29
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-18 23:23:20
 */
module.exports = [
  {
    text:'首页',
    link:'/'
  },
  {
    text: "前端【Web】",
    children: [{
      text: '基础入门',
      children: [{
        text: 'html相关',
        link: '/front_end/base_begin/html'
      }, {
        text: 'js相关',
        link: '/front_end/base_begin/javascript'
      }, {
        text: 'css相关',
        link: '/front_end/base_begin/css'
      }]
    }, {
      text: '前端框架',
      children: [{
        text: 'JQuery.js',
        link: '/front_end/front_framework/jquery'
      }, {
        text: 'Vue.js',
        link: '/front_end/front_framework/vue'
      },
      {
        text: 'Nuxt.js',
        link: '/css'
      }
      ]
    }, {
      text: 'UI框架',
      children: [{
        text: 'Bootstrap',
        link: '/html'
      }, {
        text: 'LayerUI',
        link: '/js'
      }, {
        text: 'iView-UI',
        link: '/css'
      }, {
        text: 'VantUI',
        link: '/css'
      }, {
        text: 'Element-UI',
        link: '/css'
      }, {
        text: 'Ant-design-vue',
        link: '/css'
      }]
    }, {
      text: '常见部署',
      children: [{
        text: '前端分离【nginx】',
        link: '/front_end/server_deploy/static_nginx'
      }, {
        text: '服务端渲染',
        link: '/front_end/server_deploy/front_end_server'
      }]
    }
    ]
  },
  {
    text: "后端【Node.js】",
    children: [{
      text: 'Node.js', link: '/server_end/node_learn',
    }, {
      text: 'TypeScript', link: '/server_end/ts_learn'
    },
    {
      text: '常用框架',
      children: [{
        text: 'Express和Koa', link: '/server_end/framework/express_koa_learn',
      },
      // {
      //   text: 'Koa', link: '/'
      // },
      {
        text: 'Egg.js', link: '/server_end/framework/egg_learn'
      },
      {
        text: 'Nest.js', link: '/server_end/framework/nest_learn'
      },
      {
        text: 'Midway', link: '/server_end/framework/midway_learn'
      }
      ]
    },
    {
      text: '数据库',
      children: [{
        text: 'Redis', link: '/server_end/database/redis',
      },
      {
        text: 'MySQL', link: '/server_end/database/mysql'
      },
      {
        text: 'Mongo', link: '/server_end/database/mongo'
      }]
    },
    {
      text: '消息中间件',
      children: [{
        text: 'RabbitMQ', link: '/mq',
      },
        // {
        //   text: 'Kafka', link: '/'
        // },
        // {
        //   text: 'RocketMQ', link: '/'
        // }
      ]
    },
    {
      text: '容器相关',
      children: [{
        text: 'Docker', link: '/',
      },
      {
        text: '', link: '/'
      },
      {
        text: '服务部署', link: '/'
      }]
    },
    {
      text: '测试',
      children: [{
        text: '校招', link: '/',
      },
      {
        text: '社招', link: '/'
      }]
    }
    ]
  },
  {
    text: "Solo算法",
    children: [{
      text: '刷题整理', link: '/solo_algorithm/question_collections'
    }, {
      text: '刷题平台',
      // C语言网(https://www.dotcpp.com)
      // 杭电OJ(http://acm.hdu.edu.cn/)
      children: [
        {
          text: '杭电OJ', link: 'http://acm.hdu.edu.cn/'
        },
        {
          text: '牛客网', link: 'https://www.nowcoder.com/'
        }, {
          text: 'LeetCode', link: 'https://leetcode-cn.com/'
        }
      ]
    },
      // {
      //   text: '刷题平台',
      //   children: [
      //     {
      //       text: '牛客网', link: 'https://www.nowcoder.com/'
      //     }, {
      //       text: 'LeetCode', link: 'https://leetcode-cn.com/'
      //     }
      //   ]
      // },
    ]
  },
  {
    text: "Battle面试官",
    children: [{
      text: '常见面试题',
      link: '/battle_interview/interview_problems'
    }, {
      text: '面经分享',
      link: '/battle_interview/introduce_share'
    }, {
      text: '工作机会',
      children: [{
        text: '校招', link: '/battle_interview/school_recruit',
      },
      {
        text: '社招', link: '/battle_interview/social_recruit'
      }]
    },
    {
      text: '小技巧',
      children: [{
        text: '校招', link: '/',
      },
      {
        text: '社招', link: '/'
      }]
    }]
  },
  {
    text: "读书整理",
    children: [
      {
        text: '技术类',
        children: [{
          text: 'ES6标准入门', link: '/school',
        },
        {
          text: '了不起的Node.js', link: '/'
        },
        {
          text: '深入浅出Node.js', link: '/go'
        }]
      },
      {
        text: '非技术类',
        children: [{
          text: '你好，孤独', link: '/',
        },
        {
          text: '测试', link: '/f111'
        }]
      }
    ]
  },
  // {
  //   text: '其他',
  //   children: [{
  //     text: '面试突击', link: '/',
  //   },
  //   {
  //     text: '日常学习', link: '/'
  //   },
  //   {
  //     text:'历史版本',link:'ddd'
  //   }
  // ]
  // },
  {
    text: '常用网站',
    children: [{
      text: '平台汇总', link: '/sum_links'
    }, {
      text: '技术文档',
      children: [{
        text: '百度', link: 'http://www.baidu.com'
      }]
    }]
  },
  // {
  //   text: '工作机会',
  //   link: '/2332323'
  // },
];