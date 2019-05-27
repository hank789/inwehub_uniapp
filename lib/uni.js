function getLocation () {
  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      console.log('当前位置的经度：' + res.longitude);
      console.log('当前位置的纬度：' + res.latitude);
    }
  });
}

export default {
  getLocation
}