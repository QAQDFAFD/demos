import { Ref } from 'vue'

// 允许将 ref 直接传递给组件
declare module 'vue' {
	interface ComponentCustomProps {
		data?: Ref<string> | Ref<any> | any
	}
}
