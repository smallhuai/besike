import { Button } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';

import swiper from "@/components/commonTemp/swiper"
// 引入底部滑动组件
import { Tabbar, TabItem } from 'mint-ui';
// 引入底部固定导航组件
import { Toast } from 'mint-ui';
// 引入商品详情页组件
import goodlistDetail from '@/components/main/goodlistDetail'
export default (Vue) => {
     Vue.component("mint_btn", Button);
     Vue.component(Swipe.name, Swipe);
     Vue.component(SwipeItem.name, SwipeItem);
     Vue.component("swiper", swiper)
     Vue.component(Tabbar.name, Tabbar);
     Vue.component(TabItem.name, TabItem);
     Vue.component("goodlistDetail",goodlistDetail)
}