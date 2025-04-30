import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenuItem, Route } from './entities/menu.entity';

@Injectable()
export class MenuService {
  /**
   *  获取用户菜单
   *
   * @param userId 用户ID
   */
  getRoutes(userId: string) {
    // const menuIds: string[] = await this.userService.getUserMenuIds(userId);
    // const menus: any = await this.menuModel
    //   .find({ _id: { $in: menuIds }, type: { $ne: 3 } }) // 排除按钮
    //   .sort({ sort: 'asc' })
    //   .exec();

    return [
      // {
      //   path: '/system',
      //   component: 'Layout',
      //   redirect: '/system/user',
      //   name: '/system',
      //   meta: {
      //     title: '系统管理',
      //     icon: 'system',
      //     hidden: false,
      //     alwaysShow: false,
      //     params: null,
      //   },
      //   children: [
      //     {
      //       path: 'user',
      //       component: 'system/user/index',
      //       name: 'User',
      //       meta: {
      //         title: '用户管理',
      //         icon: 'el-icon-User',
      //         hidden: false,
      //         keepAlive: true,
      //         alwaysShow: false,
      //         params: null,
      //       },
      //     },
      //     {
      //       path: 'role',
      //       component: 'system/role/index',
      //       name: 'Role',
      //       meta: {
      //         title: '角色管理',
      //         icon: 'role',
      //         hidden: false,
      //         keepAlive: true,
      //         alwaysShow: false,
      //         params: null,
      //       },
      //     },
      //     {
      //       path: 'menu',
      //       component: 'system/menu/index',
      //       name: 'SysMenu',
      //       meta: {
      //         title: '菜单管理',
      //         icon: 'menu',
      //         hidden: false,
      //         keepAlive: true,
      //         alwaysShow: false,
      //         params: null,
      //       },
      //     },
      //     {
      //       path: 'dept',
      //       component: 'system/dept/index',
      //       name: 'Dept',
      //       meta: {
      //         title: '部门管理',
      //         icon: 'tree',
      //         hidden: false,
      //         keepAlive: true,
      //         alwaysShow: false,
      //         params: null,
      //       },
      //     },
      //     {
      //       path: 'dict',
      //       component: 'system/dict/index',
      //       name: 'Dict',
      //       meta: {
      //         title: '字典管理',
      //         icon: 'dict',
      //         hidden: false,
      //         keepAlive: true,
      //         alwaysShow: false,
      //         params: null,
      //       },
      //     },
      //     {
      //       path: 'log',
      //       component: 'system/log/index',
      //       name: 'Log',
      //       meta: {
      //         title: '系统日志',
      //         icon: 'document',
      //         hidden: false,
      //         keepAlive: true,
      //         alwaysShow: false,
      //         params: null,
      //       },
      //     },
      //     {
      //       path: 'dict-item',
      //       component: 'system/dict/dict-item',
      //       name: 'DictItem',
      //       meta: {
      //         title: '字典项',
      //         icon: '',
      //         hidden: true,
      //         keepAlive: true,
      //         alwaysShow: false,
      //         params: null,
      //       },
      //     },
      //     {
      //       path: 'config',
      //       component: 'system/config/index',
      //       name: 'Config',
      //       meta: {
      //         title: '系统配置',
      //         icon: 'setting',
      //         hidden: false,
      //         keepAlive: true,
      //         alwaysShow: false,
      //         params: null,
      //       },
      //     },
      //     {
      //       path: 'notice',
      //       component: 'system/notice/index',
      //       name: 'Notice',
      //       meta: {
      //         title: '通知公告',
      //         icon: '',
      //         hidden: false,
      //         alwaysShow: false,
      //         params: null,
      //       },
      //     },
      //   ],
      // },
      // {
      //   path: '/multi-level',
      //   component: 'Layout',
      //   name: '/multiLevel',
      //   meta: {
      //     title: '多级菜单',
      //     icon: 'cascader',
      //     hidden: false,
      //     alwaysShow: true,
      //     params: null,
      //   },
      //   children: [
      //     {
      //       path: 'multi-level1',
      //       component: 'demo/multi-level/level1',
      //       name: 'MultiLevel1',
      //       meta: {
      //         title: '菜单一级',
      //         icon: '',
      //         hidden: false,
      //         alwaysShow: true,
      //         params: null,
      //       },
      //       children: [
      //         {
      //           path: 'multi-level2',
      //           component: 'demo/multi-level/children/level2',
      //           name: 'MultiLevel2',
      //           meta: {
      //             title: '菜单二级',
      //             icon: '',
      //             hidden: false,
      //             alwaysShow: false,
      //             params: null,
      //           },
      //           children: [
      //             {
      //               path: 'multi-level3-1',
      //               component: 'demo/multi-level/children/children/level3-1',
      //               name: 'MultiLevel31',
      //               meta: {
      //                 title: '菜单三级-1',
      //                 icon: '',
      //                 hidden: false,
      //                 keepAlive: true,
      //                 alwaysShow: false,
      //                 params: null,
      //               },
      //             },
      //             {
      //               path: 'multi-level3-2',
      //               component: 'demo/multi-level/children/children/level3-2',
      //               name: 'MultiLevel32',
      //               meta: {
      //                 title: '菜单三级-2',
      //                 icon: '',
      //                 hidden: false,
      //                 keepAlive: true,
      //                 alwaysShow: false,
      //                 params: null,
      //               },
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        path: '/component',
        component: 'Layout',
        name: '/component',
        meta: {
          title: '组件封装',
          icon: 'menu',
          hidden: false,
          alwaysShow: false,
          params: null,
        },
        children: [
          {
            path: 'curd',
            component: 'demo/curd/index',
            name: 'Curd',
            meta: {
              title: '增删改查',
              icon: '',
              hidden: false,
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
          {
            path: 'table-select',
            component: 'demo/table-select/index',
            name: 'TableSelect',
            meta: {
              title: '列表选择器',
              icon: '',
              hidden: false,
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
          {
            path: 'wang-editor',
            component: 'demo/wang-editor',
            name: 'WangEditor',
            meta: {
              title: '富文本编辑器',
              icon: '',
              hidden: false,
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
          {
            path: 'upload',
            component: 'demo/upload',
            name: 'Upload',
            meta: {
              title: '图片上传',
              icon: '',
              hidden: false,
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
          {
            path: 'dict-demo',
            component: 'demo/dictionary',
            name: 'DictDemo',
            meta: {
              title: '字典组件',
              icon: '',
              hidden: false,
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
          {
            path: 'icon-selector',
            component: 'demo/icon-selector',
            name: 'IconSelector',
            meta: {
              title: '图标选择器',
              icon: '',
              hidden: false,
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
        ],
      },
      {
        path: '/route-param',
        component: 'Layout',
        name: '/routeParam',
        meta: {
          title: '路由参数',
          icon: 'el-icon-ElementPlus',
          hidden: false,
          alwaysShow: true,
          params: null,
        },
        children: [
          {
            path: 'route-param-type1',
            component: 'demo/route-param',
            name: 'RouteParamType1',
            meta: {
              title: '参数(type=1)',
              icon: 'el-icon-Star',
              hidden: false,
              keepAlive: true,
              alwaysShow: false,
              params: {
                type: '1',
              },
            },
          },
          {
            path: 'route-param-type2',
            component: 'demo/route-param',
            name: 'RouteParamType2',
            meta: {
              title: '参数(type=2)',
              icon: 'el-icon-StarFilled',
              hidden: false,
              keepAlive: true,
              alwaysShow: false,
              params: {
                type: '2',
              },
            },
          },
        ],
      },
      {
        path: '/function',
        component: 'Layout',
        name: '/function',
        meta: {
          title: '功能演示',
          icon: 'menu',
          hidden: false,
          alwaysShow: false,
          params: null,
        },
        children: [
          {
            path: 'icon-demo',
            component: 'demo/icons',
            name: 'IconDemo',
            meta: {
              title: 'Icons',
              icon: 'el-icon-Notification',
              hidden: false,
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
          {
            path: '/function/websocket',
            component: 'demo/websocket',
            name: '/function/websocket',
            meta: {
              title: 'Websocket',
              icon: '',
              hidden: false,
              keepAlive: true,
              alwaysShow: false,
              params: null,
            },
          },
          {
            path: 'other/:id',
            component: 'demo/other',
            name: 'Other/:id',
            meta: {
              title: '敬请期待...',
              icon: '',
              hidden: false,
              alwaysShow: false,
              params: null,
            },
          },
        ],
      },
    ];
  }

  /**
   * 构建菜单路由
   *
   * @param data 菜单数据
   * @param parentId 父菜单ID
   * @returns
   */
  private buildRoutes(data: MenuItem[], parentId: string = '0'): Route[] {
    return data
      .filter((item) => item.parentId === parentId)
      .map((item) => {
        const route: Route = {
          path: item.routePath,
          component: item.component || 'Layout',
          name: item.routeName || item.name,
          meta: {
            title: item.name,
            icon: item.icon || 'el-icon-ElementPlus',
            hidden: item.visible === 0,
            alwaysShow: item.alwaysShow === 1,
            keepAlive: item.keepAlive === 1,
            params:
              item.params && item.params.length > 0
                ? Object.fromEntries(
                    item.params.map((param) => [param.key, param.value]),
                  )
                : null,
          },
          children: this.buildRoutes(data, item.id),
        };

        if (route.children && route.children.length === 0) {
          delete route.children;
        }

        return route;
      });
  }
}
