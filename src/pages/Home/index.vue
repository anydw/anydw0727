<template>
  <div>
    <div>
      <van-search show-action label="地址" placeholder="请输入校区或地址">
        <template #action>
          <div><van-icon name="location-o" /></div>
        </template>
      </van-search>
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerlist" :key="item.id">
        <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
      </van-swipe-item>
    </van-swipe>

    <div>
      <van-grid>
        <van-grid-item icon="photo-o" text="整租" />
        <van-grid-item icon="photo-o" text="合租" />
        <van-grid-item icon="photo-o" text="地图找房" />
        <van-grid-item icon="photo-o" text="去出租" />
      </van-grid>
    </div>
    <!-- 底部数据 -->
    <div class="zong-list">
      <div class="title">
        <h3>租房小组</h3>
        <span>更多</span>
      </div>
      <div class="item-list">
        <div v-for="item in rentingList" :key="item.id">
          <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
          <h4>{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bannerListApi, rentingListApi } from "@/api";
export default {
  data() {
    return {
      bannerlist: [],
      rentingList: [],
    };
  },
  methods: {
    //轮播图数据
    async getBannerListApi() {
      try {
        const res = await bannerListApi({});
        this.bannerlist = res.data.body;
        // console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
    //租房小组数据
    async getRentingListApi() {
      try {
        const res = await rentingListApi({});
        console.log(res);
        this.rentingList = res.data.body;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.getBannerListApi();
    this.getRentingListApi();
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 200px;
}
.my-swipe img {
  width: 100%;
}
.zong-list{
  background-color: #eee;
}
.zong-list .title{
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.zong-list .title span{
  line-height: 50px;
}
.item-list{
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
</style>
