<style scoped>
  /*清除样式*/
  div, ul, li, p, span, a, i {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mui-content {
    background: #FFFFFF;
  }

  .Invitation_t {
    width: 100%;
    /*height:643.96upx;*/
    background: #FFFFFF url("../../statics/images/invitation-bg@2x.png") no-repeat;
    background-size: 100% 90%;
    position: relative;
  }

  .Invitation_img {
    width: 95%;
    /*height:540upx;*/
    position: absolute;
    bottom: 0upx;
    left: 0;
    right: 0;
    margin: auto;
    animation: mymove 1s infinite;
    -moz-animation: mymove 1s infinite; /* Firefox */
    -webkit-animation: mymove 1s infinite; /* Safari and Chrome */
    -o-animation: mymove 1s infinite; /* Opera */
    animation-direction: alternate;
    -webkit-animation-direction: alternate;
  }

  @keyframes mymove {
    0% {
      bottom: 0upx;
    }
    50% {
      bottom: 9.98upx;
    }
    100% {
      bottom: 0upx;
    }
  }

  @-moz-keyframes mymove /* Firefox */
  {
    0% {
      bottom: 0upx;
    }
    50% {
      bottom: 9.98upx;
    }
    100% {
      bottom: 0upx;
    }
  }

  @-webkit-keyframes mymove /* Safari and Chrome */
  {
    0% {
      bottom: 0upx;
    }
    50% {
      bottom: 9.98upx;
    }
    100% {
      bottom: 0upx;
    }
  }

  @-o-keyframes mymove /* Opera */
  {
    0% {
      bottom: 0upx;
    }
    50% {
      bottom: 9.98upx;
    }
    100% {
      bottom: 0upx;
    }
  }

  /*　邀请成功的信息部分*/
  .invitation-information {
    width: 100%;
    height: 177.0upx;
    /*border: 1.96upx solid #cccccc;*/
    background: #FFFFFF;
    margin:19.96upx 0;
    padding: 0upx 49.96upx;
  }

  .invitation-information li:nth-of-type(1) {
    /*width: 42%;*/
    height: 100%;
    float: left;
    background: url("../../statics/images/invitationNumber@3x.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
  }

  .invitation-information li:nth-of-type(2) {
    /*width: 36%;*/
    height: 100%;
    float: right;

    background: url("../../statics/images/rewardNumber@3x.png") no-repeat;
    background-size: 100% 100%;
  }

  .invitation-information li p:nth-of-type(1) {
    font-size: 30upx;
    color: #444444;
    margin-top: 43.96upx;
    text-align: center;
  }

  .invitation-information li p:nth-of-type(2) {
    font-size: 27.98upx;
    color: #808080;
    text-align: center;
  }

  .invitation-information li span {
    font-size: 25.96upx;
    color: #FFFFFF;
    position: absolute;
    right: 0;
    right: 5%;
    top: 23%;

  }

  /*呼朋唤友*/

  .contactFriends {
    width: 95%;
    height: 169.96upx;
    margin-left: 2.5%;
    margin-top: 79.96upx;
    position: relative;
  }
  .contactFriends:after{
    border-radius:169.96upx;
  }

  .contactFriends span {
    display: block;
    text-align: center;
    font-size: 27.98upx;

  }

  .contactFriends span:nth-of-type(1) {
    color: #444444;
    padding-top: 57.0upx;
  }

  .contactFriends span:nth-of-type(2) {
    color: #03aef9;
    margin-top: 7.96upx;
  }
  .contactFriends span:nth-of-type(3) {
    color: #444444;
    margin-top: 27.98upx;
  }
  .contactFriends span:nth-of-type(5) {
    color: #808080;
    margin-top: 7.96upx;
    margin-bottom: 24upx;
  }
  .contactFriends span:nth-of-type(5) i{
    font-style: normal;
    color: #03aef9;
  }
  .contactFriends .luckDraw{
    width:123.98upx;
    height:54upx;
    background: #dcdcdc;
    border-radius: 99.98upx;
    text-align: center;
    line-height: 54upx;
    margin: 0 auto;
    font-size:27.98upx;
    color: #b4b4b6;
  }
  .luckDraw.red{
    background: #fa4975;
    color: #ffffff;
  }
  .contactBtn {
    position: absolute;
    width: 300upx;
    height: 105.98upx;
    top: -60upx;
    left: 0;
    right: 0;
    margin: auto

  }

  /*动画效果*/
  .contactBtn p {
    width: 100%;
    height: 100%;
    background: #03aef9;
    border-radius: 99.98upx;
    text-align: center;
    line-height: 105.98upx;
    color: #FFFFFF;
    font-size: 36upx;
    font-weight: 500;
    z-index: 999;
    position: absolute;
    animation: myrotate  1s infinite;
    -moz-animation: myrotate 1s infinite; /* Firefox */
    -webkit-animation: myrotate  1s infinite; /* Safari and Chrome */
    -o-animation: myrotate  1s infinite; /* Opera */
    animation-direction: alternate;
    -webkit-animation-direction: alternate;

  }

  @keyframes myrotate
  {
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg); /* IE 9 */
    -moz-transform: rotate(0deg); /* Firefox */
    -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
    -o-transform: rotate(0deg);
  }
  50% {
    transform: rotate(3deg);
    -ms-transform: rotate(3deg); /* IE 9 */
    -moz-transform: rotate(3deg); /* Firefox */
    -webkit-transform: rotate(3deg); /* Safari 和 Chrome */
    -o-transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg); /* IE 9 */
    -moz-transform: rotate(0deg); /* Firefox */
    -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
    -o-transform: rotate(0deg);
  }
  }

  @-moz-keyframes myrotate /* Firefox */
  {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg); /* IE 9 */
      -moz-transform: rotate(0deg); /* Firefox */
      -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
      -o-transform: rotate(0deg);
    }
    50% {
      transform: rotate(3deg);
      -ms-transform: rotate(3deg); /* IE 9 */
      -moz-transform: rotate(3deg); /* Firefox */
      -webkit-transform: rotate(3deg); /* Safari 和 Chrome */
      -o-transform: rotate(3deg);
    }
    100% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg); /* IE 9 */
      -moz-transform: rotate(0deg); /* Firefox */
      -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
      -o-transform: rotate(0deg);
    }
  }

  @-webkit-keyframes myrotate /* Safari and Chrome */
  {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg); /* IE 9 */
      -moz-transform: rotate(0deg); /* Firefox */
      -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
      -o-transform: rotate(0deg);
    }
    50% {
      transform: rotate(3deg);
      -ms-transform: rotate(3deg); /* IE 9 */
      -moz-transform: rotate(3deg); /* Firefox */
      -webkit-transform: rotate(3deg); /* Safari 和 Chrome */
      -o-transform: rotate(3deg);
    }
    100% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg); /* IE 9 */
      -moz-transform: rotate(0deg); /* Firefox */
      -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
      -o-transform: rotate(0deg);
    }
  }


  @-o-keyframes myrotate /* Opera */
  {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg); /* IE 9 */
      -moz-transform: rotate(0deg); /* Firefox */
      -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
      -o-transform: rotate(0deg);
    }
    50% {
      transform: rotate(5deg);
      -ms-transform: rotate(5deg); /* IE 9 */
      -moz-transform: rotate(5deg); /* Firefox */
      -webkit-transform: rotate(5deg); /* Safari 和 Chrome */
      -o-transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg); /* IE 9 */
      -moz-transform: rotate(0deg); /* Firefox */
      -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
      -o-transform: rotate(0deg);
    }
  }



  .contactBtn img {
    width: 81.98upx;
    height: 57.98upx;
    position: absolute;
    left: -30upx;
    top: 45.98upx;
  }

  /*邀请说明*/
  .invitationNote {
    margin-top: 40.96upx;
    margin-bottom: 57.98upx;
    text-align: center;
    overflow: hidden;
  }

  .invitationNote p:nth-of-type(1) {
    font-size: 31.96upx;
    color: #444444;

  }

  .invitationNote p:nth-of-type(2) {
    font-size: 27.98upx;
    color: #808080;

  }

  .invitationNote p:nth-of-type(3) {
    font-size: 24upx;
    color: #808080;
    margin-top: 45.98upx;

  }

  .invitationNote p:nth-of-type(3) u {
    font-size: 24upx;
    color: rgb(68, 68, 68);
  }

  /* 适配*/
  @media (min-width: 320px) {
    .Invitation_img {
      height: 480upx;
    }

    .Invitation_t {
      height: 559.96upx;
    }

    .invitation-information li:nth-of-type(1) {
      width: 48%;
    }

    .invitation-information li:nth-of-type(2) {
      width: 40%;
    }

  }

  @media (min-width: 375px) {
    .Invitation_img {
      height: 559.96upx;
    }

    .Invitation_t {
      height: 639.98upx;
    }

    .invitation-information li:nth-of-type(1) {
      width: 42%;
    }

    .invitation-information li:nth-of-type(2) {
      width: 36%;
    }

  }

  @media (min-width: 414px) {
    .Invitation_img {
      height: 600upx;
    }

    .Invitation_t {
      height: 699.98upx;
    }

    .invitation-information li:nth-of-type(1) {
      width: 42%;
    }

    .invitation-information li:nth-of-type(2) {
      width: 36%;
    }
  }

</style>