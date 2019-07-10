import localstorage from "./localstorage.js"

/**
 * 设置ios角标数
 * @param number
 */
function setAppBadgeNumber (number) {
  //#ifdef APP-PLUS
  localstorage.set('notice', {badgeNumber: number})
  plus.runtime.setBadgeNumber(number)
	//#endif
}

/**
 * 设置ios角标数+1
 */
function setIncBadgeNumber () {
  var notice = localstorage.get('notice')
  var number = 1
  if (notice.badgeNumber) {
    number = notice.badgeNumber + 1
  }
  setAppBadgeNumber(number)
  return number
}

function noticeHandler (payload) {
  if (!payload) return
  switch (payload.object_type) {
    case 'question':
    case 'pay_question_answered':
    case 'question_answer_confirmed':
      // mui.alert('/ask/' + payload.object_id + '?time=' + Date.parse(new Date()));
      // router.go(-1);
      // router.pushPlus('/ask/detail/' + payload.object_id + '?time=' + Date.parse(new Date()), 'list-page')
      break
    case 'pay_question_answered_askCommunity':
      // router.pushPlus('/askCommunity/major/' + payload.object_id, 'list-page')
      break
    case 'free_question_answered':
      // router.pushPlus('/ask/offer/' + payload.object_id, 'list-page')
      break
    case 'pay_answer_awake':
    case 'pay_answer':
    case 'answer':
      // router.go(-1);
      // mui.alert('/answer/' + payload.object_id + '?time=' + Date.parse(new Date()))
      // router.pushPlus('/answer/' + payload.object_id + '?time=' + Date.parse(new Date()), 'list-page')
      break
    case 'free_answer_awake':
    case 'free_answer':
      // router.pushPlus('/ask/offer/answers/' + payload.object_id, 'list-page')
      break
    case 'authentication_success':
      // 专家认证成功
      // router.pushPlus('/my?needalert=1', 'list-page')
      break
    case 'authentication_fail':
      // 专家认证失败
      // router.pushPlus('/my/pilot', 'list-page')
      break
    case 'company_auth_success':
      // 企业认证成功
      // router.pushPlus('/company/my', 'list-page')
      break
    case 'company_auth_fail':
      // 企业认证失败
      // router.pushPlus('/company/my', 'list-page')
      break
    case 'notification_money':
      // 资金变动通知
      // router.pushPlus('/my/Finance', 'list-page')
      break
    case 'user_following':
      // 用户关注通知
      // router.pushPlus('/share/resume/' + payload.object_id + '?goback=1', 'list-page')
      break
    case 'readhub_submission_upvoted':
    case 'readhub_new_submission':
    case 'readhub_comment_replied':
    case 'readhub_submission_replied':
		case 'readhub_username_mentioned':
      // 阅读发现文章回复，payload.object_id即为url，例如：/c/来吐槽/cszxnrfdf
      //router.pushPlus(payload.object_id, 'list-page')
			let url = payload.object_id.split('/')
			let slug = url[3]
			uni.navigateTo({
				url: '/pages/discover/detail?slug=' + slug
			})
      break
    case 'push_notice_readhub':
      // 推送阅读发现的文章
      if (payload.object) {
        goThirdPartyArticle(
          payload.object.view_url,
          payload.object.id,
          payload.object.title,
          payload.object.comment_url,
          payload.object.img_url
        )
      }
      break
    case 'push_notice_app_self':
      // 推送app内页
      //router.push(payload.object_id)
      break
    case 'push_notice_article':
      // 推送公告文章
      break
    case 'notification_level_up':
      // 用户积分等级提升;
      // userAbility.upgradeLevel(context)
      break
    case 'activity_enroll_fail':
    case 'activity_enroll_success':
      // 活动报名事件
      // router.pushPlus('/EnrollmentStatus/' + payload.object_id, 'list-page')
      break
    case 'pay_answer_new_comment':
      // 专业回答新的回复
      // router.pushPlus('/askCommunity/major/' + payload.object_id, 'list-page')
      break
    case 'free_answer_new_comment':
      // 互动问答新的回复
      // router.pushPlus('/ask/offer/' + payload.object_id, 'list-page')
      break
    case 'pay_answer_new_support':
      // 专业回答赞
      // router.pushPlus('/askCommunity/major/' + payload.object_id, 'list-page')
      break
    case 'free_answer_new_support':
      // 专业回答赞
      // router.pushPlus('/ask/offer/' + payload.object_id, 'list-page')
      break
    case 'im_message':
      // 聊天信息
      // router.pushPlus('/chat/' + payload.object_id, 'list-page')
      break
    case 'im_group_message':
      // 群聊信息
      // router.pushPlus('/group/chat/' + payload.object_id, 'list-page')
      break
    case 'invite_user_register':
      // 邀请用户注册成功
      // router.pushPlus('/invitation/friends', 'list-page')
      break
    case 'group_member_apply':
      // 申请加入圈子通知
      // router.pushPlus('/group/setting/' + payload.object_id, 'list-page')
      break
    case 'group_member_join':
      // 成功加入圈子
      // router.pushPlus('/group/detail/' + payload.object_id, 'list-page')
      break
    case 'group_audit_result':
      // 圈子审核结果
      // router.pushPlus('/group/detail/' + payload.object_id, 'list-page')
      break
    case 'recommend_daily_subscribe':
      // 每日热点推荐
			uni.navigateTo({ url: '/pages/report/daily?date=' + payload.object_id })
      // router.pushPlus('/hotrecommend/' + payload.object_id + '?showShare=0', 'list-page')
      break
  }
}

function addPushEventListener() {
	// 监听点击消息事件
	//#ifdef APP-PLUS
	var appDeviceInfo = localstorage.get('appDeviceInfo')
	plus.push.addEventListener('click', (msg) => {
		console.log('监听点击消息事件:' + JSON.stringify(msg))

		if (msg.type !== 'click') {
			return
		}

		// 判断是从本地创建还是离线推送的消息
		switch (msg.payload) {
			case 'LocalMSG':
				console.log('点击本地创建消息启动：')
				break
			default:
				console.log(msg)
				break
		}

		// 提示点击的内容
		if (msg.payload) {
			// plus.nativeUI.alert( "click:payload(JSON): "+JSON.stringify(msg.payload) )
			var payload = ''
			if (appDeviceInfo.platform == 'ios') {
				payload = msg.payload
			} else {
				payload = msg.payload
			}
			noticeHandler(payload)
		}
	}, false)

	// 监听在线消息事件
	plus.push.addEventListener('receive', (msg) => {
		if (msg.aps) {  // Apple APNS message
			console.log('接收到在线APNS消息：')
		} else {
			console.log('接收到在线透传消息：')
		}
		console.log(msg)
		if (msg.payload) {
			// plus.nativeUI.alert( "receive:payload: "+JSON.stringify(msg.payload) );
			var payload = ''
			if (appDeviceInfo.platform == 'ios') {
				payload = msg.payload.payload
				// ios这里用户正打开着app，需要弹窗提示
			} else {
				payload = msg.payload
				noticeHandler(payload)
			}
		}
	}, false)
	//#endif
}

export default{
  setAppBadgeNumber,
  setIncBadgeNumber,
  addPushEventListener
}