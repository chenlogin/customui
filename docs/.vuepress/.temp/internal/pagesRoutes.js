import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Hello VuePress"},["/index.html","/README.md"]],
  ["v-7664c5fa","/basic/",{"title":"basic"},["/basic/index.html","/basic/README.md"]],
  ["v-2f4362ad","/basic/button.html",{"title":""},["/basic/button","/basic/button.md"]],
  ["v-72f5dc77","/theme/default.html",{"title":"default theme"},["/theme/default","/theme/default.md"]],
  ["v-fffb8e28","/guide/",{"title":"页面的标题"},["/guide/index.html","/guide/README.md"]],
  ["v-e45cc9ec","/guide/install.html",{"title":"install"},["/guide/install","/guide/install.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
