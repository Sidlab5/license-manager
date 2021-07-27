import { SIDEBAR_CONTENT} from './actiontypes';



export const setSidebarContent = (num) => {
    return {
        type: SIDEBAR_CONTENT,
        num
    }
}
