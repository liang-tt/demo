
export function reviewStatus(status) {
  switch(status) {
    case 0: return "待审核"; break;
    case 1: return "已通过"; break;
    case 2: return "已拒绝"; break;
    default: return "全部"; break;
  }
}
