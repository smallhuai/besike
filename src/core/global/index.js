class Global {
  getParam() {
    //将url后面的参数 ?name=msea&sex=1  >{name:"msea",sex:1}
    var search = {};
    try {
      location.search
        .substr(1)
        .split('&')
        .forEach(function (item) {
          var s = item.split('=');
          search[s[0]] = s[1];
        });
    } catch (e) {
      // 抛出异常
      throw new Error(JSON.stringify(search));
    }
    return search;
  }
  geturl(items) {
    //  图片的路径 SupplyNo为 NS : ns.jpg SupplyNo KSK的为 :jd.png SupplyNo RP :rp.jp
    let imgurl = "";
    if (items.SupplyNo.indexOf("KSK") != -1) {
      imgurl = `https://res.bestcake.com/m-images/ww/jd/${items.Name}.png`;
    } else if (items.SupplyNo.indexOf("NS") != -1) {
      imgurl = `https://res.bestcake.com/m-images/ww/ns/${items.Name}.jpg`;
    } else if (items.SupplyNo.indexOf("RP") != -1) {
      imgurl = `https://res.bestcake.com/m-images/ww/rp/${items.Name}.jpg`;
    } else if (items.SupplyNo.indexOf("JZ") != -1) {
      imgurl = `https://res.bestcake.com/m-images/ww/jz/${items.Name}.png`;
    }
    return imgurl;
  }
  //商品详情页传入路由参数,获取轮播图片数组
  getimg(routeData) {
    let path = "https://res.bestcake.com/m-images/";
    let ImgUrl = "";
    let ImgList = [];
    //经典系列的轮播图片路径
    if (routeData.SupplyNo.indexOf("KSK") != -1) {
      ImgUrl = `${path}jd-detail/${routeData.Name}/${routeData.Name}-`;
      for (let i = 1; i < 5; i++) {
        ImgList.push(ImgUrl + i + ".jpg");
      }
      return ImgList;
    }
    //女神系列的轮播图片路径
    else if (routeData.SupplyNo.indexOf("NS") != -1) {
      ImgUrl = `${path}ns-detail/${routeData.Name}/${routeData.Name}-`;
      for (let i = 1; i < 5; i++) {
        ImgList.push(ImgUrl + i + ".jpg");
      }
      return ImgList;
    }
    //拌手礼系列的轮播图片路径
    else if (routeData.SupplyNo.indexOf("JZ") != -1) {
      ImgUrl = `${path}jz-detail/${routeData.Name}/${routeData.Name}-`;
      for (let i = 1; i < 5; i++) {
        ImgList.push(ImgUrl + i + ".jpg");
      }
      return ImgList;
    }
    //乳品系列的轮播图片路径
    else if (routeData.SupplyNo.indexOf("RP") != -1) {
      ImgUrl = `${path}rp-detail/${routeData.Name}/${routeData.Name}-`;
      for (let i = 1; i < 5; i++) {
        ImgList.push(ImgUrl + i + ".jpg");
      }
      return ImgList;
    }
  }
}
export default new Global();