import localEvent from '@/lib/localstorage'

const currentUser = localEvent.get('UserInfo')

const UserId = currentUser.user_id ? currentUser.user_id : 0

const discover_select_user = UserId + ':discover_select_user'

const discover_select_tag = UserId + ':discover_select_tag'

const discover_select_position = UserId + ':discover_select_position'

export default {
  discover_select_user,
  discover_select_tag
}